const headerTag: HTMLDivElement = document.getElementById(
  "headerTag"
) as HTMLDivElement;

const homePage: HTMLDivElement = document.getElementById(
  "home"
) as HTMLDivElement;

const aboutPage: HTMLDivElement = document.getElementById(
  "about"
) as HTMLDivElement;

const projectPage: HTMLDivElement = document.getElementById(
  "projects"
) as HTMLDivElement;

// const skillsPage: HTMLDivElement = document.getElementById(
//   "skills"
// ) as HTMLDivElement;

const contactPage: HTMLDivElement = document.getElementById(
  "contact"
) as HTMLDivElement;

let logoImgStart: HTMLImageElement = document.getElementById(
  "logoPictureStart"
) as HTMLImageElement;
logoImgStart.classList.add("--active");

let logoImgAbout: HTMLImageElement = document.getElementById(
  "logoPictureAbout"
) as HTMLImageElement;

let logoImgWork: HTMLImageElement = document.getElementById(
  "logoPictureProjects"
) as HTMLImageElement;

let logoImgContact: HTMLImageElement = document.getElementById(
  "logoPictureContact"
) as HTMLImageElement;

export function detectScroll() {
  let section2 = document.querySelector(".about") as HTMLDivElement;
  let header = document.querySelector(".header") as HTMLDivElement;
  if (
    window.scrollY >= homePage.clientHeight &&
    window.scrollY < homePage.clientHeight + section2.clientHeight
    // section2.getBoundingClientRect().top < document.documentElement.clientHeight
  ) {
    header.classList.add("bg-purple");
    logoImgStart.classList.remove("--active");
    logoImgAbout.classList.add("--active");
  }
  if (window.scrollY < homePage.clientHeight) {
    header.classList.remove("bg-purple");
    logoImgStart.classList.add("--active");
    logoImgAbout.classList.remove("--active");
  }
  if (window.scrollY > homePage.clientHeight + section2.clientHeight) {
    header.classList.remove("bg-purple");
    logoImgStart.classList.remove("--active");
    logoImgAbout.classList.remove("--active");
  }
}

//projects work page
export function detectScroll2() {
  let section2 = document.querySelector(".about") as HTMLDivElement;
  let header = document.querySelector(".header") as HTMLDivElement;

  if (
    window.scrollY >= homePage.clientHeight + section2.clientHeight - 20 &&
    window.scrollY <
      homePage.clientHeight + section2.clientHeight + projectPage.clientHeight
  ) {
    header.classList.add("bg-orange");
    logoImgAbout.classList.remove("--active");
    logoImgWork.classList.add("--active");
  }
  if (
    window.scrollY < homePage.clientHeight + section2.clientHeight - 20 ||
    window.scrollY >
      homePage.clientHeight + section2.clientHeight + projectPage.clientHeight
  ) {
    header.classList.remove("bg-orange");
    logoImgWork.classList.remove("--active");
    // logoImgAbout.classList.remove("--active");
  }
}

export function detectScroll3() {
  let section2 = document.querySelector(".about") as HTMLDivElement;
  let header = document.querySelector(".header") as HTMLDivElement;

  if (
    window.scrollY >
      homePage.clientHeight +
        section2.clientHeight +
        projectPage.clientHeight -
        20 &&
    window.scrollY <
      homePage.clientHeight +
        section2.clientHeight +
        projectPage.clientHeight +
        contactPage.clientHeight
  ) {
    header.classList.add("bg-blue");
    logoImgWork.classList.remove("--active");
    logoImgContact.classList.add("--active");
  } else {
    header.classList.remove("bg-blue");
    logoImgContact.classList.remove("--active");
  }
}
