let modebtn = document.querySelector("#mode");
let currmode = "light";
// let color = document.body.styles;
modebtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    document.body.style.backgroundColor = "green";
  } else {
    currmode = "light";
    document.body.style.backgroundColor = "pink";
  }
  console.log(currmode);
});
