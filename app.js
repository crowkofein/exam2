$(document).ready(function () {


    //тут делаем модальное окно для about

    $('.ba-about-btn').on('click', function () {

        //modalImg
        let imgSrc = $(this).closest('.ba-about__info').find('img').attr('src');
        $('.showModal__img').attr('src', imgSrc);

        //modal title
        let title = $(this).closest('.ba-about__info').find('.ba-about__title').text();
        $('.showModal__title').text(title);

        //modal subtitle
        let subtitle = $(this).closest('.ba-about__info').find('.ba-about__subtitle').text();
        $('.showModal__subtitle').text(subtitle);

        //modal text 
        let text = $(this).closest('.ba-about__info').find('.ba-about__text').text();
        $('.showModal__text').text(text);

        openModal();

    })


    let openModal = function () {

        $('.ba-modal').addClass('ba-modal--open');
        $('body').addClass('ba-modal-is-open');
        $(document).on('keydown', function (e) {
            if (e.keyCode == 27) {
                closeModal();
            };
        });
    };

    let closeModal = function () {
        $('.ba-modal').removeClass('ba-modal--open');
        $('body').removeClass('ba-modal-is-open');
        $('.showModal__img').attr('src', '');
        $('.showModal__text').text('');
        $('.showModal__title').text();
        $('.showModal__subtitle').text();
        $(document).off('keydown', closeModal);
    };

    $('.ba-modal-close').on('click', closeModal);

    $('.ba-modal').on('click', function (e) {

        if ($(e.target).hasClass('ba-modal')) {
            closeModal()
        }

    })



    //slider
    $('.ba-slider').slick({

        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplay: false,
        appendDots: $('.ba-slider-nav')

    });




})

//map

let map;
function initMap() {

    let bestPointEver1 = { lat: 40.691298, lng: -73.900772 };
    let bestPointEver2 = { lat: 40.664975, lng: -73.876039 };

    map = new google.maps.Map(document.getElementById('map'), {
        center: bestPointEver2,
        zoom: 13,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [{ "color": "#f5f5f5" }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]



    });
    let image = new google.maps.MarkerImage('img/cupcake.png');
    
    let marker = new google.maps.Marker({
        position: bestPointEver1,
        map: map,
        icon: image 
    });
}