import { createHtmlAboutMe } from "./about";
import { createHtmlForContacts } from "./contact";
import { detectScroll, detectScroll2, detectScroll3 } from "./functions";
// import { createProjectPageHtml } from "./projects";
// import { getCollabGitRepo } from "./services/getCollabRepoServices";
// import { getMyGitRepo } from "./services/gitRepoServices";
// import { createHtmlSkillsPage } from "./skills";
import { closeNav, createHtmlStartPage, openNav } from "./startpage";

const hamburger: HTMLDivElement = document.querySelector(
  ".hamburger"
) as HTMLDivElement;

const navMenu: HTMLUListElement = document.querySelector(
  ".nav-menu"
) as HTMLUListElement;

const closeBtn: HTMLSpanElement = document.getElementById(
  "closeBtn"
) as HTMLSpanElement;

closeBtn.addEventListener("click", closeMenu);

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

/***************************************************/

createHtmlStartPage();

createHtmlAboutMe();

createHtmlForContacts();

// getMyGitRepo();

// getCollabGitRepo();

// createProjectPageHtml();

// createHtmlSkillsPage();

/********************************************* */

window.addEventListener("scroll", detectScroll);
window.addEventListener("scroll", detectScroll2);
window.addEventListener("scroll", detectScroll3);
