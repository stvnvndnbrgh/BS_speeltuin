/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.getElementById("foot01").innerHTML = "<p>&copy; " + new Date().getFullYear() + " Bandagisterie Heverlee - All rights reserved.</p>";


document.getElementById("nav01").innerHTML =
    "<nav class='container' role='navigation'>"+
        "<div class='navbar navbar-default'>"+
            "<ul class='nav nav-pills nav-justified'>"+
                "<li><a href='home.html'>Home</a></li>"+
                "<li><a href='producten.html'>Producten</a></li>"+
                "<li><a href='contact.html'>Contact</a></li>"+
            "</ul>"+
        "</div>"+
    "</nav>";
    
function initMap() {
  var myLatLng = {lat: 50.862547, lng: 4.695413};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Bandagisterie Heverlee'
  });
}
 