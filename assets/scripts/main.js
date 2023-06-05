'use strict';

$(document).ready(function () {
    const contentItems = $('.content__items');
    const about = $('#me');
    const skills = $('#skills-item');
    const works = $('#works-item');
    const party = $('#party-item');
    const price = $('#price-item');
    const btnPrev = document.getElementById('prev');
    const btnNext = document.getElementById('next');
    const body = document.getElementsByClassName('body');
    let count = 0;

    /* выбор пункта меню, изменение его стилей */
    const menuItem = $('.nav__item');

    menuItem.click((el) => {
        if (el.currentTarget.classList.contains('active')) {
            return
        }
        removeActive();

        el.currentTarget.classList.add('active');
        switch (el.currentTarget.id) {
            case 'me':
                contentItems.css('transform', 'translateX(0)');
                btnPrev.classList.add('disabled');
                btnNext.classList.remove('disabled');
                // body.css('background', 'url("../images/back_1.jpg") no-repeat center');
                count = 0;
                break
            case 'skills-item':
                contentItems.css('transform', 'translateX(-100%)');
                btnPrev.classList.remove('disabled');
                btnNext.classList.remove('disabled');
                // body.css('background', 'url("../images/back_2.jpg") no-repeat center');
                count = 1;
                break
            case 'works-item':
                contentItems.css('transform', 'translateX(-200%)');
                btnPrev.classList.remove('disabled');
                btnNext.classList.remove('disabled');
                // body.css('background', 'url("../images/back_3.jpg") no-repeat center');
                count = 2;
                break
            case 'party-item':
                contentItems.css('transform', 'translateX(-300%)');
                btnPrev.classList.remove('disabled');
                btnNext.classList.remove('disabled');
                // body.css('background', 'url("../images/back_4.jpg") no-repeat center');
                count = 3;
                break
            case 'price-item':
                contentItems.css('transform', 'translateX(-400%)');
                btnNext.classList.add('disabled');
                btnPrev.classList.remove('disabled');
                // body.css('background', 'url("../images/back_5.jpg") no-repeat center');
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

        if (count === 4) {
            return false
        }
        removeActive();
        count += 1;
        switch (count) {
            case 1:
                contentItems.css('transform', 'translateX(-100%)');
                btnPrev.classList.remove('disabled');
                skills.addClass('active');
                // setBg(2);
                break
            case 2:
                contentItems.css('transform', 'translateX(-200%)');
                works.addClass('active');
                // setBg(3);
                break
            case 3:
                contentItems.css('transform', 'translateX(-300%)');
                party.addClass('active');
                // setBg(4);
                break
            case 4:
                contentItems.css('transform', 'translateX(-400%)');
                price.addClass('active');
                btnNext.classList.add('disabled');
                // setBg(5);
                break
        }
    }
    const movePrev = () => {
        if (count === 0) {
            return false
        }
        removeActive();
        count -= 1;
        switch (count) {
            case 3:
                contentItems.css('transform', 'translateX(-300%)');
                btnNext.classList.remove('disabled');
                party.addClass('active');
                // setBg(4);
                break
            case 2:
                contentItems.css('transform', 'translateX(-200%)');
                works.addClass('active');
                // setBg(3);
                break
            case 1:
                contentItems.css('transform', 'translateX(-100%)');
                skills.addClass('active');
                // setBg(2)
                break
            case 0:
                contentItems.css('transform', 'translateX(0)');
                btnPrev.classList.add('disabled');
                about.addClass('active');
                // setBg(1)
                break
        }
    }
    btnNext.addEventListener('click', moveNext);
    btnPrev.addEventListener('click', movePrev);

    /* анимация самопрезентации + ToDo смена языка - ПОКА НЕ ПОЛУЧИЛОСЬ _ НАДО ДУМАТЬ*/
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
    const searchInput = $('#searchInpt');
    const placeForLang = $('.change');
    const btnMore = $('.skills__more');
    const allText = [
        ['красивая страница', 'успешный старт вашего бизнеса',
            'О себе', 'Умения и навыки', 'Завершенные проекты', 'Клиентам и партнерам', 'Приемлемый прайс',
            'я доступен',
            'Алексей Боронин', 'frontend-разработчик / 42 года, Беларусь',
            'Я ',
            'Привет!', 'Будем знакомы! Я Алексей — начинающий frontend-разработчик.',
            'Web-разработка довольно непростая штучка, как может показаться на первый взгляд - вроде как картинка туда, ' +
            'текст сюда, тут кнопочка...',
            'Отнюдь... это совсем не так. Тем не менее WEB очень интересен и многогранен.',
            'Да, сейчас я пока обучаюсь в лучшей, на мой взгляд, онлайн-школе на рынке IT-профессий',
            ', но это ведь не повод усомниться, что кое-кто не справится с заказом. Верно?',
            'Уже на данный момент получены знания, которые со 100% вероятностью гарантируют качественный продукт по ' +
            'результату нашего с Вами сотрудничества!',
            'Не откладывайте свое правильное решение на завтра, примите его сейчас! А я со своей стороны добавлю комфортное сотрудничество!',

            'Умения и навыки',
            'HTML (Hypertext Markup Language) - это код (языка разметки), который используется для структурирования и ' +
            'отображения веб-страницы и её контента.',
            'CSS (Cascading Style Sheets) — формальный язык декорирования и описания внешнего вида документа (веб-страницы).',
            'jQuery — набор функций JavaScript, фокусирующийся на взаимодействии JavaScript и HTML.',
            'Figma — онлайн-сервис для разработки интерфейсов и прототипирования с возможностью организации совместной ' +
            'работы в режиме реального времени.',
            'Bootstrap — свободный набор инструментов для создания сайтов и веб-приложений.',
            'Препроцессор — инструмент (надстройка над CSS), который добавляет ранее недоступные возможности для CSS, ' +
            'с помощью новых синтаксических конструкций.',
            'БЭМ (Блок-Элемент-Модификатор) — методология web-разработки, а также набор интерфейсных библиотек, фреймворков и вспомогательных инструментов.',
            ' Git — распределённая система управления версиями.',

            'Мои завершенные проекты',

            'Клиентам и партнерам',
            'Я ценю Ваше время и Ваши средства',
            'Уважаемые Клиенты, предлагая Вам свои услуги, я могу гарантировать добросовестное отношение к выполнению ' +
            'заказа: соблюдение оговоренным сроков и качество выполненной работы.',
            'Обращаясь за моими услугами Вы получите комфортное сотрудничество и итоговый конкурентно-способный продукт, ' +
            'не уступающий по качеству (внешний вид, функциональность, интерактивность) Вашим предполагаемым конкурентам, ' +
            'что благоприятно отразится на Вашем бизнесе.',
            'Партнерство - это важно',
            'Коллеги по web-разработке, а также стартап-проекты, готов предложить Вам свои услуги, а в долгосрочной ' +
            'перспективе и партнерство на постоянной основе.',
            'Порой говорят "не хватает рук". Если вы столкнулись с такой ситуацией, то я с радостью рассмотрю Ваши ' +
            'предложения по взаимовыгодному сотрудничеству. Могу заверить, что мои знания и в некоторой степени опыт, ' +
            'в совокупности с трудолюбием, поспособствуют нашему плодотворному совместному труду. Я всегда открыт к ' +
            'общению и обсуждению любых коммерческих и производственных вопросов, которые могут возникнуть в процессе ' +
            'нашей совместной деятельности.',
            'Все обсуждаемо и решаемо',
            'Порядочное сотрудничество и надежное партнерство = успешный ',
            'СТАРТ', ' = успешный ', 'ПРОЕКТ', ' = успешный ', 'БИЗНЕС',

            'Прайс-лист',
            '1 час работы ~ 10$', 'Элемент / задание', 'Срок исполнения', 'Стоимость',
            'Готовый одностраничный сайт, наполненный контентом для примера (до 20 блоков, шаблонный дизайн с индивидуальным ' +
            'редактированием, адаптация под устройство)', '4 дня',
            'Готовый многостраничный сайт, наполненный контентом для примера (до 4 страниц/ до 5 блоков на страницу, ' +
            'шаблонный дизайн с индивидуальным редактированием, адаптация под устройство)', '5 дней',
            'Верстка одностраничного сайта (до 10 блоков, по дизайну заказчика)', '2 дня',
            '1 блок (до 10 различных элементов, с адаптацией под устройства)', '1 час ~ 10$',
            '1 страница сайта (до 5 блоков, адаптация под моб.устройства)', '1 день',
            'Редактирование сайта по ТЗ (пожелание заказчика/исправление чужой работы)', '1 час ~ 12$',
            'Индивидуальная разработка сайта, платформы, приложения', '1 час ~ 15$',

            '2023 © Все права защищены'],


        ['beautiful page', 'successful start of your business',
            'About me', 'Abilities and skills', 'Completed projects', 'Clients and partners', 'Acceptable price',
            'I\'m available',
            'Aliaksei Baronin', 'frontend developer / 42 years old, Belarus',
            'I\'m ',
            'Hello!', 'Let\'s get acquainted! I\'m Aleksey, a beginner frontend developer.',
            'Web development is pretty hard stuff, as it might seem at first glance - sort of like a picture there,' +
            'text here, button here...',
            'Not at all... it\'s not like that at all. Nevertheless, the WEB is very interesting and multifaceted.',
            'Yes, now I\'m currently studying at the best, in my opinion, online school in the IT professions market',
            ', but that\'s not a reason doubt that someone will not cope with the order. Right?',
            'Knowledge has already been obtained at the moment, which with 100% probably guarantee a quality product ' +
            'based on the result of our cooperation with you!',
            'Do not put off your own the right decision for tomorrow, make it now! And I, for my part, will add comfortable cooperation!',

            'My skills',
            'HTML (Hypertext Markup Language) is the code (markup language) that is used to structure and displaying the web page and its content.',
            'CSS (Cascading Style Sheets) is a formal language for decorating and describing the appearance of a document (web pages).',
            'jQuery is a JavaScript feature set that focuses on the interaction between JavaScript and HTML.',
            'Figma is an online service for interface development and prototyping with the ability to organize collaboration in real time.',
            'Bootstrap is a free set of tools for building websites and web applications.',
            'A preprocessor is a tool (an add-on to CSS) that adds previously inaccessible features for CSS, using new syntactic constructs.',
            'BEM (Block-Element-Modifier) is a web development methodology, as well as a set of interface libraries, frameworks and auxiliary tools.',
            'Git is a distributed version control system.',

            'My projects',

            'Clients and partners',
            'I appreciate your time and your means',
            'Dear Clients, offering you my services, I can guarantee a conscientious attitude to the implementation' +
            'order: compliance with the agreed deadlines and the quality of the work performed.',
            'When applying for my services, you will receive comfortable cooperation and the final competitive product,' +
            'as good as the quality (appearance, functionality, interactivity) of your prospective competitors, ' +
            'which will be good for your business.',
            'Partnership is important',
            'Colleagues in web development, as well as startup projects, are ready to offer you their services, and ' +
            'in the long term perspective and partnership on an ongoing basis.',
            'Sometimes they say "not enough hands." If you are faced with such a situation, then I will gladly consider ' +
            'your proposals for mutually beneficial cooperation. I can assure you that my knowledge and to some extent ' +
            'experience, together with industriousness, will contribute to our fruitful joint work. I\'m always open to ' +
            'communication and discussion of any commercial and production issues that may arise in the process' +
            'our joint activities.',
            'Everything is discussed and decided',
            'Decent cooperation and reliable partnership = successful ',
            'START', ' = successful ', 'PROJECT', ' = successful ', 'BUSINESS',

            'Price list',
            '1 hour of work ~ 10$', 'Element / task', 'Due date', 'Cost',
            'A ready-made one-page site filled with content for an example (up to 20 blocks, template design with individual ' +
            'editing, adaptation to the device)', '4 days',
            'A ready-made multi-page site filled with content for an example (up to 4 pages / up to 5 blocks per page, ' +
            'template design with individual editing, adaptation to the device)', '5 days',
            'Layout of a one-page site (up to 10 blocks, according to the design of the customer)', '2 days',
            '1 block (up to 10 different elements, adaptable to devices)', '1 hour ~ 10$',
            '1 site page (up to 5 blocks, adaptation for mobile devices)', '1 day',
            'Editing the site according to the technical task (customers request / correction of someone else\'s work)', '1 hour ~ 12$',
            'Individual development of the site, platform, application', '1 hour ~ 15$',

            '2023 © All rights reserved']
    ]

    const lang = $('.lang');
    lang.click(function (el) {
        changeLang($(this).text());
    });

    function changeLang(str) {
        if (str === 'ru') {
            // changeTyped('ru');
            lang.eq(1).removeClass('lang-active');
            lang.eq(0).addClass('lang-active');
            btnMore.each(function () {
                $(this).text('Узнать больше');
            })
            for (let i = 0; i < placeForLang.length; i++) {
                placeForLang.eq(i).text(`${allText[0][i]}`);
            }
            searchInput.attr('placeholder', 'Поиск проекта ...');
        }
        if (str === 'en') {
            // changeTyped('en');
            lang.eq(0).removeClass('lang-active');
            lang.eq(1).addClass('lang-active');
            btnMore.each(function () {
                $(this).text('Learn more');
            })
            for (let i = 0; i < placeForLang.length; i++) {
                placeForLang.eq(i).text(`${allText[1][i]}`);
            }
            searchInput.attr('placeholder',  'Project search...');
        }
    }

    /*ToDo смену background body */
    // function setBg(n) {
    //     const img = new Image();
    //     // img.src = "https://raw.githubusercontent.com/AlexBoronin/Portfolio/main/assets/images/back_" + n + ".jpg";
    //     img.src = "../images/back_" + n + ".jpg";
    //     img.onload = () => {
    //         document.body.style.background = "url(" + img.src + ") no-repeat center";
    //     };
    // }




    /*ToDo - поиск похожего проекта по названию */
});