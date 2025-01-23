const button = document.getElementById("button");
const barbtn = document.getElementById("barbtn");
const closebtn = document.getElementById("closebtn");
const sidebar = document.getElementById("sidebar");

button.addEventListener('click', () => {

    if (barbtn.style.display === "block") {
        console.log("Barbutton Clicked");
        barbtn.style.display = "none";
        closebtn.style.display = "block";
        sidebar.style.display = "none";
    }

    else {
        console.log("Closebtn Clicked");
        barbtn.style.display = "block";
        closebtn.style.display = "none";
        sidebar.style.display = "block";
    }
})
