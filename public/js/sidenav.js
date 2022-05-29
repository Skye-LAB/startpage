const sidenavButton = document.querySelector("#sidenav-button");
const sidenav = document.querySelector("#sidenav");

sidenavButton.addEventListener("click", () => {
  sidenav.classList.remove("w-0");
  sidenav.classList.add("w-[300px]");
});

window.addEventListener("click", (e) => {
  if (e.target != sidenavButton && e.target != sidenav) {
    sidenav.classList.add("w-0");
    sidenav.classList.remove("w-[300px]");
  }
});
