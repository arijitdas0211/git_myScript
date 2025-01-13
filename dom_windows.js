document.addEventListener('DOMContentLoaded', ()=> {
    alert('DOM fully loaded and parsed.');
});

document.addEventListener('resize', () => {
    alert('Window resized.');
});

document.addEventListener('scroll', () => {
    alert('User is scrolling.');
});
