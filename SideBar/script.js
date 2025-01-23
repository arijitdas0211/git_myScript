const button = document.getElementById("button");
const barbtn = document.getElementById("barbtn");
const closebtn = document.getElementById("closebtn");
const sidebar = document.getElementById("sidebar");

button.addEventListener('click', () => {
    barbtn.style.display = "block";
    closebtn.style.display = "block";
    sidebar.style.display = "block";

    if (barbtn.style.display === "block") {
        console.log("Barbutton Clicked");
    }

    if (barbtn.style.display === "none") {
        console.log("Closebtn Clicked");
    }
})
