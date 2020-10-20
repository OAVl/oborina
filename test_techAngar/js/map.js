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
      featureType : "all",
      stylers : [{
        saturation : -100
      }
      ]
    }, {
      featureType : "all",
      stylers : [{
        lightness : -20
      }
      ]
    }, {
      featureType : "all",
      stylers : [{
        gamma : 0.5
      }
      ]
    }, {
      featureType : "road",
      stylers : [{
        gamma : 0.85
      }
      ]
    }, {
      featureType : "road.arterial",
      stylers : [{
        gamma : 2.6
      }
      ]
    }, {
      featureType : "road.highway",
      stylers : [{
        lightness : 1
      }
      ]
    }, {
      featureType : "road.highway",
      stylers : [{
        gamma : 4
      }
      ]
    }
    ]
  });


  // Настройки метки

  var image = new google.maps.MarkerImage(
    ' ',
    new google.maps.Size(130, 130), //размер изображения иконки в пикселях
    new google.maps.Point(0, 0), //позиционирование иконки
    new google.maps.Point(65, 65) //центр иконки
  );

  var marker = new google.maps.Marker({
    position: myLatLng,
    icon : image,
    map: map,
    title: 'Фитнес клуб PRIME'
  });


}
