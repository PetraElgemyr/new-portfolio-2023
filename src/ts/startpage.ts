export function openNav() {
  let theNav: HTMLDivElement = document.getElementById(
    "myNav"
  ) as HTMLDivElement;
  theNav.style.width = "100%";
}

export function closeNav() {
  let theNav: HTMLDivElement = document.getElementById(
    "myNav"
  ) as HTMLDivElement;
  theNav.style.width = "0%";
}

export const createHtmlStartPage = () => {
  let startRoot: HTMLDivElement = document.getElementById(
    "startpage"
  ) as HTMLDivElement;
  let titleContainer: HTMLDivElement = document.createElement("div");
  titleContainer.className = "title__container";

  let titleName: HTMLHeadingElement = document.createElement("h1");
  titleName.className = "title__name";
  titleName.innerText = "Petra Elgemyr";

  let titleFrontEnd: HTMLSpanElement = document.createElement("span");
  titleFrontEnd.className = "title__title";
  titleFrontEnd.innerText = "//Front End Developer";

  titleContainer.appendChild(titleName);
  titleContainer.appendChild(titleFrontEnd);
  startRoot.appendChild(titleContainer);

  let nextPageBtn: HTMLAnchorElement = document.createElement("a");
  nextPageBtn.className = "btn__next";
  nextPageBtn.setAttribute("href", "#about");
  nextPageBtn.innerHTML = "Get to know me";

  startRoot.appendChild(nextPageBtn);
};
