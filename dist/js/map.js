
function init() {
    let map = new ymaps.Map('map', {
        center: [55.713295434756574,37.51002380151365],
        zoom: 11
    });

    let placemark = new ymaps.Placemark([55.63650812635154, 37.54214756229784], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../images/logo-square.png',
        iconImageSize: [96, 96],
        iconImageOffset: [-40, -40]
    });

    let placemark2 = new ymaps.Placemark([55.78728506893848,37.519808499999975], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../images/logo-square.png',
        iconImageSize: [96, 96],
        iconImageOffset: [-40, -40]
    });

    let placemark3 = new ymaps.Placemark([55.78781656896963,37.519467499999976], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../images/logo-square-children.png',
        iconImageSize: [96, 96],
        iconImageOffset: [-40, -40]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); //удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
}

ymaps.ready(init);