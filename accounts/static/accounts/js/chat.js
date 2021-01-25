const CHAT = [];

const CHATFORM = document.querySelector('.ch-form');
const CHATSUBMIT = document.querySelector('#ch-submit');
const CHATUL = document.querySelector('.chat-list');
const REVLIST = document.querySelector('.reviews-list');
const LINE = document.querySelector('.mdc-list-divider');


CHATSUBMIT.addEventListener('click', (e) => { 
    e.preventDefault();

    const MSG  = document.querySelector('#ch-input');
    const MSTTXT = MSG.value;

    if(MSTTXT.value === '') { return }

    CHAT.push(MSTTXT);

    CHATFORM.reset();

    MSG.focus();

    
    // update chat display
    CREATECHAT(MSTTXT);
})


CHATFORM.addEventListener('submit', (e) => {
    e.preventDefault();

    const MSG  = document.querySelector('#ch-input');
    const MSTTXT = MSG.value;

    if(MSTTXT.value === '') { return }

    CHAT.push(MSTTXT);

    CHATFORM.reset();

    MSG.focus();

    
    // update chat display
    CREATECHAT(MSTTXT);

});

const CREATECHAT = chat => {
    const ul = document.querySelector('.chat-list');
    const li = document.createElement('li');
    li.classList.add('mdc-list-item', 'mdc-ripple-upgraded');
    li.innerHTML = `
        <span class="mdc-list-item__text"><span class="mdc-list-item__primary-text">${chat}</span>
        <span class="mdc-list-item__secondary-text">Thu, 14:18</span></span>`;

    ul.appendChild(li);
};

const CREATECHATTWO = () => {
    const ul = document.querySelector('.chat-list');
    const li = document.createElement('li');
    li.classList.add('mdc-list-item', 'mdc-ripple-upgraded');
    li.innerHTML = `
        <span class="mdc-list-item__graphic material-icons" aria-hidden="true">account_circle</span>
        <span class="mdc-list-item__text"><span class="mdc-list-item__primary-text">Yes the place is open :)</span>
        <span class="mdc-list-item__secondary-text">Thu, 14:18</span></span>`;

    ul.appendChild(li);
};

// simulate a reply
setTimeout(() => { CREATECHATTWO(); }, 3000); // display it after 3s 


CHAT.forEach(chat => {
    CREATECHAT(chat);
});


// display review and close modal 

const DISPLAYREVIEW = () => {

    CHATUL.removeChild(REVLIST);
    CHATUL.removeChild(LINE);

    CHATUL.appendChild(LINE);
    CHATUL.appendChild(REVLIST);

    REVLIST.style.display = 'block';
    LINE.style.display = 'block';


}

setTimeout(() => { DISPLAYREVIEW(); }, 20000); // display review for 20s 


const CLOSEDIALOG = () => {

    // close dialog
    const DIALOG = document.querySelector('#mdc-dialog-with-list');
    if(DIALOG.classList.contains('mdc-dialog--open')) {
        DIALOG.classList.remove('mdc-dialog--open');
        DIALOG.classList.add('mdc-dialog--close');

    }

}

setTimeout(() => { CLOSEDIALOG(); }, 30000); // display review for 30s 