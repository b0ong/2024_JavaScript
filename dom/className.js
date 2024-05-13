const liElement = document.getElementsByClassName('a');
console.log(liElement);

for (const liElements of liElement) {
    console.log(liElements.textContent);
}
for (let i = 0; i < liElement.length; i++) {
    console.log(liElement[i].textContent);
}