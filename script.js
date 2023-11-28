let modebtn = document.querySelector("#mode");
let currmode = "light";
modebtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    document.body.style.backgroundColor = "black";
  } else {
    currmode = "light";
    document.body.style.backgroundColor = "pink";
  }
  console.log(currmode);
});
