window.addEventListener('load', () => {

    const inputField = document.querySelector('#inputUrl');
    const encodebtn = document.querySelector('#encodeButn');
    const decodebtn = document.querySelector('#decodeButn');
    const outputField = document.querySelector('#outputUrl');

    inputField.addEventListener('change', event => {
        const encoded=encodeURIComponent(inputField.value);
        outputField.value=encoded;
    });
    
    inputField.addEventListener('change', event => {
        const decoded=decodeURIComponent(inputField.value);
        outputField.value=decoded;
    });

})