const refs = {
    input: document.querySelector('input'),
    span: document.querySelector('span'),
}

refs.span.classList.add('text-style');
refs.input.addEventListener('input', onInputChangeSize);

function onInputChangeSize(event) { 
    refs.span.style.fontSize = `${ event.currentTarget.value}px`;
}