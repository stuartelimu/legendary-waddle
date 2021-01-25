const qnInput = document.querySelector('#qn-input');
const qnCountInput = document.querySelector('#request-helper-text span');

const countChars = (input, countInput) => {
    let len = input.value.length;
    if(len <= 200) {
        countInput.textContent = len;
    } else {
        document.querySelector('#request-helper-text').textContent = "Sorry, you have reached maximum chars";
    }
}

qnInput.addEventListener('input', (e) => {
    countChars(qnInput, qnCountInput);
})