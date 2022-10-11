// Functions
let resizeFunction = function () {
  // If User Scroll in The Page Or Resize the Screen
  let sectionStart = sections.map((section) => {
    return section.getBoundingClientRect().top;
  });
  // retern arr of sections start position
  return sectionStart;
};

let addActive = function (list ,index, className) {
  list.forEach((sec) => sec.classList.remove(className));
  list[index].classList.add(className);
};


// End Functions

let sections = [...document.getElementsByTagName("section")];


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
  // add the href = section id
  a.setAttribute("href", `#${sectionId}`); 
  a.innerHTML = sectionName;
  // [4] append a in li And append li in The Nav
  li.appendChild(a);
  nav.appendChild(li);
}

// Get Nav childrens 
nav = [... nav.children];

// IF user Scroll Add Active class to The Section
window.addEventListener("scroll", () => {
  let sectionPosition = resizeFunction();
  // IF The Position In This range(-250 to 150) far from top of page add active
  sectionPosition.forEach((position, index) => {
    if (position >= -250 && position <= 150) {
      addActive(sections, index, "active");
      addActive(nav, index, "active-sec-link");
    }
  });
});


