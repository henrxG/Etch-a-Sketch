document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('#container');

    for (let i = 0; i < 256; i++) {
        const element = document.createElement('div');
        element.classList.add(`element${i}`);
        element.style.backgroundColor = 'red';
        element.style.width = '30px';
        element.style.height = '30px';
        element.style.margin = '1px';
        container.appendChild(element);
    }

    // Load CSS file after JavaScript execution
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css'; // Replace with the path to your CSS file
    document.head.appendChild(link);
});