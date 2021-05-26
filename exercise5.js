window.addEventListener('load', () => {
    const hexval= document.querySelector('#inputNum');
    const changecol= document.querySelector('#colour');
    hexval.addEventListener('input', event => {
         
        changecol.style.backgroundColor.value = hexval;
        
    });
});