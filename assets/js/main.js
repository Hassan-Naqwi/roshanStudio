// document.addEventListener('DOMContentLoaded', function () {
//     if (window.matchMedia("(min-width: 767px)").matches) {
//         window.addEventListener('scroll', function () {
//             let scroll = window.scrollY;
//             let offset = document.querySelector('#nav').offsetTop;
//             if (scroll > offset) {
//                 document.querySelector('#nav').classList.add('sticky');
//                 document.querySelectorAll('.none').forEach((e) => {
//                     e.style.display = 'block';
//                 });
//             } else {
//                 document.querySelectorAll('.none').forEach((e) => {
//                     e.style.display = 'none';
//                 });
//                 document.querySelector('.nav').classList.remove('sticky');
//             }
//         });
//     }
//     $(function () {
//         $('.toggle').click(function () {
//             $(this).parent().parent().next().find('ul').slideToggle();
//         });
//     });
// });

function handleMobileMenu() {
    $('.toggle').click(function () {
        $(this).parent().parent().next().find('ul').slideToggle();
    });
}

function handleScrollSticky() {
    window.addEventListener('scroll', function () {
        let scroll = window.scrollY;
        let offset = document.querySelector('#nav').offsetTop;
        if (scroll > offset) {
            document.querySelector('#nav').classList.add('sticky');
            document.querySelectorAll('.none').forEach(e => {
                e.style.display = 'block';
            });
        } else {
            document.querySelectorAll('.none').forEach(e => {
                e.style.display = 'none';
            });
            document.querySelector('#nav').classList.remove('sticky');
        }
    });
}

function initLogic() {
    const isDesktop = window.matchMedia('(min-width: 767px)').matches;
    if (isDesktop) {
        handleScrollSticky();
    } else {
        handleMobileMenu();
    }
}

window.addEventListener('load', function () {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            initLogic();
        });
    });
});

window.addEventListener('resize', function () {
    initLogic();
});



$(document).ready(function () {
    $(".accordion").click(function () {
        $(this).parent().find('.panel').slideToggle(600);
        if ($(this).parent().hasClass('lg'))
            $(this).parent().removeClass('lg');
        else
            $(this).parent().addClass('lg');
    })
}
);

function openvideo() {
    document.getElementById('video').style.display = 'none';
    document.getElementById('showvid').style.display = 'block';
}
function openvideo2() {
    document.getElementById('video2').style.display = 'none';
    document.getElementById('showvid2').style.display = 'block';
}
function openvideo3() {
    document.getElementById('video3').style.display = 'none';
    document.getElementById('showvid3').style.display = 'block';
}
function openvideo4() {
    document.getElementById('video4').style.display = 'none';
    document.getElementById('showvid4').style.display = 'block';
}
function openvideo5() {
    document.getElementById('video5').style.display = 'none';
    document.getElementById('showvid5').style.display = 'block';
}
function openvideo6() {
    document.getElementById('video6').style.display = 'none';
    document.getElementById('showvid6').style.display = 'block';
}
function openvideo7() {
    document.getElementById('video7').style.display = 'none';
    document.getElementById('showvid7').style.display = 'block';
}
function openvideo8() {
    document.getElementById('video8').style.display = 'none';
    document.getElementById('showvid8').style.display = 'block';
}
function openvideo9() {
    document.getElementById('video9').style.display = 'none';
    document.getElementById('showvid9').style.display = 'block';
}
function openvideo10() {
    document.getElementById('video10').style.display = 'none';
    document.getElementById('showvid10').style.display = 'block';
}
function openvideo11() {
    document.getElementById('video11').style.display = 'none';
    document.getElementById('showvid11').style.display = 'block';
}
function openvideo12() {
    document.getElementById('video12').style.display = 'none';
    document.getElementById('showvid12').style.display = 'block';
}
function longform() {
    document.getElementById('faceless_vid').style.display = 'none';
    document.getElementById('shortform_vid').style.display = 'none';
    document.getElementById('longform_vid').style.display = 'block';
    document.getElementById('longform_btn').classList.add('translateY');
    document.getElementById('faceless_btn').classList.remove('translateY');
    document.getElementById('shortform_btn').classList.remove('translateY');
}
function shortform() {
    document.getElementById('faceless_vid').style.display = 'none';
    document.getElementById('longform_vid').style.display = 'none';
    document.getElementById('shortform_vid').style.display = 'block';
    document.getElementById('longform_btn').classList.remove('translateY');
    document.getElementById('faceless_btn').classList.remove('translateY');
    document.getElementById('shortform_btn').classList.add('translateY');
}
function faceless() {
    document.getElementById('longform_vid').style.display = 'none';
    document.getElementById('shortform_vid').style.display = 'none';
    document.getElementById('faceless_vid').style.display = 'block';
    document.getElementById('faceless_btn').classList.add('translateY');
    document.getElementById('longform_btn').classList.remove('translateY');
    document.getElementById('shortform_btn').classList.remove('translateY');
}

