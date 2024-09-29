const header = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY >= 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

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

// sr.reveal("header", { delay: 100, origin: "top" });
sr.reveal(".main-title", { delay: 200, origin: "bottom" });
// sr.reveal("section.search", { delay: 200, origin: "top" });
sr.reveal("section.landing", { delay: 200, origin: "top" });
// sr.reveal(".categories .product", { delay: 200, origin: "left" });
// sr.reveal(".categories .left", { delay: 200, origin: "right" });
sr.reveal(".image-slide", { delay: 200, origin: "left" });
sr.reveal(".newest .product", { delay: 200, origin: "bottom" });
sr.reveal(".testimonials", { delay: 200, origin: "bottom" });
sr.reveal(".services", { delay: 200, origin: "bottom" });
sr.reveal(".links", { delay: 200, origin: "bottom" });
// sr.reveal("footer", { delay: 200, origin: "bottom" });

let animated = false;
window.addEventListener("scroll", () => {
  let categories = document.querySelector(".categories .product-grid");
  let rect = categories.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0 && !animated) {
    categories.classList.add("animate-categories");
    animated = true;
  }
});
