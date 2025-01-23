const button = document.getElementById("button");
const barbtn = document.getElementById("barbtn");
const closebtn = document.getElementById("closebtn");
const sidebar = document.getElementById("sidebar");

button.addEventListener('click', () => {
    if (barbtn.style.display === "block") {
        sidebar.style.display = "none";
        barbtn.style.display = "none";
        closebtn.style.display = "block";
        console.log("Barbutton Clicked");
    } else {
        sidebar.style.display = "block";
        barbtn.style.display = "block";
        closebtn.style.display = "none";
        console.log("Closebtn Clicked");
    }
})
