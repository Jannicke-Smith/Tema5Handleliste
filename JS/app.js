//Henter inputelement fra html koden
const inputElement = document.getElementById('addItem');

//Henter add-button fra html koden
const buttonAddElement = document.getElementById('add-button');

//legger til en eventlistener som lytter når man klikker og kjører addItemToList() funksjonen
buttonAddElement.addEventListener('click', addItemToList);

//Henter ULen som heter shopping-list fra html koden
const ulShoppingListElement = document.getElementById('shopping-list');

//Ny tomt array som brukes til å holde informasjonen som generes på siden
var list = []

//entertast eventlisteneer for å legge til nye elementer. Denne kjører addItemToList funksjonen når man trykker enter
window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        addItemToList();
    }
});

//henter fra localstorage med en gang siden åpner seg
getLocalStorage();


//legge til nye ting i list
function addItemToList() {
    //Legger det som står i inputfeltet inn i listen
    list.push(inputElement.value);
    //Blanker ut verdien i input feltet
    inputElement.value = "";
    //oppdaterer localstorage med det nye elementet som er lagt til i listen
    updateLocalStorage();
}

function renderList() {

    //så lenge det finnes et første element i ul listen i html koden så fjerner vi den første. På denne måten tømmer vi listen før vi
    //lager den på nytt lenger ned
    //kilde: https://stackoverflow.com/questions/10750137/remove-all-li-from-ul svar 2.
    while( ulShoppingListElement.firstChild ){
        ulShoppingListElement.removeChild( ulShoppingListElement.firstChild );
      }

      //for hvert element i listen så lager vi et nytt listeelement
    for(let i = 0; i<list.length; i++){
        //lage li element, et checkbox element, et fjernne elenment og et textelement
        let liElement = document.createElement('li');
        let checkboxElement = document.createElement('input');
        let closeElement = document.createElement('button');
        let textElement = document.createElement('span');

        //sette classname på checkboxElement og på closeElement
        checkboxElement.className = "checkbox";
        closeElement.className = "close";
        
        //setter teksten til å være det samme som er i listen på "i" sin plass. Siden dette øker hver gang vil den gå igjennom hele listen
        textElement.textContent = list[i];

        //sette attributter på checkboxelement
        checkboxElement.setAttribute("type", "checkbox");

        //legge til en X i closeElement og en ID
        closeElement.id = i;
        closeElement.textContent = "\u00D7"
        
        //Onclick funksjon som fjerner elementet fra listen basert på "i", som vil være det samme som id
        closeElement.onclick = function () {removeItem(i);}

        //sammensveiser liElement med de andre elementene
        liElement.append(checkboxElement, textElement, closeElement);
        
        //legge til liElement som nå er sammensveiset med resten i ulShoppingListElement
        ulShoppingListElement.append(liElement);
    }
}

//Fjernefunksjon for å fjerne ting i listen. deretter oppdateres localstorage med den nye listen.
//Her bruker vi ID som et parameter
function removeItem(id){
    //her fjerner vi valgte element i listen basert på IDen til objektet vi skal fjerne
    list.splice(id, 1);
    updateLocalStorage();
}

//Kilde: Muntlig leksehjelp og ekstra undervisning privat
//Bonusoppgave: LocalStorage. Denne funksjonen tar listen som er et array, gjør det om til JSON text og lagrer et nytt localstorage
//objekt som heter "list". Denne vil genereres på nytt hver gang man legger til eller fjerner en ting fra listen
function updateLocalStorage(){
    localStorage.setItem("list", JSON.stringify(list));
    renderList();
}

//Kilde: Muntlig leksehjelp og ekstra undervisning privat
//Bonusoppgave: Localstorage. Denne funksjonen henter alle objekter som ligger i localstorage. Siden disse er lagret som et JSON 
//objekt må disse konverteres til et vanlig array. Det gjøres med JSON.parse. Denne funksjonen kjører med en gang siden åpnes
//for å hente alt som ligger i localstorage fra før.
function getLocalStorage(){
    list = JSON.parse(localStorage.getItem("list"));
    renderList();
}