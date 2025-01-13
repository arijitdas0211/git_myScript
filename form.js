document.querySelector('#myForm').addEventListener('submit', (event)=> {
    event.preventDefault();

    alert("Form submitted!");
});

document.querySelector('#myInput').addEventListener('change', (event) => {
    event.preventDefault();

    alert(`Input changed to: ${event.target.value}`);
});

document.querySelector('#name').addEventListener('focus', (event) => {
    event.preventDefault();

    alert(`User is filling name.`);
});

document.querySelector('#age').addEventListener('focus', (event) => {
    event.preventDefault();

    alert(`User is filling age.`);
});

document.querySelector('#name').addEventListener('blur', (event) => {
    event.preventDefault();

    alert(`Name field lost focus.`);
});

document.querySelector('#myInput').addEventListener('input', (event) => {
    event.preventDefault();

    alert(`Current value: ${event.target.value}`);
});
