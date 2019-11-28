let names = [{
    'name': 'Лёня&nbspГоликов'
}, {
    'name': 'Марат&nbspКазей'
}, {
    'name': 'Валя&nbspКотик'
}, {
    'name': 'Зина&nbspПортнова'
}],
    menu = document.getElementById('menuId'),
    newList = '';

for (let i = 0; i < names.length; i++) {
    let nameId = names[i].name;
    if (i === 0) {
        newList += '<li class = "liMenuContent"><a href="PioneersLena.html">' + nameId + '</a></li>';
    } else if (i === 1){
        newList += '<li class = "liMenuContent"><a href="PioneersMarat.html">' + nameId + '</a></li>';
    } else if (i === 2) {
        newList += '<li class = "liMenuContent"><a href="PioneersValya.html">' + nameId + '</a></li>';
    } else if (i === 3) {
        newList += '<li class = "liMenuContent"><a href="PioneersZina.html">' + nameId + '</a></li>';
    }
}



menu.innerHTML += newList;







