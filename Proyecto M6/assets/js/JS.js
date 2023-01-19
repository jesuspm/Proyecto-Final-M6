// //GOOGLE MAPS
let map;

window.initMap = initMap;

function initMap() {
  const myLatLng = { lat: 41.390205, lng: 2.154007};
   map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });

  // getLatLng();
}


function getLatLng(address){
  let imagen = "Proyecto M6/assets/images/location.png";
  
  let geocoder = new google.maps.Geocoder();  
  geocoder.geocode( { 'address': address}, function(results, status) {  
    if (status == google.maps.GeocoderStatus.OK) { 
      let latitude = results[0].geometry.location.lat();  
      let longitude = results[0].geometry.location.lng();  
      console.log(latitude + " " + longitude);

      let center = new google.maps.LatLng(latitude, longitude);
      map.setCenter(center);
      map.setZoom(16);
      
      if (address.value = null) {
        console.log("error")
      }
    }

    let marker = new google.maps.Marker({
      position: {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()},
      map: map,
      icon: imagen 
    
    });
    let infowindow = new google.maps.InfoWindow({
      content:address
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
      
  });
}

document.getElementById("findLoc").addEventListener("click", function(){

  let direccion = document.getElementById("direccion").value;

  console.log(direccion);
  getLatLng(direccion);
  
});



  
