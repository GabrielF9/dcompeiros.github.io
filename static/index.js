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

function aboutCA() {
    document.location.href = "#about-ca";
}