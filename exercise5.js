 
 console.log("heloo");
 window.addEventListener('load', () => 
 {
     console.log("heloo");
     const hexval= document.querySelector("#bx");
     const colournew= document.querySelector('#color');
    hexval.addEventListener('input', (event) =>
     {
        colournew.style.backgroundColor= hexval.value;
     });
 });