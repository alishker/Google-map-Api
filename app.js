function initMap() {
    //map options
  var options = {
      zoom: 8,
      center: {lat: -0.1675, lng: 35.9659}
    
  }
  //new map
  var map = new google.maps.Map(document.getElementById('map'),options);
/*
//add marker
var marker = new google.maps.Marker({
  position:{lat:-.3031, lng:36.08},
  map:map
});
var infoWindow = new google.maps.infoWindow({
  content:'<h1>Admin Block</h1>'
});
Marker.addlistener('click', function(){
  infoWindow.open(map,marker);
});*/

//add marker function
function addMarker(coords){
  var marker = new google.maps.Marker({
    position:props.coords,
    map:map,
    //icon:props.iconImage
  });
  if(props.iconImage){
    //set icon image
    marker.setIcon(props.iconImage);
  }
  //check content
  if(props.content){
    var infoWindow = new google.maps.infoWindow({
      content:props.content
    });
    Marker.addlistener('click', function(){
      infoWindow.open(map,marker);
  });
}
}
addMarker({coords:{lat:-.3031, lng:36.08},
iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
content:'<h1>Admin Block</h1>'});
}


