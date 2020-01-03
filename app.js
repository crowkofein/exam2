$(document).ready(function () {


    //тут делаем модальное окно
    //modal text
    $('.ba-btn').on('click', function () {
        let text = $(this).closest('.ba-about__info').find('.ba-about__text').text();

        $('.showModal__text').text(text);

        let title = $(this).closest('.ba-about__info').find('.ba-about__title').text();
        console.log(title);
        $('.showModal__title').text(title);
        
        
        let subtitle = $(this).closest('.ba-about__info').find('.ba-about__subtitle').text();
        console.log(title);
        $('.showModal__subtitle').text(subtitle);

        //modalImg
        let imgSrc = $(this).closest('.ba-about__info').find('img').attr('src');
        $('.showModal__img').attr('src', imgSrc);
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
        $(document).off('keydown', closeModal);
    };

    $('.ba-modal-close').on('click', closeModal);


    $('.ba-modal').on('click', function (e) {


        if ($(e.target).hasClass('ba-modal')) {
            closeModal()
        }

    })






})