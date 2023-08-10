let doggies = document.querySelectorAll(".doggy");

doggies.forEach(item => {
  item.addEventListener("mouseover", function() {
    item.classList.add("doggyhover");
  })
  item.addEventListener("mouseout", function() {
    item.classList.remove("doggyhover");
  })
})