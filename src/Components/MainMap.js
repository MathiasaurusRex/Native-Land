import React, { Component } from 'react';
import Select from 'react-select';
import $ from 'jquery';
import L from 'leaflet';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import leafletPip from '@mapbox/leaflet-pip';

function isMarkerInsidePolygon(marker, poly) {
    var polyPoints = poly.getLatLngs();
    var x = marker.getLatLng().lat, y = marker.getLatLng().lng;
    var inside = false;
    for (var i = 0, j = polyPoints[0].length - 1; i < polyPoints[0].length; j = i++) {
        var xi = polyPoints[0][i].lat, yi = polyPoints[0][i].lng;
        var xj = polyPoints[0][j].lat, yj = polyPoints[0][j].lng;

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
};

const colorMap = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F'
};

const randomColor = () => {
  const r1 = Math.floor(Math.random() * 16);
  const r2 = Math.floor(Math.random() * 16);
  const g1 = Math.floor(Math.random() * 3);
  const g2 = Math.floor(Math.random() * 3);
  const b1 = Math.floor(Math.random() * 16);
  const b2 = Math.floor(Math.random() * 16);

  const color = `${colorMap[r1]}${colorMap[r2]}${colorMap[g1]}${colorMap[g1]}${colorMap[b1]}${colorMap[b1]}`;
  // const $div = $('#color');
  return '#'+color;
}

class MainMap extends Component {

  constructor(props) {
    super(props);
    this.selectChange = this.selectChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.resetmap = this.resetmap.bind(this);
    this.resizePanel = this.resizePanel.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.state = {
      map : false,
      currentSelection : [],
      indigenousTerritoriesGeoJSON : false,
      indigenousLanguagesGeoJSON : false,
      indigenousTreatiesGeoJSON : false,
      territoryPolygons : false,
      languagePolygons : false,
      treatyPolygons : false,
      currentLocation : '',
      currentResults : [],
      currentlyOnMap: [],
      currentMapResults : [],
      address: 'Enter location',
      currentIconClass : 'glyphicon glyphicon-remove',
      loaded : false
    }
  }

