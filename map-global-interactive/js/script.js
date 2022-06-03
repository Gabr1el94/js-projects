var btcAccept = ['SV','CF'];
var btcBanid = ['DZ','MA','TN','EG','IQ','NP','QA','OM','BO','BD','MK','CN'];
var btcFriendly = [];
var elementsPath = document.getElementsByTagName('path');

addEventListener('load', e => {
    playCountries(btcAccept, '#FFC93C');
    playCountries(btcBanid, '#BE3144');
    playCountries(btcFriendly, '#007FFF');  
}, false);

function playCountries(type, color) {
    for (let i = 0; i < elementsPath.length; i++) {
        for (let j = 0; j < type.length; j++) {
            if (elementsPath[i].id == type[j]) {
                elementsPath[i].style.fill = color;
            }
        }
    }
}