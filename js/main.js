document.querySelector('.header').classList.remove('hidden');

$(window).on('load', function () {
    // Vide.js - video bg
    $('#header').vide('./video/cover', {
        bgColor: '#242123'
        // bgColor: '#141413'
    })
})


// Плавная прокрутка 

$(document).ready(function () {
    $("#header").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);

    });
});



// document.querySelector('.portfolio').classList.remove('hidden');

// window.onload = () => document.querySelector('.portfolio').classList.remove('hidden');

// document.querySelector('portfolio').classList.remove('hidden');

// window.onload = () => document.querySelector('header').classList.remove('hidden');
// .hidden {
//     opacity: 0;
// }

// header {
//     transition: all 2s ease;
// }
