import React, { Component } from 'react';

class Community extends Component {

  render() {
    return (
      <div className="container" style={{marginTop: '60px'}}>
        <h1>Community</h1>
        <p>This project isn't just built by one person! Many people have emailed in since the site started, with corrections, comments and much more. On this page,
        I list some of the comments and their responses so you can understand the process of how this map is built. </p>
        <p>All of the following are shown here with
        permission from all parties involved.</p>

        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  08-2015: Metis and Michif Inclusion with Native Map
                </a>
              </h4>
            </div>
            <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-body">
                <p>Hello Victor,</p>
                <p>I am contacting you to say thank you for this project. I think it is a great resource to have available to anyone. As well I have been thanked by other Native friends of mine for posting on Facebook.</p>
                <p>I am Metis from the Red River, this area covers basically from Winnipeg to Brandon and down to the border. I appreciated the Metis settlements that were included in the BC Area, but it may be worthwhile to check in with Manitoba Metis Federation if there are any land claims in Manitoba as well. Generally what happened with the Metis is that they were given large land scrips after the buffalo hunt had died down and during the mass Canadian migration to Winnipeg. However to survive the Metis generally sold their land scrips to settlers and businessmen for next to nothing.</p>
                <p>Furthermore the Metis language, Michif, is missing from the language map. This language has elements of both Cree and French, but also regional dialects and almalgamated words. I think it would definitely be worthwhile to investigate the landbase for the Michif area. My family is from Cayer, Fort Garry and Winnipeg Manitoba. My grandmother and her elder siblings learned Michif before or simultaneously with learning English. Here are some resources I know of:</p>
                <a href="http://www.michiflanguage.ca/index.html">http://www.michiflanguage.ca/index.html</a><br />
                <a href="http://www.learnmichif.com/language">http://www.learnmichif.com/language</a><br />
                <a href="http://www.mmf.mb.ca/michif_language.php">http://www.mmf.mb.ca/michif_language.php</a><br /><br />
                <p>Thank you for your work and feel free to ask any questions.</p>
                <hr />
                <div className="response">
                    <p>Thanks for the email and help! I really appreciate it.</p>
                    <p>I wouldn't mind putting Metis and Michif on there, but I've had trouble finding much in the way of maps, even approximate ones. I know you mentioned a few cities and down to the border, but I'm wondering if you would be willing to do some quick searches (even online) for a map you think is reasonable? It could help me a lot to get started. Goes for Metis territory or Michif language.</p>
                    <p>Thanks so much again, and good language resources once I get something on there!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  08-2015: Your Map Project
                </a>
              </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
              <div className="panel-body">
                <p>Hello Victor,</p>
                <p>Greetings, I saw your map project shared by a friend on Facebook.  I am also a settler who has felt I grew up with inadequate knowledge of  indigenous lands and no sense of where to begin finding out.   I wanted to thank you and encourage you for putting yourself out there and trying to start a dialogue with Canadians about these crucial issues.   I hope you can keep expanding your work or building connections of all kinds around it.</p>
                <p>I also wanted to share with you a good resource about Six Nations territory in Ontario. I am no expert on this, but I worked as a newspaper reporter in this territory and I found the following website (and accompanying maps) at the First Nation very helpful. I share your passion and your ambivalence about how to best speak to or about this important subject.</p>
                  <a href="http://www.sixnations.ca/LandsResources">http://www.sixnations.ca/LandsResources/</a>
                <hr />
                <div className="response">
                    <p>Thank you so much for this note! The Six Nations site was good, I added the Haldimand Treaty but the rest was a little vague and harder to use for the site yet. Still, I really appreciate your comment and the time you have taken to try to address your own settler consciousness and what it means to live in this land...</p>
                </div>
            </div>
          </div>
        </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingThree">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  07-2015: Skwxwu7mesh Uxwumixw
                </a>
              </h4>
            </div>
            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
              <div className="panel-body">
                <p>Our territory is Skwxwu7mesh Uxwumixw and we are a distinct people who speak a distinct language Skwxwu7mesh Snichim.</p>
                <hr />
                <div className="response">
                    <p>Thank you so much for your email. Can you see Skwxwu7mesh Uxwumixw on the map? It is on there, although it is a little tough to see as Tsleil-Waututh and some others overlap on some of the territory. I'm working on making it so that mousing over the territory shows all the overlapping territories, and also to make a clearer legend so that's more obvious.</p>
                    <p>Please feel free to let me know your thoughts, other ideas, or corrections you might have - I really really appreciate it!</p>
                </div>
                <hr />
                <p>On the template it said we're Halkemelem language speaking, and my point is that we are a Distinct people that speak Skwxwu7mesh Snichim.</p>
                <hr />
                <div className="response">
                    <p>Oh, I'm sorry, does it say that? Ok, I will fix that ASAP. Thanks again.</p>
                </div>
                <hr />
                <p>Awesome. Chen kw'enmantumi (I'm thankful)</p>
                <hr />
                <div className="response">
                    <p>Just letting you know that I managed to fix the problem so now the correct language shows when Skwxwú7mesh Úxwumixw appears.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingFour">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  08-2015: Indian territory map
                </a>
              </h4>
            </div>
            <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
              <div className="panel-body">
                <p>Hi,</p>
                <p>As an Indian I was excited to see your map, but then I zoomed in on where I live and there was a blank spot. I'm not that type of Indian though. I'm Tlingit, and you labeled them correctly.</p>
                <p>I live in Powhatan county in Virginia. It's just west of Richmond, VA. The story goes they were tired of naming places after authorities in the UK so they wanted something local. They apparently didn't think about it much and named the county I live in Powhatan. You know, the tribe with Pocahontas from the Disney stories?</p>
                <p>However, the Powhatan Indians and their confederacy of related tribes lived further east, the Indians that lived here were the Monacan, and they hated the Powhatan.  They were of course later chased out by settlers, but some remain (so few it has been a struggle to get recognized by the Feds as a tribe).</p>
                <p>Anyway, some starting info about the Monacan ...</p>
                <p><a href="https://en.wikipedia.org/wiki/Monacan_people">https://en.wikipedia.org/wiki/Monacan_people</a></p>
                <p><a href="http://huguenot-manakin.org/manakin/monacan.php">http://huguenot-manakin.org/manakin/monacan.php</a></p>
                <hr />
                <div className="response">
                    <p>I added the Monacan to the map, although it was hard to find any maps that even seemed mildly good on them. It should show when you search now!</p>
                    <p>Thanks very very much for the comment and the correction! Please send more anytime.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingFive">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  12-2015: Can't find on your wonderful map
                </a>
              </h4>
            </div>
            <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
              <div className="panel-body">
                <p><a href="http://www.komoks.ca/maps">http://www.komoks.ca/maps</a></p>
                <hr />
                <div className="response">
                    <p>Thank you for this! I will get to adding it very soon.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingSix">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  7-2015: suggestion for native-land.ca
                </a>
              </h4>
            </div>
            <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
              <div className="panel-body">
                <p>Great site! My suggestion for the territories map is to add the Hul'qumi'num Treaty Group <a href="http://www.hulquminum.bc.ca/news">http://www.hulquminum.bc.ca/news</a>.</p>
                <hr />
                <div className="response">
                    <p>Thanks! I had another suggestion on this same point - I'll be adding it in the next few days. Please let me know if you have any other suggestions, or also feel free to share it around more if there's others who might be interested. Thanks!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingSeven">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  7-2015: Anishinabek Nation not shown
                </a>
              </h4>
            </div>
            <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
              <div className="panel-body">
                <p>Ahniin,</p><p>Just curious why the Anishnabek Nation and Cree Nation are not indicated in Ontario or Manitoba?</p><p>Miigwech</p>
                <hr />
                <div className="response">
                    <p>Thank you so much for the email. The truth is that the map is very much in progress and it can be difficult to include everything (since it's just me working on it). I'm getting lots of suggestions and thank you for your fix!</p><p>Do you happen to have or know of any maps that can help me add the Anishnabek and Cree nations in Manitoba and Ontario? I would definitely like to add them. Thanks!</p>
                </div>
                <hr />
                <div className="response">
                    <p>Just letting you know that I added Anishinabek Nation... however, "Cree Nation" is hard to put together as it's a conglomeration of a whole lot of different nations, sometimes represented today by reserves rather than a 'traditional territory'. I added about 5-6 different Cree nations, but if you can help me to find a source for something that might be able to stand for the Cree on the map, please do let me know! Thanks again.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingEight">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                  8-2015: Qayqayt FN
                </a>
              </h4>
            </div>
            <div id="collapseEight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
              <div className="panel-body">
                <p>Great site/resource.  Plugged in New Westminster, and although some of the other nations with overlapping claim are id'd, Qayqayt FN doesn't pop up.</p>
                <hr />
                <div className="response">
                    <p>It's fixed now. Please let me know any other fixes or feel free to share the site with those interested.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingNine">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                  7-2015: native-land.ca
                </a>
              </h4>
            </div>
            <div id="collapseNine" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingNine">
              <div className="panel-body">
                <p>Super cool project!!!</p><p>I was checking out the south west corner of lake Athabasca in Alberta, and see that the Chipwyan Dene people who live around Fort Chipewyan aren’t included on your map – not sure what the requirements are, nor am I sure the “official” status of their lands in that region, but I know they live there and I didn’t see them on your map so thought I’d send you a quick note :-)</p><p>Let me know if I can help in any way!</p>
                <hr />
                <div className="response">
                    <p>Just following up. I added Chipewyan, Beaver, and Dene Tha' to the map today, mostly covering that space in Albertaish that you mentioned. If you do find any more spots or know nations that I'm missing, do let me know! Thanks!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTen">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                  8-2015: Tla'Amin / Sliammon
                </a>
              </h4>
            </div>
            <div id="collapseTen" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTen">
              <div className="panel-body">
                <p>Hello Native-Land.CA!</p><p>Great site, thank you for building it.</p><p>A gap to fill, if I may - forgive me if I'm mistaken or overlooking something obvious ...</p><p>I'm living in Powell River BC these days, and the local band Sliammon / Tla'Amin, (who also recently signed a treaty) appear to be absent from your map at present.</p><p>It must be so difficult to include everyone, with so many under-recognized nations, so no shame for the oversight, but thank you so much for trying, and for providing this resource.</p><p>My very best regards</p><p>All my relations</p><p><a href="http://sliammonfirstnation.com/">http://sliammonfirstnation.com/</a></p>
                <hr />
                <div className="response">
                    <p>Thanks for this fix! I really appreciate it, and I've added it in the Treaty section of the site. I also added a Sliammon traditional territory that for some reason was turned off, so it should show up now too when you search it.</p><p>Thanks again! Please feel free to message me any more fixes or share this with anyone who might be into it.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading11">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse11" aria-expanded="false" aria-controls="collapse11">
                  7-2015: Yukon territories/treaties
                </a>
              </h4>
            </div>
            <div id="collapse11" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading11">
              <div className="panel-body">
                <p>Great resource.</p><p>A couple of notes on the Yukon:</p>
                  <ul>
                    <li>Little Salmon/Carmacks, not Carmack</li>
                    <li>Vuntut Gwitchin, not Gwitchen</li>
                  </ul>
                 <p>For 11 of 14 First Nations in Yukon, (not White River, Liard or Ross River) the traditional territories also correspond to areas covered by land claims agreements (“modern treaties”).</p>
                <hr />
                <div className="response">
                    <p>Just letting you know I made those spelling corrections (I think!), and also I revised the Kaska Dena area on the map. Please let me know if you have any more corrections about that Yukon territory. Thank you so much.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading12">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse12" aria-expanded="false" aria-controls="collapse12">
                  7-2015: Project: Native Land
                </a>
              </h4>
            </div>
            <div id="collapse12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading12">
              <div className="panel-body">
                <p>Just looking over your site and it's got a lot of potential.</p><p>I have a number of suggestions for improving your site:</p>
                  <ul>
                    <li>License the work under an Open Data license</li>
                    <li>Publish your source code onto GitHub</li>
                    <li>Host your website on GitHub Pages</li>
                    <li>Use Open Street Map and Leaflet.js</li>
                    <li>Make the maps available in GeoJSON</li>
                  </ul>
                 <p>If you have any questions about any of the above or comments feel free to reach me.</p>
                <hr />
                <div className="response">
                    <p>Thanks for the technical suggestions - definitely good ideas. Yeah, I kind of abandoned the Github stuff at some point but I should indeed throw it up on there again.</p><p>I may look into Open Street Map, although the thing is pretty thoroughly coded into Google's systems right now. Leaflet looks interesting but of course it will be time consuming to switch systems. If I have some time to fob off work onto any volunteers I might get a chance to do that.</p><p>The coordinates are also generally not in GeoJSON right now but in a mix of KML and javascript format set up for Google's maps.</p><p>Let me know if you'd like to help at all with this project, maybe you can help me make some of these transitions. If not, the suggestions are great and I will put them on the to do list. Thanks again.</p>
                </div>
                <hr />
                <div className="response">
                    <p>Much better geojsons now... still gonna get it in leaflet, but sometime! So much work to do first.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading13">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse13" aria-expanded="false" aria-controls="collapse13">
                  7-2015: Native-Land Website Suggested Corrections
                </a>
              </h4>
            </div>
            <div id="collapse13" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading13">
              <div className="panel-body">
                <p>I am really appreciative that you decided to create such an important site where Canadians can see whose traditional territory they are on.  We really should be aware and this website should help.</p><p>I live in Vancouver - Musqueam Territory -  and teach in Surrey  - Katzie, Kwantlen and Semiahmoo Territory - was confused to see some of the Nations that popped up.  I know that the territories were shared and hard lines are difficult to draw. Yet it is known that the Sto:lo and the Katzie are not in Vancouver proper.</p><p>I have a attached some maps and links to help make this part of the site more reflective of the Nations in Metro Vancouver and the Fraser Valley.</p>
                <hr />
                <div className="response">
                    <p>I have definitely used this map you sent, and I agree that the area around Vancouver is a little broad-ranging when it comes to including Sto:lo and Katzie. I set up the map so that it would search a bit of a radius around a central point, so that it would reflect the more fluid boundaries of First Nations - basically trying to be more inclusive rather than less. I may narrow this a little because it definitely is a bit too much in the Vancouver area, although I'd still rather err on the side of more inclusivity than less (some Sto:lo nations may indeed have used/lived on areas considered today as "vancouver" at different points in time). Mapping is very problematic in the first place and I'm definitely struggling through these issues, so I would love to hear more input from you or others who you might be able to connect with me.</p><p>Thanks again so much for your time and suggestions, and I will put them into action in the next few days and you'll see those results soon.</p><p>Also, wondering if you have a better map of the Fraser Valley area that can include nations like Semiahmoo, Kwantlen and others (so I'm not just using Sto:lo generally)? Thanks!</p>
                </div>
                <hr />
                <p>I understand.  The boundaries are fluid.  Thank you though for tightening things up.  Greatly appreciated.</p><p>Maps are so hard to come by.  These are what I have (see attachment) but will see once I am back at work in September if others in my school district have better ones.</p><p>Speaking with the band office or Elders of any of these nations may help you with the mapping.  I suggest contacting their offices and seeing if they have specific people you could speak with.  Always good to speak with the nation directly and have them be involved in the process of territory delineations if possible.  Most contact info can be found online.</p>
                <hr />
                <div className="response">
                    <p>I tried contacting quite a lot of nations, however it's pretty difficult to get people to visit a random link:) Now that the site has got some attention, I have had some nations email me with corrections. Not enough though - so I'm just reaching out as widely as possible.</p><p>Thanks again! And please let me know any other corrections. There are a quite a lot more nations that have various land ties and claims to Vancouver and Surrey than you mentioned, however I am missing more, like Kwantlen and Semiahmoo... if you have maps for these, let me know:)</p>
                </div>
                <hr />
                <p>I think that the attachment I sent last email had some of those nations (Kwantlen + Semiahmoo) indicated on the a few of the maps.</p><p>I know it is hard to get in touch.  Like you said, with more attention maybe they will recognize the site.</p>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading14">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse14" aria-expanded="false" aria-controls="collapse14">
                  7-2015: Names of Traditional Territories / Indigenous Countries
                </a>
              </h4>
            </div>
            <div id="collapse14" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading14">
              <div className="panel-body">
                <p>Nice map. This wikipedia page I wrote might be another resource:</p><p><a href="https://en.wikipedia.org/wiki/List_of_traditional_territories_of_the_indigenous_peoples_of_North_America">https://en.wikipedia.org/wiki/List_of_traditional_territories_of_the_indigenous_peoples_of_North_America</a></p><p>I did graduate studies in American Indian Studies at Montana State University, and this list of traditional territories compiles my research into the names for the indigenous "countries."</p>
                <hr />
                <div className="response">
                    <p>FANTASTIC. I probably came across this before, but thanks so much for sending it my way.</p><p>
  A lot of people have been messaging me about extending the map across Turtle Island, so this is going to come in really handy as I go down that long path.</p><p>Would you know anyone or maybe be interested yourself in helping me get together the various maps and correct territories, etc?</p>
                </div>
                <hr />
                <p>Dude, I'd be glad to help. I've got lots of maps to share. How shall we begin?</p><p>First, overall your work is great. Even without any changes, it's a
  fine consciousness raiser and overview of the indigenous territories.</p><p>As far as the details, there are several things I wonder about, or
  would do differently.</p>
                  <ol>
                    <li>How can there be a "language territory" which is not a "national territory"?</li>
                    <li>I don't know which sources you used for the "(national)
  territories" map, but it would be best to use only indigenous-approved
  maps, because maps made by other people (including academics and
  government agencies) tend to be just vague blobs which only
  cartoonishly approximate the detailed, very specific shapes which the
  indigenous nations claim as their traditional territory. For example,
  see the attached Algonquin Traditional Territory map which the
  Algonquin themselves have drawn.</li>
                    <li>Though it's fine to have a separate "treaty" map like you have,
  which just shows treaties, these treaty areas all need to be added to
  the "territory" map---since the treaty areas are obviously the
  national territory of the nations which are party to the treaty!</li>
                    <li>Though it would require some discernment and judgement calls, for
  the "territories map" it would be most consistent to only show the
  "complete, historic root nations", and not show the amalgamated
  "supra-regional nations" (a.k.a. treaty councils) which are modern
  entities  based on treaty areas. For example, the Anishinabek Nation
  territory (a.k.a. Union of Ontario Indians) you show is really a
  recent amalgamation of the six historic "root nations" -- the Odawa,
  Ojibway/Chippewa, Pottawatomi, Delaware, Algonquin and Mississauga --
  which happen to be located in that Treaty Area. But of course the
  traditional territories of those six nations extends far beyond the
  Anishinabek treaty area. Counting the U.S. treaties, the Ojibwe treaty
  area borders West Virginia in the south!</li>
                  </ol>
                  <p>Or perhaps the modern amalgamated entities such as "treaty councils"
  and "tribal councils" (an association of band councils) could be shown
  on one map. And the territories of the "root nations" could be another
  map.</p><p>I can look through my map files and send maps of Traditional
  Territories from Canada.</p>
                <hr />
                <div className="response">
                    <p>Thanks for all this, especially your list of concerns and ideas.</p><p>

  There's a few areas I'm wanting to expand into -- but then, any corrections for existing maps are useful too. Mainly, I want to expand into North America beyond Canada - so good maps for that would be key.</p><p>

  For your questions:</p>
  <ol>
  <li>Language territory and a nation may be distinct - for instance we speak English in Canada, England, Australia, etc, but they are all different nations. Hulqiminum, a Coast Salish language here, comprises at least 20 different nations. A nation is a pretty shaky concept when it comes to Indigenous cultures, since there are so many subdivisions and problems due to colonial impositions, splits, forced concepts, status vs non status, etc... so it's really just a big shaky thing to be drawing any kind of "nation territories" at all. I'm kind of going with the flow.</li>

  <li>Of course I agree 100%, it would be ideal to only use "traditional territory" maps put out by nations themselves. But bear in mind in Canada alone there are over 630 nations, and by no means do all of these have funds, time, or historical impetus to research out their 'traditional territory'. In many cases this has only happened because of modern land treaty desires by government - that's one reason why BC nations are so well mapped out as opposed to Plains and Eastern nations. Those other nations further east were all lumped together under treaties, pushed onto reservations, and 'traditional territory' isn't necessarily a major project (although it's growing).</li>

  <p>This is all to explain that yes, the most ideal situation is borders exclusively approved by nations themselves (and by the way, thanks for the Algonquin one, hadn't seen that one yet).. but in many cases these maps are hard to find or just don't exist. Ideally I'll call every single nation to enquire about this but obviously that's a lot of work.</p>

  <p>Otherwise, it's unfortunately necessary to rely on somewhat crappy maps - I try to avoid ones that are obviously very colonial (in that they are just huge blobby messes with really general names)... but for instance, people in northern Manitoba want to see "Cree" when they search their hometown, so I have to have something there. So I draw a general bubble for "Cree" even though it doesn't correspond to any nation's borders that exist today.</p>

  <p>See the funny balancing act I'm trying to do? Trying to make the map representative of nations' own self-given boundaries, but also make it actually cover most of Canada and not just the splotches that have been mapped in that way.</p>

  <li>I disagree about treaty boundaries being the same as national boundaries. In many cases treaties were not made with single nations, but with numerous nations (maybe even dozens)... this is especially the case in the numbered treaties. In central Canada, many different treaties happened with a lot of different nations, bands, even just different villages. In Northwest Territories and Yukon, it's a bit closer to what you said, where in those cases modern treaties do approximately reflect what nations consider their own territories. Otherwise, it's kind of a hodgepodge of craziness, so I've put it on there to help cover some of those territories that don't have the "nation" maps.</li>

  <p>People from treaty territories will sometimes identify themselves as "from Treaty 8 territory", but I don't get the sense it's at all a nation... there are numerous nations within.</p>

  <li>Finally, questions about different Treaty Groups, Settlement Councils, etc... I agree this is a really difficult issue and it's not quite so clear as removing all the treaty groups. Many of the treaty groups' sub-nations might be very small (just one reservation of a few dozen people) and might not have mapped out any traditional territory. Also, those Treaty Groups might cover a more general territory that would otherwise be left blank. I really don't want people to Google where they are and get no answer at all.</li>
  </ol>
  <p>I would be OK with adding the individual nations that are within those Treaty groups, but until I have something to fill in those spaces then it's good to have at least something for people to reference. High on my list is the Sto:lo treaty group, which contains TONS of nations... although again maps can be very difficult to find for these nations.</p>

  <p>I've actually had a few emails asking me to add other treaty groups, and I kind of just discern these as they come through and see if I think they'll add any educational information for people.</p>

  <p>I don't mind the idea of separating those supra-councils into another switch on the map, eventually, although I think there's not quite enough of them just yet. Maybe you could help me sorting that out and making a list of these so I can separate them effectively?</p>

                    <p>Thanks for the maps!! Super great stuff!! I will get to adding these all in the next 2-3 days.</p>

  <p>And great resources for USA stuff... you're helping a lot, my friend! Thanks again and I'll message you again soon!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading15">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse15" aria-expanded="false" aria-controls="collapse15">
                  7-2015: Regarding Newfoundland
                </a>
              </h4>
            </div>
            <div id="collapse15" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading15">
              <div className="panel-body">
                <p>So, a quick correction, but Newfoundland is not solely land associated with the Beothuk, but the west coast to south-central area of the island is associated with Mi'kmaq people.</p><p>There is a map in this piece denoting the firm legal claim of the Mi'kmaq, prior to the establishment of a small reserve near Gros Morne National Park and the landless-status of the remaining Mi'kmaq of the island. Map: <a href="http://iportal.usask.ca/docs/Native_studies_review/v7/issue2/pp43-51.pdf">http://iportal.usask.ca/docs/Native_studies_review/v7/issue2/pp43-51.pdf</a></p>
                <hr />
                <div className="response">
                    <p>Thank you SO much for this correction! I am still very much working on adapting and updating the site, so your change might take a few days but the map helps immensely with that. Check it out in a week and it should be on there, and again I appreciate your help so much, please feel free to message me with any more corrections or share the map more.</p>
                </div>
                <hr />
                <p>Just wanted to send you along a note of thanks for those changes you made a while back and also of congratulations. Your project has really caught on amongst a lot of the social and activist-y circles I float in and it's clear from the amount of additions you've made that a lot of progress is being made all round.
  </p><p>So, again, thanks for getting this going--it is an invaluable resource for folks understanding. :)</p>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading16">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse16" aria-expanded="false" aria-controls="collapse16">
                  8-2015: Native land map
                </a>
              </h4>
            </div>
            <div id="collapse16" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading16">
              <div className="panel-body">
                <p>Hello! I found your native land map interesting. I have a suggestion for making it more complete. There are traditional territories not depicted on the map in the vicinity of the western shore of Great Bear lake in the Northwest Territories, and also I’m not entirely certain, but I think the territory of the Gwich’in extends right to the delta of the Mackenzie river in the Beaufort sea. In addition, it would be fascinating to see the various Inuit traditional areas, although you would need to extend some of those beyond the Canadian border, in fact beyond North America!!</p><p>Forgive me if I am not correct about any of these things.</p>
                <hr />
                <div className="response">
                    <p>Thanks so much for this message. I definitely have a ton of blank spots that are hard to fill, mostly because of the scarcity of any kind of good maps. There are really old colonial maps that are too general, and a lot of the traditional territory maps that I see don't cover everything (understandably, since maps themselves are pretty colonial).</p><p>Maybe you can help me? I did some more searches for Gwich'in traditional territory, but I couldn't find much other than what I have on the map. I'll be sure to add NWT soon... been meaning to, along with Inuit... some decent simple maps to get started today <a href="https://www.google.ca/search?q=northwest+territories+first+nations&safe=off&espv=2&biw=1224&bih=958&source=lnms&tbm=isch&sa=X&ved=0CAcQ_AUoAmoVChMI6Yaj8MuXxwIVzz6ICh0Pgwn7#imgrc=_">https://www.google.ca/search?q=northwest+territories+first+nations&safe=off&espv=2&biw=1224&bih=958&source=lnms&tbm=isch&sa=X&ved=0CAcQ_AUoAmoVChMI6Yaj8MuXxwIVzz6ICh0Pgwn7#imgrc=_</a>.</p>
                </div>
                <hr />
                <p>I found this map, <a href="http://www.enr.gov.nt.ca/sites/default/files/land_claim_map.pdf">http://www.enr.gov.nt.ca/sites/default/files/land_claim_map.pdf</a> on a Northwest territories government website. It has more to do with "land claims" which I gather is the land various groups would like to have control over, not necessarily land that was ever considered by their ancestors to be “theirs” as opposed to “someone else’s”! However, there are areas indicated as “asserted territories” which I take to mean that the native groups themselves are asserting that they ARE traditional territories.</p>
                <p>I know there is some dispute even among native groups. For instance there are areas where the Inuit and First Nations traditionally came to dispute, even before the arrival of Europeans. “Bloody Falls” for instance is the site of a battle between Inuit and First Nations that resulted, allegedly, in the river running red! Then there is the land of the “Copper Inuit” that stretches inland from the sea along the copper mine river. These Inuit were one of the only Native groups to make things out of metal before European contact!</p>
                <p>I find all this fascinating. The Northwest Territories (where I live) has some TEN official languages because of how many distinct groups of people live here. If you wanted to divide it equally, that’s one language for every four thousand people who live here! (Of course it’s not equal) </p>
                <p>Anyway I suggest if you’re interested, the GNWT has lots of online maps and things. I guess The Nunavut government probably does too. Also the Prince of Wales museum in Yellowknife has many resources. I find the government in the NWT is very culturally sensitive compared with many places in North America, and I believe the information is trustworthy. </p>
                <p>Good luck with your research!</p>
                <hr />
                <div className="response">
                    <p>I was just writing you another message.</p>
                    <p>I used that map you sent in originally drawing for NWT. If you look closely, you'll notice there's all kind of land in NWT that's not included inside "traditional territory" boundaries. This includes areas of Settlement Areas and the Sahtu Agreement.</p>
                    <p>I enabled Sahtu for territory as well, but I'm not as sure about the distinction between territory and treaty when it comes to NWT and Yukon as opposed to, say, in the Prairies where it's more obviously different.</p>
                    <p>What do you think of that, should I include them all under both treaty and territory?</p>
                    <p>This is the govt map for the languages of NWT as well: <a href="http://www.ece.gov.nt.ca/files/publications/024-Official_Languages_Map-web.pdf">http://www.ece.gov.nt.ca/files/publications/024-Official_Languages_Map-web.pdf</a>
  </p>
                    <p>Thanks for the story too!</p>
                </div>
                <hr />
                <p>I’m not really all that knowledgeable frankly. You’re right, the “traditional territory” is different from the claimed territory. I think however, that once you get the Inuit information there will be lots more to include in the NorthWest territories. I know a guy who lives in the summer on Contwoyto lake, on the NWT/ Nunavut border, pretty far inland, who claims his family has lived there since time immemorial. Also his last name is “Franklin” and he claims a patrilineal relationship to Franklin the explorer! </p>
                <p>Anyway I can imagine that there is lots of territory everywhere that no-one, including natives, has any use for!  It’s pretty barren and inhospitable in some places!</p>
                <p>Good Luck, I think your map is very interesting.</p>
                </div>
              </div>
            </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading17">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse17" aria-expanded="false" aria-controls="collapse17">
                  8-2015: Native Land - Secwepemc; Victoria, BC
                </a>
              </h4>
            </div>
            <div id="collapse17" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading17">
              <div className="panel-body">
                <p>Weytk,</p><p>Cqltqín (Mabel Lake) & Shuswap Falls are in Secwepemcul'ewc.</p><p>See <a href="https://intercontinentalcry.org/new-parking-lot-would-destroy-historic-fishing-and-village-site-in-southern-b-c/">https://intercontinentalcry.org/new-parking-lot-would-destroy-historic-fishing-and-village-site-in-southern-b-c/</a> for just one reference. The Falls are a historic shared fishing site (see for one reference <a href="http://shuswapwatershed.ca/pdf/Shuswap_Dams.pdf">http://shuswapwatershed.ca/pdf/Shuswap_Dams.pdf</a>)</p><p>Kukstsemc.</p>
                <hr />
                <div className="response">
                    <p>Great, I will retrace this in the next day or so! Thanks!</p>
                </div>
                <hr />
                <div className="response">
                    <p>Hi, I extended this out and they are covered now. Thanks again.</p>
                </div>
                <hr />
                <p>Victoria isn't all WSANEC land, some Lekwungen (Songhees) and Esquimalt peoples, Mount Douglas (PKOLS) is a shared site between WSANEC and Lekwungen peoples. See - <a href="http://bcheritage.ca/salish/ph2/map/lekwungen.htm">http://bcheritage.ca/salish/ph2/map/lekwungen.htm</a> and <a href="http://bcheritage.ca/salish/ph2/map/01.htm">http://bcheritage.ca/salish/ph2/map/01.htm</a>.</p>
                <hr />
                <div className="response">
                    <p>This map is pretty hard to use, but it's a start, I'll do my best with it. Thanks again and please feel free to send more fixes!</p>
                </div>
                <hr />
                <p>This map is a fantastic start, and it's easy for people to use, which is a bonus. I also know the complications of mapping exceptionally fuzzy boundaries and shared territories. I'm Secwepemc and I'm currently living on Lekwungen territory, which is why I noticed the missing data.</p>
                <hr />
                <p>Weytk Victor,</p>
                <p>I noticed that there is some of Secwepemcul'ewc missing from the Secwepemc territory polygon (northern part). Soda Creek and Xats'ull are Secwepemc, not Dakelh.</p>
                <p>Kukstsemc</p>
                <hr />
                <div className="response">
                    <p>Sorry it took me so long to get to this. Been really trying to work on the site and spread it around lately.</p>
                    <p>How do you feel about having overlapping territories of Secwepemc and Dakelh? I have the search set up to give maximum results, so that people searching Soda Creek should get a few results, but it doesn't have to be like that.</p>
                    <p>If you are sure that it should appear as exclusively Secwepemc I will change it, but just want to double check. I'm pretty new to dealing with whose territory is whose, and thank you so much again for the help you give!</p>
                    <p>The update will be up tonight either way:)</p>
                </div>
                <hr />
                <p>Weytk Victor,</p>
                <p>I know it is definitely Secwepemc, but not sure if it is also Dakelh. Myself, I would say it is overlapping, but I'm not from that part of the territory, so I cannot say with authority. I would say put it as overlapping and if someone knows it isn't they can contact you. I know where all of our reserves are located are definitely exclusively in our territory (this is not always the case with every nation because reserves were made by the government), so you could zoom in on Google Maps and see where the reserves are as a guide. We do also have territory markers that have always set the exclusive bounds of our territory in relation to our neighbours, but I only know for certain of ones in the southern part because that's where I'm from. To be conscious of the Dakelh I would say it's safe to have it overlapping in that area unless there is a Secwepemc reserve there.</p>
                <p>Kukstsemc, thank you again for this interactive map, it I useful. Even where the boundaries are wrong, it still a good tool in that we're having good dialogue about our territories. I've talked with a few Indigenous people at UVic about the map and it is interesting how it starts conversation about sovereignty/territories/boundaries etc. in a good way.</p>
                <p>As I work with it more, I'll keep you updated if I see anything I notice is off.</p>
                <hr />
                <div className="response">
                    <p>Glad to know people are using it.</p>
                    <p>Would you be interested at all in helping write up a document, or some notes, on helping teachers or other people using the map on starting discussions that are important? Around colonialism, indigenous history and ways of knowing, that kind of thing. I get a lot of teachers emailing me and I'm asking around to a few people who might be interested in creating a document for teachers. What do you think?</p>
                </div>
                <hr />
                <p>Weytk Victor,</p>
                <p>I definitely think that could be a possibility, though I feel like some good resources have already been created. I'm currently working with a group of faculty, staff and students in an initiative to decolonize the Geography department and we're working on starting to develop a decolonization handbook. And I know others are working on similar initiatives. I do know there are a few good sources out already:</p>
                <p>(various resources were added to the <a href="http://native-land.ca/ca/resources.html#other-resources">Resources page</a> and <a href="http://native-land.ca/ca/teachers-guide.html">Teacher's Guide</a>)</p>
                <p>Let's keep in touch, and I can also forward any useful resources I come across.</p>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading18">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse18" aria-expanded="false" aria-controls="collapse18">
                  7-2015: Fixes to the map
                </a>
              </h4>
            </div>
            <div id="collapse18" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading18">
              <div className="panel-body">
                <p>What an amazing resource! Just wanted to let you know that the Hul'qumin'um Treaty Group and Cowichan Tribes (Cowichan Valley, Vancouver Island) are not yet added. Thanks for this!!</p>
                <p><a href="http://www.hulquminum.bc.ca/">http://www.hulquminum.bc.ca/</a></p>
                <hr />
                <div className="response">
                    <p>I'm having a hard time knowing/deciding/figuring out which nations, groups, and treaty groups to add. For the most part I am trying to be as pluralist and inclusive as possible, but at the same time aware of colonial divisions and whether or not treaty groups should be treated similarly to nations on the map.</p>
                    <p>Do you have any thoughts about this? I definitely need help with some of these issues.</p>
                    <p>At least, thank you so much for sending this, as it does as more complexity to the map and I will try to add it in the next week (I have been getting a lot of corrections for the site so it will take a few days to get through them all). Thanks again!</p>
                </div>
                <hr />
                <p>Yes, this is difficult. Especially in BC where there are many nations that, in most areas on the coast, overlap. There are also distinctions to be made between historic nation names and present day nation names (Im thinking here of the Lekwungen and Songhees in Victoria). In the case of the Hul'qumin'um Treaty Group there are six distinct nations that are related historically and through the treaty process so the treaty group is more of a macro grouping than a micro one. </p>
                <p>There will never be a perfect way of doing it and no person or group will agree on the best way to do it. I think encouraging people to submit would be the best and you could always add/footnote etc. In the case of treaty groups you could possibly link to the group where the different nations are defined. While Inuit identify differently from First Nations, the Inuit Regions provide this kind of macro framework https://www.itk.ca/about-inuit/inuit-regions-canada</p>
                <hr />
                <div className="response">
                    <p>I've added the Treaty Group for now, looks good. Basically I link to their website, I figure they can do better than me at explaining:)</p>
                    <p>Thanks for all the time and corrections!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading19">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse19" aria-expanded="false" aria-controls="collapse19">
                  7-2015: Corrections to the map
                </a>
              </h4>
            </div>
            <div id="collapse19" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading19">
              <div className="panel-body">
                <p>I just came across this site - what a great resource! However, I wanted to point out a couple of inaccuracies I found by just briefly searching places I know something about:</p>
                <p>The language spoken in Watson Lake, YT, Lower Post, BC, and Good Hope Lake, BC is Kaska. The languages spoken in Ross River are: Kaska and Mountain Slave.</p>
                <hr />
                <div className="response">
                    <p>Do you by any chance have access to any maps for this? I can adjust the boundaries manually anyway, but it can useful if there's any maps I can trace and put as a source too. But if not, that's OK!</p>
                    <p>Thank you again for messaging me about this and please feel free to spread the website around, it's just starting to grow!</p>
                </div>
                <hr />
                <p>Thanks for the reply. Hmm, a map... I think putting boundaries around these kinds of things is always really tricky, because you are always going to have overlaps - nothing is really clear cut. However, as far as Kaska traditional territory goes, I would go by the Kaska Dena Council map: <a href="http://www.kaskadenacouncil.com/kaska-dena/our-land">http://www.kaskadenacouncil.com/kaska-dena/our-land</a>. Maybe the best way to go about it is to go by tribal maps, although again, there might be some overlaps and even some disputes about that too. </p>
                <p>I was wondering, who are you and what got you into this project? I work on language revitalization with Kaska, that's why I know more about it.</p>
                <hr />
                <div className="response">
                    <p>I think overlaps are totally OK - I definitely don't have a need to establish any kind of exclusive boundaries, since that's not so much how things worked in the past or how they work today... reality is so fluid. I'm really trying to have this map just give general ideas, direction, some information to people who might want to know more.</p>
                    <p>It's also meant to spark a kind of consciousness, especially amongst settler Canadians, that the land IS indigenous territory and it's not just "terra nullius", blank space, as so many settlers learn in our history and culture. I'm a settler myself, my family is largely from Spain and other parts of Europe, although I was born in traditional Katzie territory (Maple Ridge) and grew up in the Okanagan in BC. I do programming and web design for work - I have a little freelance operation - and I like to put my skills to work in things I care about.</p>
                    <p>I have been using a pretty wide variety of maps to try to come up with at least reasonable starting points for corrections, although I know it's really not complete, and moreover these things are very controversial for good reasons. Reinscribing colonialism, boundaries, etc. Yet despite that it seems like this still might be something that's better to have in existence than only silence. Does that make sense?</p>
                    <p>I'm the only one working on it so it's pretty simple at this point, but I'm trying to get as much feedback as possible. Have talked with a wide variety of people, and they mostly seem into it, although there is plenty of criticism too. Like I said, I'm 100% ok with maps overlapping and taking criticism and suggestions, so feel free to send me any more resources or send it around to others who might have ideas.</p>
                    <p>By the way, I finally added the Kaska Dena according to the map you sent, and also doubled that for the language - we'll see if I get more corrections/fixes on it. Let me know if you have any more too. Thanks!</p>
                </div>
                <hr />
                <p>Great, thanks for the update! I think the website is a great idea! As I was driving up north to the Yukon back in June, I was actually thinking I wished there was a way to track the different traditional territories I was passing through! I am pretty familiar with Yukon and some parts of BC, but not all. I will take a look on the website when I have time, to see if I find any obvious mistakes about places I know about. I am still up north working. Perhaps a phone app is next!?! I think that would really be great!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Community;