  componentDidMount() {
    // Initial JSON calls
    var that = this;
    $.get('coordinates/indigenousTerritories.json', function(data) {

      var territoryPolygons = L.geoJson(data, {
        style: function(feature) {
          return {
            color: randomColor(),
            weight : 1
          }
        },
        onEachFeature: function(feature, layer) {
          layer.on('mousemove', function(event) {
            var newSelections = [];
            var htmlForPopup = '';
            var results = leafletPip.pointInLayer([event.latlng.lng,event.latlng.lat], territoryPolygons);
            results.forEach(function(element,index,array) {
              newSelections.push({
                link : element.feature.properties.description,
                name : element.feature.properties.Name,
                color : element.options.color
              });
              htmlForPopup += '<h4><a href="'+element.feature.properties.description+'" target="_blank" >'+element.feature.properties.Name+'</a></h4>'
            });
            if(that.state.clicked) {
              that.setState({ currentMapResults: results });
            } else {
              that.setState({ currentMapResults: results, currentSelection : newSelections });
            }
            layer.setStyle({'fillOpacity': 0.6});
            layer.bindPopup(htmlForPopup);
          });
          layer.on('mouseout', function() {
            layer.setStyle({'fillOpacity': 0.3});
          });
          layer.on('click', function(event) {
            var newSelections = [];
            var results = leafletPip.pointInLayer([event.latlng.lng,event.latlng.lat], territoryPolygons);
            results.forEach(function(element,index,array) {
              newSelections.push({
                link : element.feature.properties.description,
                name : element.feature.properties.Name,
                color : element.options.color
              });
            });
            that.setState({
              currentSelection: newSelections,
              clicked : true
            });
          });
        }
      });
      var territoriesOptions = [];
      for(var i=0;i<data.features.length;i++) {
        territoriesOptions.push({value: data.features[i].properties.Slug, label: data.features[i].properties.Name});
      }
      that.setState({ territoriesOptions : territoriesOptions, territoryPolygons : territoryPolygons });
      if(that.state.territoryPolygons&&that.state.languagePolygons&&that.state.treatyPolygons) {
        that.setState({
          loaded : true
        });
      }
    });
    $.get('coordinates/indigenousLanguages.json', function(data) {
      var languagePolygons = L.geoJson(data, {
        style: function(feature) {
          return {color: randomColor(), weight : 1}
        },
        onEachFeature: function(feature, layer) {
          layer.on('mousemove', function(event) {
            var newSelections = [];
            var htmlForPopup = '';
            var results = leafletPip.pointInLayer([event.latlng.lng,event.latlng.lat], languagePolygons);
            results.forEach(function(element,index,array) {
              newSelections.push({
                link : element.feature.properties.description,
                name : element.feature.properties.Name,
                color : element.options.color
              });
              var languageLinks = element.feature.properties.description.split(',');
              htmlForPopup += '<h4>'+element.feature.properties.Name+' ';
              languageLinks.forEach(function(element1,index1,array1) {
                htmlForPopup += '<a href="'+element1+'" target="_blank" >'+(index1+1)+'</a>';
                if(index1!==languageLinks.length-1) {
                  htmlForPopup += ', '
                }
              });
              htmlForPopup += '</h4>';
            });
            if(that.state.clicked) {
              that.setState({ currentMapResults: results });
            } else {
              that.setState({ currentMapResults: results, currentSelection : newSelections });
            }
            layer.setStyle({'fillOpacity': 0.6});
            layer.bindPopup(htmlForPopup);
          });
          layer.on('mouseout', function() {
            layer.setStyle({'fillOpacity': 0.3});
          });
          layer.on('click', function(event) {
            var newSelections = [];
            var results = leafletPip.pointInLayer([event.latlng.lng,event.latlng.lat], languagePolygons);
            results.forEach(function(element,index,array) {
              newSelections.push({
                link : element.feature.properties.description,
                name : element.feature.properties.Name,
                color : element.options.color
              });
            });
            that.setState({
              currentSelection: newSelections,
              clicked : true
            });
          });
        }
      });
      var languagesOptions = [];
      for(var i=0;i<data.features.length;i++) {
        languagesOptions.push({value: data.features[i].properties.Slug, label: data.features[i].properties.Name});
      }
      that.setState({ languagesOptions : languagesOptions, languagePolygons: languagePolygons });
      if(that.state.territoryPolygons&&that.state.languagePolygons&&that.state.treatyPolygons) {
        that.setState({
          loaded : true
        });
      }
    });
    $.get('coordinates/indigenousTreaties.json', function(data) {
      var treatyPolygons = L.geoJson(data, {
        style: function(feature) {
          return {color: randomColor(), weight : 1}
        },
        onEachFeature: function(feature, layer) {
          layer.on('mousemove', function(event) {
            var newSelections = [];
            var htmlForPopup = '';
            var results = leafletPip.pointInLayer([event.latlng.lng,event.latlng.lat], treatyPolygons);
            results.forEach(function(element,index,array) {
              newSelections.push({
                link : element.feature.properties.description,
                name : element.feature.properties.Name,
                color : element.options.color
              });
              htmlForPopup += '<h4><a href="'+element.feature.properties.description+'" target="_blank" >'+element.feature.properties.Name+'</a></h4>'
            });
            if(that.state.clicked) {
              that.setState({ currentMapResults: results });
            } else {
              that.setState({ currentMapResults: results, currentSelection : newSelections });
            }
            layer.setStyle({'fillOpacity': 0.6});
            layer.bindPopup(htmlForPopup);
          });
          layer.on('mouseout', function() {
            layer.setStyle({'fillOpacity': 0.3});
          });
          layer.on('click', function(event) {
            var newSelections = [];
            var results = leafletPip.pointInLayer([event.latlng.lng,event.latlng.lat], treatyPolygons);
            results.forEach(function(element,index,array) {
              newSelections.push({
                link : element.feature.properties.description,
                name : element.feature.properties.Name,
                color : element.options.color
              });
            });
            that.setState({
              currentSelection: newSelections,
              clicked : true
            });
          });
        }
      });
      var treatiesOptions = [];
      for(var i=0;i<data.features.length;i++) {
        treatiesOptions.push({value: data.features[i].properties.Slug, label: data.features[i].properties.Name});
      }
      that.setState({ treatiesOptions : treatiesOptions, treatyPolygons: treatyPolygons });
      if(that.state.territoryPolygons&&that.state.languagePolygons&&that.state.treatyPolygons) {
        that.setState({
          loaded : true
        });
      }
    });

    // Initialize the map
    var map = L.map('mapid',{
      worldCopyJump: true,
      zoomControl: false,
      minZoom: 2,
    }).setView([45.706179285330855, -100.458984375], 4);

    L.Icon.Default.imagePath = '/img/';

    map.on('popupclose', function(e) {
      that.setState({
        clicked : false
      })
    });

    L.tileLayer( 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Powered by <a href="https://www.esri.com/">Esri</a> | Esri, HERE, Garmin, NGA, USGS, USDA, NPS, EPA',
    }).addTo( map );

