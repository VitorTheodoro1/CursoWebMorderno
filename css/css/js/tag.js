const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#034ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    getColor(tag) {
        return this[tag] ? this[tag] : this.padrao;
    }
}



document.querySelectorAll('.tag').forEach(elemento => {
    const nameTag = elemento.tagName.toLowerCase();

    elemento.style.borderColor = colors.getColor(nameTag);//peguei o nome do elemento

    if (!elemento.classList.contains('nolabel')) {// está contido na lista de classes o nolabel
        let label = document.createElement('label');//criar uma tag label
        label.style.backgroundColor = colors.getColor(nameTag);
        label.innerHTML = nameTag; // colocar a tag dentro do label?
        elemento.insertBefore(label, elemento.childNodes[0]);
    }
})