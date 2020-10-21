function initMap() {

  // Метка на карте + координаты
  var myLatLng = {lat: 55.8825199, lng: 37.5529224};

  // Настройки карты
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng, // Координаты и центрирование по метке
    disableDefaultUI: true,
    mapTypeControl: true,
    styles : [{
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#444444"
        }
      ]
    },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#e79d26"
          },
          {
            "visibility": "on"
          }
        ]
      }

]
  });


  // Настройки метки

  var image = new google.maps.MarkerImage(
    '../img/метка.svg',
    new google.maps.Size(130, 130), //размер изображения иконки в пикселях
    new google.maps.Point(0, 0), //позиционирование иконки
    new google.maps.Point(65, 65) //центр иконки
  );

  var marker = new google.maps.Marker({
    position: myLatLng,
    icon : image,
    map: map,
    title: ''
  });


}
