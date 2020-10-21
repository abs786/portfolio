// ------------------------------ Change Mode ----------------------------
function changeMode(){
    if(window.localStorage.getItem('mode') === 'light.css'){
        window.localStorage.setItem('mode','dark.css');
        $("#stylesheet").attr("href", window.localStorage.getItem('mode'));
        $("#introo").css('color', 'palevioletred');
        $("#experiences").css('color', '#fafafa');
        $("#skillss").css('color', '#fafafa');
        $("#projectss").css('color', '#fafafa');
        $("#aboutt").css('color', '#fafafa');
    } else {
        window.localStorage.setItem('mode','light.css');
        $("#stylesheet").attr("href", window.localStorage.getItem('mode'));
        $("#introo").css('color', 'rgb(223, 30, 94)');
        $("#experiences").css('color', 'black');
        $("#skillss").css('color', 'black');
        $("#projectss").css('color', 'black');
        $("#aboutt").css('color', 'black');
    }
}

// ----------------------- Light/Dark Mode Button Animation -------------------------
const btn = document.getElementById('btn');

if(window.localStorage.getItem('mode') === 'light.css'){
    btn.classList.remove('btn--checked');
} else {
    btn.classList.add('btn--checked');
}

btn.addEventListener('click', () => {
    btn.classList.toggle('btn--checked');
});

// ------------------------ Change Experience Tabs ------------------------------------
function changeTab(evt, contentName) {
    let tabContents = document.getElementsByClassName("exp-info");
    console.log(tabContents);
    for (let x of tabContents) {
        x.style.display = "none";
        x.className = x.className.replace("show", "");
    }
    let tabLinks = document.getElementsByClassName("tablink");
    for (let x of tabLinks) {
        x.className = x.className.replace("active", "");
    }

    document.getElementById(contentName).style.display = "flex";
    evt.target.className += " active";
}

// ------------------------------ JQuery Scroll Animation -------------------------------
$(document).ready(function () {
    if(!window.localStorage.getItem('mode')) {
        window.localStorage.setItem('mode','light.css');
    }
    $("#stylesheet").attr("href", window.localStorage.getItem('mode'));
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        // ------------- Light Mode ------------------------------
        if ($("#stylesheet").attr("href") === "light.css") {
            if (scroll_pos >= 0 && scroll_pos < 470) {
                $("#introo").css('color', 'rgb(223, 30, 94)');
                $("#experiences").css('color', 'black');
                $("#skillss").css('color', 'black');
                $("#projectss").css('color', 'black');
                $("#aboutt").css('color', 'black');
                $('li').filter(function () {
                    return $(this).data('bounce') == "introo";
                }).addClass("animate__animated  animate__bounce");
            } else if (scroll_pos > 470 && scroll_pos < 950) {
                $("#experiences").css('color', 'rgb(223, 30, 94)');
                $("#skillss").css('color', 'black');
                $("#introo").css('color', 'black');
                $("#projectss").css('color', 'black');
                $("#aboutt").css('color', 'black');
                $('li').filter(function () {
                    return $(this).data('bounce') == "experiences";
                }).addClass("animate__animated  animate__bounce");
            } else if (scroll_pos > 950 && scroll_pos < 1450) {
                $("#skillss").css('color', 'rgb(223, 30, 94)');
                $("#experiences").css('color', 'black');
                $("#projectss").css('color', 'black');
                $("#introo").css('color', 'black');
                $("#aboutt").css('color', 'black');
                $('li').filter(function () {
                    return $(this).data('bounce') == "skillss";
                }).addClass("animate__animated  animate__bounce");
            } else if (scroll_pos > 1450 && scroll_pos < 4500) {
                $("#projectss").css('color', 'rgb(223, 30, 94)');
                $("#skillss").css('color', 'black');
                $("#aboutt").css('color', 'black');
                $("#experiences").css('color', 'black');
                $("#introo").css('color', 'black');
                $('li').filter(function () {
                    return $(this).data('bounce') == "projectss";
                }).addClass("animate__animated  animate__bounce");
            } else if (scroll_pos > 4500) {
                $("#aboutt").css('color', 'rgb(223, 30, 94)');
                $("#projectss").css('color', 'black');
                $("#skillss").css('color', 'black');
                $("#experiences").css('color', 'black');
                $("#introo").css('color', 'black');
                $('li').filter(function () {
                    return $(this).data('bounce') == "aboutt";
                }).addClass("animate__animated  animate__bounce");
                $('div.img-container img').css({ "animation": "anime 3s" });
            }
            // ------------- Dark Mode ------------------------------
        } else {
            if (scroll_pos >= 0 && scroll_pos < 470) {
                $("#introo").css('color', 'palevioletred');
                $("#experiences").css('color', '#fafafa');
                $("#skillss").css('color', '#fafafa');
                $("#projectss").css('color', '#fafafa');
                $("#aboutt").css('color', '#fafafa');
                $('li').filter(function () {
                    return $(this).data('bounce') == "introo";
                }).addClass("animate__animated  animate__bounce");
            } else if (scroll_pos > 470 && scroll_pos < 950) {
                $("#experiences").css('color', 'palevioletred');
                $("#skillss").css('color', '#fafafa');
                $("#introo").css('color', '#fafafa');
                $("#projectss").css('color', '#fafafa');
                $("#aboutt").css('color', '#fafafa');
                $('li').filter(function () {
                    return $(this).data('bounce') == "experiences";
                }).addClass("animate__animated  animate__bounce");
            } else if (scroll_pos > 950 && scroll_pos < 1450) {
                $("#skillss").css('color', 'palevioletred');
                $("#experiences").css('color', '#fafafa');
                $("#projectss").css('color', '#fafafa');
                $("#introo").css('color', '#fafafa');
                $("#aboutt").css('color', '#fafafa');
                $('li').filter(function () {
                    return $(this).data('bounce') == "skillss";
                }).addClass("animate__animated  animate__bounce");
            } else if (scroll_pos > 1450 && scroll_pos < 4500) {
                $("#projectss").css('color', 'palevioletred');
                $("#skillss").css('color', '#fafafa');
                $("#aboutt").css('color', '#fafafa');
                $("#experiences").css('color', '#fafafa');
                $("#introo").css('color', '#fafafa');
                $('li').filter(function () {
                    return $(this).data('bounce') == "projectss";
                }).addClass("animate__animated  animate__bounce");
            } else if (scroll_pos > 4500) {
                $("#aboutt").css('color', 'palevioletred');
                $("#projectss").css('color', '#fafafa');
                $("#skillss").css('color', '#fafafa');
                $("#experiences").css('color', '#fafafa');
                $("#introo").css('color', '#fafafa');
                $('li').filter(function () {
                    return $(this).data('bounce') == "aboutt";
                }).addClass("animate__animated  animate__bounce");
                $('div.img-container img').css({ "animation": "anime 3s" })
            }
        }
    });
});