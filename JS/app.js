console.log ('flex');

//input text element-

//button element

// get list

// event listener som lytter på klikk på knapp
//lese vderdi på input text og legge til im lista

// eventlistener som lytter på tastarturknapp enter
//lese vderdi på input text og legge til im lista


const inputElement = document.getElementById('product');

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
    liElement.textContent = inputElement.value;
    inputElement.value
    ulShoppingListElement.appendChild(liElement);
}


function initList () {
    const bodyElement = document.querySelector('body');
    const ulElement = document.createElement('ul');
};

