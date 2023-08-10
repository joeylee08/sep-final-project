let doggies = document.querySelectorAll(".doggy");

doggies.forEach(item => {
  item.addEventListener("mouseover", function(e) {
    item.classList.add("doggyhover");
    showMessage(e);
  })
  item.addEventListener("mouseout", function(e) {
    item.classList.remove("doggyhover");
    hideMessage();
  })
})

function showMessage(e) {
  let id;

  switch(e.target.id) {
    case "doggy1":
      id = "msg1";
      break;
    case "doggy2":
      id = "msg2";
      break;
    case "doggy3":
      id = "msg3";
      break;
    case "doggy4":
      id = "msg4";
      break;
  }

  document.querySelector(`#${id}`).classList.add("unhide");
}

function hideMessage(e) {
  document.querySelectorAll(".message").forEach(item => {
    item.classList.remove("unhide")
  })
}