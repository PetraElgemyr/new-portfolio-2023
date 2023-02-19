export function createHtmlSkillsPage() {
  const skillRootDiv: HTMLDivElement = document.getElementById(
    "skills"
  ) as HTMLDivElement;

  let skillPageTitle: HTMLHeadingElement = document.createElement("h3");
  skillPageTitle.innerHTML = "Skills";

  skillRootDiv.appendChild(skillPageTitle);
}
