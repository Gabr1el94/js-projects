var btcAccept = ['SV','CF'];
var btcBanid = ['DZ','BO','CN','CO','EG','ID','IR','IN','IR','XK','NP','RU','TR','VN'];
var btcFriendly = ['BR','PY','PA','EE'];
var elementsPath = document.getElementsByTagName('path');

addEventListener('load', e => {
    setterTitles();
    playCountries(btcAccept, '#FFC93C');
    playCountries(btcBanid, '#BE3144');
    playCountries(btcFriendly, '#007FFF');  
}, false);

function setterTitles(){
    for (let i = 0; i < elementsPath.length; i++) {
        let tagTitle = elementsPath[i].getElementsByTagName('title');
        for (let index = 0; index < tagTitle.length; index++) {
            let title = tagTitle[index];
            title.innerHTML=elementsPath[i].getAttribute("name");
        }
    }
}

function playCountries(type, color) {
    for (let i = 0; i < elementsPath.length; i++) {
        for (let j = 0; j < type.length; j++) {
            if (elementsPath[i].id == type[j]) {
                elementsPath[i].style.fill = color;
            }
        }
    }
}