//Fonctionnalité 1

let clickFooter = document.querySelector('footer');
let CountClicks = 0
let onClickFooter = function() {
    CountClicks += 1

    console.log("clic numéro" + " " + CountClicks)
};
clickFooter.addEventListener("click", onClickFooter);


//Fonctionnalté 2
var menuHamb = document.querySelector('button');
var navbarHeader = document.getElementById('navbarHeader');
menuHamb.addEventListener("click", toggleOn);
function toggleOn() {
    navbarHeader.classList.toggle("collapse");
};


//Fonctionalité 3
let editHtml = document.querySelector(".btn-outline-secondary");
let cardTextHtml = document.querySelector(".card-text");
function toggleRedEdit() {
    cardTextHtml.style.color = "red";
}
editHtml.addEventListener("click", toggleRedEdit);




//Fonctionalité 4
let editCss = document.querySelectorAll(".btn-outline-secondary")[1];
var cardTextCss = document.querySelectorAll(".card-text")[1];
function toggleGreenEdit() {
    if (cardTextCss.style.color === "green"){
        cardTextCss.style.color = "" ;
        }
        else{
        cardTextCss.style.color = "green"
    }
    }

editCss.addEventListener("click", toggleGreenEdit);



//Exercice 5
let navBar = document.querySelector(".navbar");
function nukeButton(){
    document.styleSheets[0].disabled = true;
}


navBar.addEventListener("dblclick", nukeButton);

//Exercie 6 

var buttonView = document.querySelectorAll('div.btn-group');
var imageCard = document.querySelectorAll('img.card-img-top');
var buttonTest = true;
var textBackup = [];
var cardText = document.querySelectorAll('p.card-text');
cardText.forEach((text, i ) => {
    textBackup[i] = cardText[i].innerHTML;
});
function hideCard() {
    if (buttonTest) {
        buttonTest = false;
        cardText[0].innerHTML = '';
        imageCard[0].style.width = '20%';
    } else {
        buttonTest = true;
        cardText[0].innerHTML = textBackup[0];
        imageCard[0].style.width = '100%';
    }
};
buttonView[0].children[0].addEventListener('mouseover', hideCard);



//Exercice 7
let rightButton = document.querySelectorAll('a.btn:nth-child(2)')[0];
	function turnRight(){
		let firstCard = document.querySelectorAll('.album .row')[0];
	    let card = document.getElementsByClassName('card')[5].parentElement;
		firstCard.insertAdjacentHTML('afterbegin',card.outerHTML);
		firstCard.removeChild(card);
	}
rightButton.addEventListener('click',turnRight);


//Exercice 8
let leftButton = document.querySelectorAll('a.btn:nth-child(1)')[0];
leftButton.removeAttribute("href");
leftButton.setAttribute("href", ("#"));
function turnLeft(){
    let carte = document.querySelectorAll('.album .row')[0];
    let card = document.getElementsByClassName('card')[5].parentElement;
    carte.insertAdjacentHTML('afterbegin',card.outerHTML);
    carte.removeChild(card);
}
leftButton.addEventListener('click',turnLeft);