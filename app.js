function initMap() {
    //map options
  var options = {
      zoom: 8,
      center: {lat: -0.1675, lng: 35.9659}
    
  }
  //new map
  var map = new google.maps.Map(document.getElementById('map'),options);

//add marker
var marker = new google.maps.Marker({
  position:{lat:-.3031, lng:36.08},
  map:map
});
}
    