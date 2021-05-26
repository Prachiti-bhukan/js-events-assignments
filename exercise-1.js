window.addEventListener('load', () => {
    const update= document.querySelector('#button');
    let count =0;
    update.addEventListener('click', event =>
    {
        count++;
        event.target.value=count;

    });
});