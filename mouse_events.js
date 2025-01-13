// Mouse Events
// document.querySelector("#myButton").addEventListener('click', ()=> {
//     alert("Button Clicked");
// })

// document.querySelector("#myButton").addEventListener('dbclick', () => {
//     alert("Button Double Clicked");
// })

// document.querySelector("#myButton").addEventListener('mouseover', () => {
//     alert("Mouse over the element.");
// })

// document.querySelector("#myButton").addEventListener('mouseout', () => {
//     alert("Mouse left the element.");
// })

document.querySelector("#myButton").addEventListener('mousemove', () => {
    alert(`Mouse position: (${event.clientX}, ${event.clientY})`);
})

