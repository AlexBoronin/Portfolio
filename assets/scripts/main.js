'use strict';

$(document).ready(function () {
    const smooth = ['-100%', '-200%', '-300%', '-400%'];
    const contentItems = $('.content__items');
    const about = $('#me');
    const skills = $('#skills-item');
    const works = $('#works-item');
    const party = $('#party-item');
    const price = $('#price-item');
    // const btnPrev = $('#prev');
    // const btnNext = $('#next');
    const btnPrev = document.getElementById('prev');
    const btnNext = document.getElementById('next');
    let count = 0;
    /* выбор пункта меню, изменение его стилей */
    /*toDo - добавить скролл к этому элементу*/
    const menuItem = $('.nav__item');

    menuItem.click((el) => {
        if (el.currentTarget.classList.contains('active')) {
            return
        }
        removeActive();

        el.currentTarget.classList.add('active');
        switch (el.currentTarget.id) {
            case 'me':
                // contentItems.addClass('transity');
                contentItems.css('transform', 'translateX(0)');
                btnPrev.classList.add('disabled');
                btnNext.classList.remove('disabled');
                count = 0;
                break
            case 'skills-item':
                // contentItems.addClass('transity');
                contentItems.css('transform', 'translateX(-100%)');
                btnPrev.classList.remove('disabled');
                btnNext.classList.remove('disabled');
                count = 1;
                break
            case 'works-item':
                // contentItems.addClass('transity');
                contentItems.css('transform', 'translateX(-200%)');
                btnPrev.classList.remove('disabled');
                btnNext.classList.remove('disabled');
                count = 2;
                break
            case 'party-item':
                // contentItems.addClass('transity');
                contentItems.css('transform', 'translateX(-300%)');
                btnPrev.classList.remove('disabled');
                btnNext.classList.remove('disabled');
                count = 3;
                break
            case 'price-item':
                // contentItems.addCass('transity');
                contentItems.css('transform', 'translateX(-400%)');
                btnNext.classList.add('disabled');
                btnPrev.classList.remove('disabled');
                count = 4;
                break
        }
    })

    function removeActive() {
        menuItem.each(function () {
            $(this).removeClass('active');
        })
    }

    /* Кнопки пагинации*/
    const moveNext = () => {
        removeActive();
        if (count === 4) {
            return false
        }
        count += 1;
        switch (count) {
            case 1:
                contentItems.css('transform', 'translateX(-100%)');
                btnPrev.classList.remove('disabled');
                skills.addClass('active');
                break
            case 2:
                contentItems.css('transform', 'translateX(-200%)');
                works.addClass('active');
                break
            case 3:
                contentItems.css('transform', 'translateX(-300%)');
                party.addClass('active');
                break
            case 4:
                contentItems.css('transform', 'translateX(-400%)');
                price.addClass('active');
                btnNext.classList.add('disabled');
                break
        }
        console.log(count)
    }
    const movePrev = () => {
        removeActive();
        if (count === 0) {
            return false
        }
        count -= 1;
        switch (count) {
            case 3:
                contentItems.css('transform', 'translateX(-300%)');
                btnNext.classList.remove('disabled');
                party.addClass('active');
                break
            case 2:
                // contentItems.addClass('transity');
                contentItems.css('transform', 'translateX(-200%)');
                works.addClass('active');
                break
            case 1:
                // contentItems.addClass('transity');
                contentItems.css('transform', 'translateX(-100%)');
                skills.addClass('active');
                break
            case 0:
                // contentItems.addClass('transity');
                contentItems.css('transform', 'translateX(0)');
                btnPrev.classList.add('disabled');
                about.addClass('active');
                break
        }
        console.log(count)
    }
    btnNext.addEventListener('click', moveNext);
    btnPrev.addEventListener('click', movePrev);

    /* анимация самопрезентации + смена языка*/
    // const typText = [['креативен', 'амбициозен', 'мотивирован', 'frontend-разработчик'],
    //     ['creative', 'ambitious', 'motivated', 'frontend developer']];
    //
    // // let langFlag = typText[0];
    // function changeTyped(lng= 'ru'){
    //     if(lng === 'en') {
    //         return typText[1]
    //     }
    //     return typText[0]
    // }
    let typed = new Typed('#typed', {
        strings: ['креативен', 'амбициозен', 'мотивирован', 'frontend-разработчик'],
        typeSpeed: 100,
        backSpeed: 90, // скорость удаления текста
        startDelay: 150, // изначальная задержка перед набором
        backDelay: 1000, // пауза перед удалением текста
        loop: true, // повтор (true или false)
        loopCount: false, // число повторов, false = бесконечно
    });

    /* Блик на Skills*/
    const blick = $('.skills__title');

    function puls() {
        blick.addClass('hover');
        setTimeout(function () {
            blick.removeClass('hover');
        }, 1000);
    }

    setInterval(puls, 2000)


    /* Смена языка */
    const placeForLang = $('.change');
    const btnMore = $('.skills__more');
    const allText = [
        ['красивая страница', 'успешный старт вашего бизнеса', 'О себе', 'Умения и навыки', 'Завершенные проекты',
            'Клиентам и партнерам', 'Приемлемый прайс', 'я доступен', 'Поиск проекта ...', 'Алексей Боронин',
            'frontend-разработчик / 42 года, Беларусь', 'Привет!', 'Будем знакомы! Я Алексей — начинающий frontend-разработчик.',
            'Web-разработка довольно непростая штучка, как может показаться на первый взгляд - вроде как картинка туда, ' +
            'текст сюда, тут кнопочка...', 'Отнюдь... это совсем не так. Тем не менее WEB очень интересен и многогранен.',
            'Да, сейчас я пока обучаюсь в лучшей, на мой взгляд, онлайн-школе на рынке IT-профессий', ', но это ведь не повод ' +
        'усомниться, что кое-кто не справится с заказом. Верно?', 'Уже на данный момент получены знания, которые со 100% ' +
        'вероятностью гарантируют качественный продукт по результату нашего с Вами сотрудничества!', 'Не откладывайте свое ' +
        'правильное решение на завтра, примите его сейчас! А я со своей стороны добавлю комфортное сотрудничество!',
            'Умения и навыки', 'Клиентам и партнерам', 'Буду рад сотрудничеству или партнерству с другими ' +
        'разработчиками и веб-студиями по направлению web-разработки на взаимовыгодных условиях и в долгосрочной перспективе.',
            'Если Вы завалены заказами от клиентов и Вам не хочется их терять, но у Вас не хватает сил и времени, есть решение ' +
            '- Вы можете запросто обратиться ко мне, я с удовольствием окажу Вам квалифицированную помощь в пределах своих знаний и умений.',
            'Заинтересован в сотрудничестве со стартап-командами. С радостью рассмотрю предложения в данном направлении.',
            'Открыт к обсуждению любых производственных и коммерческих вопросов.', 'Гарантирую порядочное и надежное партнерство, ' +
        'а также высокий уровень и качество выполненной работы.', 'Прайс-лист', '2023 © Все права защищены'],
        ['beautiful page', 'successful start of your business', 'About me', 'Abilities and skills', 'Completed projects',
            'Clients and partners', 'Acceptable price', 'I\'m available', 'Project search...', 'Aliaksei Baronin', 'frontend developer / 42 years old, Belarus',
            'Hello!', 'Let\'s get acquainted! I\'m Aleksey, a beginner frontend developer.',
            'Web development is pretty hard stuff, as it might seem at first glance - sort of like a picture there,' +
            'text here, button here...', 'Not at all... it\'s not like that at all. Nevertheless, the WEB is very interesting and multifaceted.',
            'Yes, now I\'m currently studying at the best, in my opinion, online school in the IT professions market', ', but that\'s not a reason' +
        'doubt that someone will not cope with the order. Right?', 'Knowledge has already been obtained at the moment, which with 100% ' +
        'probably guarantee a quality product based on the result of our cooperation with you!', 'Do not put off your own' +
        'the right decision for tomorrow, make it now! And I, for my part, will add comfortable cooperation!',
            'My skills', 'Clients and partners', 'I would be glad to cooperate or partner with others' +
        'developers and web studios in the direction of web development on mutually beneficial terms and in the long term.',
            'If you are inundated with orders from customers and you do not want to lose them, but you do not have enough time and energy, there is a solution' +
            '- You can easily contact me, I will be happy to provide you with qualified assistance within the limits of my knowledge and skills.',
            'I\'m interested in collaborating with start-up teams. I will gladly consider proposals in this direction.',
            'I am open to discussion of any production and commercial issues.', 'I guarantee a decent and reliable partnership,' +
        'as well as the high level and quality of the work performed.', 'Price list', '2023 © All rights reserved']
    ]

    const lang = $('.lang');
    lang.click(function (el) {
            changeLang($(this).text());
    });

    function changeLang(str){
        if(str === 'ru'){
            // changeTyped('ru');
            lang.eq(1).removeClass('lang-active');
            lang.eq(0).addClass('lang-active');
            btnMore.each(function () {
                $(this).text('Узнать больше');
            })
            for (let i = 0; i < placeForLang.length; i++) {
                placeForLang.eq(i).text(`${allText[0][i]}`);
            }
        }
        if(str === 'en'){
            // changeTyped('en');
            lang.eq(0).removeClass('lang-active');
            lang.eq(1).addClass('lang-active');
            btnMore.each(function () {
                $(this).text('Learn more');
            })
            for (let i = 0; i < placeForLang.length; i++) {
                placeForLang.eq(i).text(`${allText[1][i]}`);
            }
        }
    }
});