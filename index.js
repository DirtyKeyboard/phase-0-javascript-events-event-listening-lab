function addingEventListener() {
    const button = document.getElementById('button')
    button.addEventListener('click', (e) => alert('I was clicked!'))
}

addingEventListener();