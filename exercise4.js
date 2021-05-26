window.addEventListener('load', () => {

    const inputField = document.querySelector('#inputext');
    const numval = document.querySelector('#number');
    inputField.addEventListener('input', event => {
        numval.innerText= inputField.value.length;
 
    });

});