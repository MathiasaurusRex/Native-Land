<?php 
header('Content-type:application/json;charset=utf-8');

// API creation
// People should be able to send a URL with a querystring like:

// http://native-land.ca/api?maps=territories,languages,treaties&name=sioux,metis

// It will return coordinates and I will provide a key for all the "names", which can be languages, nations or treaties
// Can return all by default, or it returns specific ones only asked for
    
// TO ADD
// - Can add 'single vs multiple' parameter to allow getting polygons from different maps at once

$mapsRequest = $_GET['maps'];
$nameRequest = $_GET['name'];
$result = array();

if($mapsRequest) {
    $territories = false;
    $languages = false;
    $treaties = false;
    
    $mapsRequestArray = explode(",", $mapsRequest);
    
    foreach ($mapsRequestArray as $key => $value) {
        if($value=='languages') {
            $languageResults = return_results('http://www.native-land.ca/coordinates/indigenousLanguages.json',$nameRequest);
            $result = array_merge($result,$languageResults);
        }
        if($value=='territories') {
            // Get territories
            $territoryResults = return_results('http://www.native-land.ca/coordinates/indigenousTerritories.json',$nameRequest);
            $result = array_merge($result,$territoryResults);
        }
        if($value=='treaties') {
            // Get treaties
            $treatyResults = return_results('http://www.native-land.ca/coordinates/indigenousTreaties.json',$nameRequest);
            $result = array_merge($result,$treatyResults);
        }
    }
}

$resultJSON = json_encode((array)$result);
echo $resultJSON;

function return_results($fileURL,$nameRequest) {
    $thisFile = file_get_contents($fileURL);
    $thisJSON = json_decode($thisFile);
    $result = [];
    if($nameRequest) {
        $nameRequestArray = explode(",", $nameRequest);
        foreach ($nameRequestArray as $key2 => $value2) {
            foreach ($thisJSON->features as $arr) {
                foreach ($arr as $obj) {
                    if($obj->Slug==$value2) {
                        array_push($result,$arr);
                    }
                }
            }
        }
    } else {
        foreach ($thisJSON->features as $arr) {
            array_push($result,$arr);
        }
    }
    return $result;
}
?>