    map.addControl(L.control.zoom({position: 'bottomright'}));

    this.setState({
      map : map
    });
  }

  addInformation(category, event) {
    const { currentlyOnMap, territoryPolygons, languagePolygons, treatyPolygons, indigenousTreatiesGeoJSON, indigenousLanguagesGeoJSON, indigenousTerritoriesGeoJSON, map } = this.state;
    var that = this;
    var newCurrentlyOnMap = [];
    if($(event.target).is(':checked')) {
      switch(category) {
        case 'territories':
          territoryPolygons.addTo(map);
          newCurrentlyOnMap.push('territories');
          that.setState({ currentlyOnMap : newCurrentlyOnMap });
          break;
        case 'languages':
          languagePolygons.addTo(map);
          newCurrentlyOnMap.push('languages');
          that.setState({ currentlyOnMap : newCurrentlyOnMap });
          break;
        case 'treaties':
          treatyPolygons.addTo(map);
          newCurrentlyOnMap.push('treaties');
          that.setState({ currentlyOnMap : newCurrentlyOnMap });
          break;
      }
    } else {
      switch(category) {
        case 'territories':
          var thisIndex = newCurrentlyOnMap.indexOf('territories');
          newCurrentlyOnMap.splice(thisIndex, 1);
          map.removeLayer(territoryPolygons);
          break;
        case 'languages':
          var thisIndex = newCurrentlyOnMap.indexOf('languages');
          newCurrentlyOnMap.splice(thisIndex, 1);
          map.removeLayer(languagePolygons);
          break;
        case 'treaties':
          var thisIndex = newCurrentlyOnMap.indexOf('treaties');
          newCurrentlyOnMap.splice(thisIndex, 1);
          map.removeLayer(treatyPolygons);
          break;
      }
      that.setState({ currentlyOnMap : newCurrentlyOnMap });
    }
  }

  selectChange(category, value) {
    const { map, currentlyOnMap, territoryPolygons, languagePolygons, treatyPolygons } = this.state;
    // Zoom, show sidebar, make value of dropdown
    var that = this;
    if(!value) {
      switch(category) {
        case 'territories':
          that.setState({
            currentTerritory : ''
          });
          break;
        case 'languages':
          that.setState({
            currentLanguage : ''
          });
          break;
        case 'treaties':
          that.setState({
            currentTreaty : ''
          });
          break;
        default:
          break;
      }
    } else {
      switch(category) {
        case 'territories':
          territoryPolygons.eachLayer(function(layer) {
            map.removeLayer(layer);
            if(layer.feature.properties.Name===value.label) {
              layer.setStyle({fillOpacity: 0.6});
              layer.addTo(map);
              map.fitBounds(layer.getBounds());
              that.setState({
                currentTerritory : value,
                currentSelection : [{
                    link : layer.feature.properties.description,
                    name : layer.feature.properties.Name,
                    color : layer.options.color
                }]
              });
            } else {
              layer.setStyle({fillOpacity: 0.3});
            }
          });
          break;
        case 'languages':
          languagePolygons.eachLayer(function(layer) {
            map.removeLayer(layer);
            if(layer.feature.properties.Name===value.label) {
              layer.setStyle({fillOpacity: 0.6});
              layer.addTo(map);
              map.fitBounds(layer.getBounds());
              that.setState({
                currentLanguage : value,
                currentSelection : [{
                    link : layer.feature.properties.description,
                    name : layer.feature.properties.Name,
                    color : layer.options.color
                }]
              });
            } else {
              layer.setStyle({fillOpacity: 0.3});
            }
          });
          break;
        case 'treaties':
          treatyPolygons.eachLayer(function(layer) {
            map.removeLayer(layer);
            if(layer.feature.properties.Name===value.label) {
              layer.setStyle({fillOpacity: 0.6});
              layer.addTo(map);
              map.fitBounds(layer.getBounds());
              that.setState({
                currentTreaty : value,
                currentSelection : [{
                    link : layer.feature.properties.description,
                    name : layer.feature.properties.Name,
                    color : layer.options.color
                }]
              });
            } else {
              layer.setStyle({fillOpacity: 0.3});
            }
          });
          break;
      }
    }
  }

  resetmap() {
    const { map, treatyPolygons, languagePolygons, territoryPolygons, currentSelection, currentLocation } = this.state;
    territoryPolygons.eachLayer(function(layer) {
      map.removeLayer(layer);
    });
    languagePolygons.eachLayer(function(layer) {
      map.removeLayer(layer);
    });
    treatyPolygons.eachLayer(function(layer) {
      map.removeLayer(layer);
    });
    this.setState({
      currentSelection : [],
      currentLocation : ''
    });
    map.setView([45.706179285330855, -100.458984375], 4);
  }

  resizePanel(currentIcon) {
    if(currentIcon==='glyphicon glyphicon-resize-full') {
      this.setState({
        currentIconClass : 'glyphicon glyphicon-remove',
      });
    } else {
      this.setState({
        currentIconClass : 'glyphicon glyphicon-resize-full',
      });
    }
  }

  onChange(address) {
    this.setState({
      address: address
    });
  }

  onBlur() {
    const { address, map, currentMapResults, currentlyOnMap, territoryPolygons, languagePolygons, treatyPolygons } = this.state;
    var that = this;
    geocodeByAddress(address,  (err, latLng) => {
      if (err) { console.log('Oh no!', err) }
      map.setView(new L.LatLng(latLng.lat, latLng.lng), 10);
      // map.setZoom(10);
      currentMapResults.forEach(function(element,index,array) {
        map.removeLayer(element);
      });
      var lat = latLng.lat;
      var lng = latLng.lng;
      var newSelections = [];
      if(currentlyOnMap.indexOf('territories')>-1) {
        var results = leafletPip.pointInLayer([lng,lat], territoryPolygons);
        results.forEach(function(element,index,array) {
          newSelections.push({
            link : element.feature.properties.description,
            name : element.feature.properties.Name,
            color : element.options.color
          });
          element.addTo(map);
        });
        that.setState({ currentMapResults: results, currentResults : [] });
      } else if(currentlyOnMap.indexOf('languages')>-1) {
        var results = leafletPip.pointInLayer([lng,lat], languagePolygons);
        results.forEach(function(element,index,array) {
          newSelections.push({
            link : element.feature.properties.description,
            name : element.feature.properties.Name,
            color : element.options.color
          });
          element.addTo(map);
        });
        that.setState({ currentMapResults: results, currentResults : [] });
      } else if(currentlyOnMap.indexOf('treaties')>-1) {
        var results = leafletPip.pointInLayer([lng,lat], treatyPolygons);
        results.forEach(function(element,index,array) {
          newSelections.push({
            link : element.feature.properties.description,
            name : element.feature.properties.Name,
            color : element.options.color
          });
          element.addTo(map);
        });
        that.setState({ currentMapResults: results, currentResults : [] });
      } else {
        // If nothing selected, search territories by default
        var results = leafletPip.pointInLayer([lng,lat], territoryPolygons);
        results.forEach(function(element,index,array) {
          newSelections.push({
            link : element.feature.properties.description,
            name : element.feature.properties.Name,
            color : element.options.color
          });
          element.addTo(map);
        });
        that.setState({ currentMapResults: results, currentResults : [], currentSelection: newSelections });
      }
    });
  }

  render() {

    const { loaded, currentIconClass, currentResults, currentLocation, currentSelection, currentTreaty, currentLanguage, currentTerritory, treatiesOptions, territoriesOptions, languagesOptions, address } = this.state;

    var style = { width: '100%', height: window.innerHeight };
    var sidebarStyle = {height: window.innerHeight-70};
    if(currentIconClass==='glyphicon glyphicon-resize-full') {
      sidebarStyle = {height: window.innerHeight-70, marginLeft: '-200px'};
    }

    var loadingStyle = {
      paddingTop : window.innerHeight/3,
      textAlign: 'center',
      width: '100%',
      height: window.innerHeight,
      background: 'rgba(255,255,255,0.8)'
    }
    if(loaded) {
      loadingStyle = {
        display: 'none'
      }
    }

    const inputProps = {
      value : address,
      onChange : this.onChange,
      onBlur: this.onBlur,
    }

    return (
      <div>
        <div style={sidebarStyle} className="side-panel">
          {window.innerWidth<768 ? <i onClick={this.resizePanel.bind(this, currentIconClass)} className={currentIconClass} /> : false }
          <h1>Learn more about where you live.</h1>
          <p>Native-Land.ca is a resource to help North Americans learn more about their local history.</p>
          <p><i>Search your address, or add territories to map below and click on polygons to learn more.</i></p>
          <PlacesAutocomplete className="form-control" placeholder="Enter a town or address" inputProps={inputProps} />
          {currentSelection.length>0 ?
            <div className="search-results">
              <h5><strong>Current selection:</strong></h5>
              {currentSelection.map((selection, i) => {
                if(typeof selection.link !== 'undefined') {var links = selection.link.split(',');
                  if(links.length>1) {
                    return (
                      <div key={'selection-'+i}>
                        <span className="color-swatch" style={{'background':selection.color}}></span>
                        {selection.name+' ('}
                        {links.map((link,k) => {
                          if(k!==links.length-1) {
                            return (
                              <a href={link} target="_blank">{k+1},</a>
                            )
                          } else {
                            return (
                              <a href={link} target="_blank">{k+1}</a>
                            )
                          }
                        })}
                        {')'}
                      </div>
                    )
                  }
                }
                return (
                  <div key={'selection-'+i}>
                    <span className="color-swatch" style={{'background':selection.color}}></span>
                    <a href={selection.link} target="_blank">{selection.name}</a>
                  </div>
                )
              })}
            </div>
          : false }
          <hr />
          <div className="selections">
            <h5><strong>Select information to add</strong></h5>
            <input onClick={this.addInformation.bind(this,'territories')} type="checkbox" /> Territories
            <input onClick={this.addInformation.bind(this,'languages')} style={{marginLeft: '10px'}} type="checkbox" /> Languages
            <input onClick={this.addInformation.bind(this,'treaties')} style={{marginLeft: '10px'}} type="checkbox" /> Treaties
            <Select
              className="select-specific"
            	value={currentTerritory}
              placeholder="Search and select territory"
            	options={territoriesOptions}
            	onChange={this.selectChange.bind(this,'territories')}
            />
            <Select
              className="select-specific"
            	value={currentLanguage}
              placeholder="Search and select language"
            	options={languagesOptions}
            	onChange={this.selectChange.bind(this,'languages')}
            />
            <Select
              className="select-specific"
            	value={currentTreaty}
              placeholder="Search and select treaty"
            	options={treatiesOptions}
            	onChange={this.selectChange.bind(this,'treaties')}
            />
          </div>
          <div className="notes">
            <p><i>This map does <strong>not</strong> represent a specific time period, make territorial claims, or serve as an academic source.</i></p>
            <a href="mailto:tempranova@gmail.com">Submit a comment or a fix here!</a>
          </div>
        </div>
        <div className="reset-map" onClick={this.resetmap}>
          Reset Map
        </div>
        <div className="loading-overlay" style={loadingStyle}><img src="img/hourglass.svg" /> <br /><p>Wait a little while... lots of data loading!</p></div>
        <div style={style} id="mapid"></div>
      </div>
    )
  }

}

export default MainMap;
