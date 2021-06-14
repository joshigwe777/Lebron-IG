
// Testing out event listeners on this webpage. When any part of the top section is clicked, one of the paragraph sections will be colored red//
const t = document.querySelector(".top");
const par = document.getElementsByTagName('p');

t.addEventListener('click', () => {
    console.log(par[0].innerHtml);
    par[1].style.color = 'red';
});