ipElement = document.getElementById('ip');
locationElement = document.getElementById('location');
time = document.getElementById('time');
isp = document.getElementById('isp');
searchBtn = document.getElementById('search-btn');
input = document.getElementById('input');

success = (position) => {
  lat = position.coords.latitude
  long = position.coords.longitude
  map = L.map('map').setView([lat, long], 10)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

  L.marker([lat, long]).addTo(map)
  console.log(long)
  console.log(lat)
  {
    error= () => {
      alert("We apologize, we were unable to fetch the location")
    }
  }

  navigator.geolocation.getCurrentPosition(success, error)

  function ipSearch() {
    
  }

}
