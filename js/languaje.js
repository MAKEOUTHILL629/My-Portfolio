var english = document.getElementById('languajeButtonEn');
var espanish = document.getElementById('languajeButtonEs');



function idiomaChange() {
    if (english != null) {
        location.href = "../english/index.html";
    } else if (espanish != null) {
        location.href = "../index.html";
    }
}


if (english != null) {
    console.log('Se espicho ingles');
    english.onclick = idiomaChange;
} else if (espanish != null) {
    console.log('se espicho espanish')
    espanish.onclick = idiomaChange;
}

