window.addEventListener('load', () =>
{
    const input2 =document.querySelector('#inputText');
    const increase= document.querySelector('#incr');
    const decrease= document.querySelector('#decr');
    let count = 0;
    increase.addEventListener('click', (event) => {
        count += 1;
        input2.value = count;

    });

    decrease.addEventListener('click', (event) => {
        count -= 1;
        input2.value = count;
    });
});