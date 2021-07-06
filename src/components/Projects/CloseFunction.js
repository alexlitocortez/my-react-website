

var close = document.getElementsByClassName('.close');
var card = document.querySelector('.card');

export function CloseFunction() {
    if(close == true){
        card.style.display = 'none';
    }
}


export default CloseFunction