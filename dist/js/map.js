
function init() {
    let map = new ymaps.Map('map', {
        center: [55.713295434756574,37.51002380151365],
        margin: [130, 130, 130, 130],
        zoom: 11,
        behaviors: ['multiTouch', 'drag', 'scrollZoom']
    });

    let placemark = new ymaps.Placemark([55.63650812635154, 37.54214756229784], {}, {
        iconLayout: 'default#image',
        iconImageHref: './images/logo-square.png',
        iconImageSize: [57, 57],
        iconImageOffset: [-40, -40]
    });

    let placemark2 = new ymaps.Placemark([55.78728506893848,37.519808499999975], {}, {
        iconLayout: 'default#image',
        iconImageHref: './images/logo-square.png',
        iconImageSize: [57, 57],
        iconImageOffset: [-40, -40]
    });

    let placemark3 = new ymaps.Placemark([55.78781656896963,37.519467499999976], {}, {
        iconLayout: 'default#image',
        iconImageHref: './images/logo-square-children.png',
        iconImageSize: [57, 57],
        iconImageOffset: [-40, -40]
    });

    let clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: './images/cluster-icon.png',
                size: [56, 56],
                offset: [-28, -28]
            }
        ],
        preset: 'islands#governmentCircleIcon',
        clusterIconContentLayout: null,
        gridSize: 256,
        maxZoom: 13,
        useMapMargin: true
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); //удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил

    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
    map.geoObjects.add(clusterer);
    clusterer.add(placemark2);
    clusterer.add(placemark3);

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        map.behaviors.disable('drag');
        map.behaviors.enable('multiTouch');
    } else {
        let mapCards = document.querySelectorAll('.map__card');

        for (let i = 0; i < mapCards.length; i++) {
            let mapCardClose = mapCards[i].querySelector('.map__close');

            if (i == 0) {
                placemark.events.add('click', function() {
                    for (card of mapCards) {
                        card.classList.remove('map__card-visible');
                    }
                    mapCards[i].classList.add('map__card-visible');
                });
            } else if (i == 1) {
                placemark2.events.add('click', function() {
                    for (card of mapCards) {
                        card.classList.remove('map__card-visible');
                    }
                    mapCards[i].classList.add('map__card-visible');
                });
            } else if (i == 2) {
                placemark3.events.add('click', function() {
                    for (card of mapCards) {
                        card.classList.remove('map__card-visible');
                    }
                    mapCards[i].classList.add('map__card-visible');
                });
            }
            

            mapCardClose.addEventListener('click', function() {
                mapCards[i].classList.remove('map__card-visible');
            });
        }
        
    }
}

ymaps.ready(init);