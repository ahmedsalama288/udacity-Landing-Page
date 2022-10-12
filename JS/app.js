// Functions

// retern arr of sections start position
let getSecPosition = function () {
  // If User Scroll in The Page Or Resize the Screen
  let sectionStart = sections.map((section) => {
    return section.getBoundingClientRect().top;
  });
  return sectionStart;
};

// Add Active Class To The Element
let addActive = function (list, index, className) {
  list.forEach((sec) => sec.classList.remove(className));
  list[index].classList.add(className);
};
// End Functions

// Add Scroll smooth to Html
const html = document.getElementsByTagName("html")[0];
html.style.scrollBehavior = "smooth";

// Get The Sections
const sections = [...document.getElementsByTagName("section")];

// Start Nav
let nav = document.getElementById("navbar__list");
// loop over the Sections
for (let section of sections) {
  // [1] Get Section Name Inside data-nav Attr
  let sectionName = section.getAttribute("data-nav");
  let sectionId = section.id;
  // [2] Create The li and a elements
  let li = document.createElement("li");
  let a = document.createElement("a");
  // [3] Store the value of The section Name in the inner Html of <a>
  a.innerHTML = sectionName;
  // [4] append a in li And append li in The Nav
  li.appendChild(a);
  nav.appendChild(li);
}

// Get The sections Position
let sectionPosition = getSecPosition();

// Get Nav childrens
const navChildren = [...nav.children];

// Get the anchors
const anchors = document.querySelectorAll("#navbar__list > li > a");

// [#] Go To The Section When The User Click On Anchor
anchors.forEach((a, index) => {
  a.addEventListener("click", () => scrollBy(0, sectionPosition[index]));
});

// If user Scroll Add Active class to The Section
window.addEventListener("scroll", () => {
  sectionPosition = getSecPosition();
  // If The Position In This range(-250 to 150) far from top of page add active
  sectionPosition.forEach((position, index) => {
    if (position >= -250 && position <= 150) {
      addActive(sections, index, "active");
      addActive(navChildren, index, "active-sec-link");
    }
  });
});
