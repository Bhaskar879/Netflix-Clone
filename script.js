
window.onload = function () {
    setTimeout(function () {
        document.getElementById('preloder').style.display = "none";
        document.getElementById('content').style.display = "block";
        AOS.init();
    }, 2500);
};

