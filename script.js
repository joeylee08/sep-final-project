let doggies = document.querySelectorAll(".doggy");

doggies.forEach(item => {
  item.addEventListener("mouseover", function(e) {
    item.classList.add("hover");
    showMessage(e);
  })
  item.addEventListener("mouseout", function(e) {
    item.classList.remove("hover");
    hideMessage(e);
  })
})

let codepens = document.querySelectorAll(".codepen");

codepens.forEach(item => {
  item.addEventListener("mouseover", function(e) {
    item.classList.add("hover");
  })
  item.addEventListener("mouseout", function(e) {
    item.classList.remove("hover");
  })
})

function showMessage(e) {
  let messages = document.querySelectorAll(".message");
  
  messages.forEach(item => {
    item.classList.remove("unhide");
  })

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
  if (e.relatedTarget.classList.contains("message")) return;
  document.querySelectorAll(".message").forEach(item => {
    item.classList.remove("unhide")
  })
}