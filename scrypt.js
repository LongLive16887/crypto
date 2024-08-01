document.querySelector('.dropbtn').addEventListener('click', function () {
    document.querySelector('.dropdown-content').classList.toggle('show');
});

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.popup-nav').classList.toggle('showing');

    if (document.querySelector('.popup-nav').classList.contains('showing')) {
        document.querySelector('header').style.position = 'fixed';
        document.querySelector('header').style.width = '100%';
        document.querySelector('header').style.zIndex = '15';
    } else {
        document.querySelector('header').style.position = 'static';
    }
});

document.querySelectorAll('.popup-nav ul li').forEach(item =>
    item.addEventListener('click', () => {
        document.querySelector('.popup-nav').classList.remove('showing')
        document.querySelector('header').style.position = 'static';
    })
)

// Скрипт для автоматической установки языка по IP (используется сторонний API)
$.get("https://ipinfo.io", function (response) {
    var countryCode = response.country;
    var languageMap = {
        "RU": "Русский",
        "US": "English",
        "CN": "中文",
        "ES": "Español",
        "DE": "Deutsch",
        "FR": "Français",
        "UA": "Українська",
        "IN": "हिन्दी"
    };
    if (languageMap[countryCode]) {
        document.querySelector('.dropbtn').innerHTML = languageMap[countryCode];
    }
}, "jsonp");

// Появление и исчезновение текста и изображения при прокрутке
$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var airdropSection = $('#airdrop');
    var airdropOffset = airdropSection.offset().top;
    var windowHeight = $(this).height();
    if (scrollTop + windowHeight > airdropOffset) {
        airdropSection.find('.airdrop-text, .airdrop-image').addClass('visible');
    } else {
        airdropSection.find('.airdrop-text, .airdrop-image').removeClass('visible');
    }
});