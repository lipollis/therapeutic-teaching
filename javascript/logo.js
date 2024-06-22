/* *************************************************************************
            LOGO
************************************************************************** */

let coresQueNaoForam = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
window.onload = function () {
    let box = document.getElementsByClassName('box');
    let background = ["#3F48CC", "#B5E61D", "#22B14C", "#7092BE", "#FFC90E", "#FFF200", "#A349A4", "#ED1C24", "#FF7F27","#FFFFFF"];
    let cor = 0;
    let div = 0;
    setInterval(function () {
        cor = Math.floor(Math.random() * (coresQueNaoForam.length - 1));
        div = Math.floor(Math.random() * (background.length - 1));
        box.item(div).style.backgroundColor = background[coresQueNaoForam.splice(cor, 1)];
        if (coresQueNaoForam.length === 0) {
            coresQueNaoForam = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
    }, 100)
}