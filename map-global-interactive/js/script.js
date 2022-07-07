var btcAccept = ['SV','CF'];
var btcBanid = ['DZ','BO','CN','CO','EG','ID','IR','IN','IR','XK','NP','RU','TR','VN'];
var btcFriendly = ['CU','US','CA','IL','PT','EE','CH'];
var elementsPath = document.getElementsByTagName('path');

addEventListener('load', e => {
    allPaths();
}, false);

function allPaths(){
    setterTitles();
    playCountries(btcAccept, '#FFC93C');
    playCountries(btcBanid, '#BE3144');
    playCountries(btcFriendly, '#007FFF');  
}

function setterTitles(){
    for (let i = 0; i < elementsPath.length; i++) {
        let tagTitle = elementsPath[i].getElementsByTagName('title');
        for (let index = 0; index < tagTitle.length; index++) {
            let title = tagTitle[index];
            title.innerHTML=elementsPath[i].getAttribute("name");
        }
    }
}

function showHidePath(value){
    if (value === 'cl' ) {
        playCountries(btcAccept, '#FFC93C');
        playCountries(btcBanid, '#000');
        playCountries(btcFriendly, '#000'); 
    } else if (value === 'am' ){
        playCountries(btcFriendly, '#007FFF'); 
        playCountries(btcAccept, '#000');
        playCountries(btcBanid, '#000');
        
    } else if(value === 'bn' ){
        playCountries(btcBanid, '#BE3144');
        playCountries(btcAccept, '#000');
        playCountries(btcFriendly, '#000'); 
    }else{
        allPaths();
    }
}

function playCountries(type, color) {
    for (let i = 0; i < elementsPath.length; i++) {
        for (let j = 0; j < type.length; j++) {
            if (elementsPath[i].id == type[j]) {
                elementsPath[i].style.fill = color;
                elementsPath[i].style.stroke = '#fff';
            }else if (elementsPath[i].className.baseVal == type[j] || elementsPath[i].className.animVal == type[j]) {
                elementsPath[i].style.fill = color;
                elementsPath[i].style.stroke = '#fff';
            }
            elementsPath[i].style.strokeWidth=1;
        }
    }
}