let button = document.getElementById("btn")

button.addEventListener("click", () => {
    // alert("I was clicked! yayy")
    document.querySelector(".box").innerHTML = "<b> Yayy you are clicked</b> Enjoy your click!"
})