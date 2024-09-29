let menuLis = document.querySelectorAll("header nav .menu li");
const menu = document.getElementById("toggle-menu");
const menuList = document.getElementById("menu"); // header ul

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  menuList.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuList.contains(e.target)) {
    menu.classList.remove("fa-times");
    menuList.classList.remove("active");
  }
});

// menuLis.forEach((li) => {
//   li.addEventListener("click", () => {
//     menuLis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     li.classList.add("active");
//   });
// })

const packedLi = document.querySelectorAll(".packed");
let packedList = document.querySelectorAll(".toggle-list");

// packedLi.forEach((li) => {
//   li.addEventListener("click", () => {
//     packedList.forEach((list) => {
//       list.classList.remove("active");
//       list.classList.toggle("active");
//     })
//   })
// })

packedLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    packedList.forEach((list) => {
      list.classList.remove("active");
      if (list === e.currentTarget.querySelector(".toggle-list")) {
        list.classList.add("active");
      }
    });
  });
});

// ScrollReveal

const sr = ScrollReveal({
  distance: "60px",
  duration: 1400,
  reset: false,
  mobile: true,
});

sr.reveal("header", { delay: 200, origin: "top" });
sr.reveal(".main-title", { delay: 200, origin: "bottom" });
sr.reveal("section.search", { delay: 200, origin: "top" });
sr.reveal("section.landing", { delay: 200, origin: "top" });
sr.reveal(".categories .product", { delay: 200, origin: "left" });
sr.reveal(".categories .left", { delay: 200, origin: "right" });
sr.reveal(".image-slide", { delay: 200, origin: "left" });
sr.reveal(".newest .product", { delay: 200, origin: "bottom" });
sr.reveal(".testimonials", { delay: 200, origin: "bottom" });
sr.reveal(".services", { delay: 200, origin: "bottom" });
sr.reveal(".links", { delay: 200, origin: "bottom" });
// sr.reveal("footer", { delay: 200, origin: "bottom" });
