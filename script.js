function change() {
    let chekbox = document.querySelectorAll('input');
    let out = document.querySelector('.output-box');
    let counter = document.querySelector('.count')
    out.innerHTML = chekbox[0].value;

    if (chekbox[1].checked) { out.style.fontWeight = '900' }
    else { out.style.fontWeight = '400' }
    if (chekbox[2].checked) { out.style.fontStyle = 'italic' }
    else { out.style.fontStyle = 'normal' }
    if (chekbox[3].checked) { out.innerHTML = out.innerHTML.toUpperCase(); }
    if (chekbox[4].checked) { out.innerHTML = out.innerHTML.toLowerCase(); }
    if (chekbox[5].checked) {
        let arr2 = [] 
        let arr = out.innerHTML.split(' ')
        for (let i of arr) {
            for (let j in i) {
                if (j == 0) {
                arr2.push(i[j].toUpperCase() + i.slice(1,i.length));
                }
            }
        }
        out.innerHTML = arr2.join(' ')
    }
    out.style.color = chekbox[6].value;
}
function darkMode() {
    let button = document.querySelector('.button-case-night')
    let Switch = document.querySelector('.switch-night'),
        box1  = document.querySelector('.input-section'),
        box2  = document.querySelector('.output-section')
    button.classList.toggle('button-case-day')
    Switch.classList.toggle('switch-day')
    box1.classList.toggle('boxes-day')
    box2.classList.toggle('boxes-day')
}
