function sdBarCall() {
    let sd = document.querySelector("#sd-menu");

    sd.classList.toggle("change");
    sd.classList.toggle("active");

    var panel = sd.nextElementSibling;

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

$("body > header > nav > ul > li > a").on('click', function (e) {
    e.preventDefault();

    var id = $(this).attr('href');
    
    var targetOffset;
    if(id == "#") {
        targetOffset = 0;
    } else {
        targetOffset = $(id).offset().top;
    }

    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});

$("body > header > nav > div.sd-panel > ul > li > a").on('click', function (e) {
    let sd = document.querySelector("#sd-menu");

    sd.classList.toggle("change");
    sd.classList.toggle("active");

    var panel = sd.nextElementSibling;

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }

    e.preventDefault();

    var id = $(this).attr('href');
    
    var targetOffset;
    if(id == "#") {
        targetOffset = 0;
    } else {
        targetOffset = $(id).offset().top;
    }

    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});

$("#cta-select").on('click', function (e) {
    e.preventDefault();

    var id = "#cta-select";
    
    var targetOffset;
    if (window.innerWidth <= 430) {
        targetOffset = $(id).offset().top + 320;
    } else if (window.innerWidth <= 520) {
        targetOffset = $(id).offset().top + 350;
    } else if (window.innerWidth <= 815) {
        targetOffset = $(id).offset().top + 370;
    } else if (window.innerWidth <= 1024) {
        targetOffset = $(id).offset().top + 400;
    } else {
        targetOffset = $(id).offset().top + 140;
    }

    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});