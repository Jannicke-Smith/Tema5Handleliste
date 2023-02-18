console.log ('flex');

//input text element-

//button element

// get list

// event listener som lytter på klikk på knapp
//lese vderdi på input text og legge til im lista

// eventlistener som lytter på tastarturknapp enter
//lese vderdi på input text og legge til im lista


const inputElement = document.getElementById('addItem');

const buttonAddElement = document.getElementById('add-button');

const ulShoppingListElement = document.getElementById('shopping-list');

buttonAddElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        renderList();
    }
});
function renderList() {
    const liElement = document.createElement('li');
    var checkboxElement = document.createElement('INPUT');
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.className = "checkbox";
    liElement.textContent += inputElement.value;
    liElement.append(checkboxElement);
    var closeElement = document.createElement('span');
    closeElement.textContent = 'x';
    closeElement.className = "close";
    liElement.append(closeElement);
    ulShoppingListElement.append(liElement);
}


function initList () {
    const bodyElement = document.querySelector('body');
    const ulElement = document.createElement('ul');
};

var myNodelist =
document.getElementsByTagName("LI");
var i;
for (i=0; i <myNodelist.length; i++)
{
    var span =
    document.createElement("span");
    var txt =
    document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = 
document.getElementsByClassName("close");
var i;
for (i =0; i <close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display ="none";
    };
}