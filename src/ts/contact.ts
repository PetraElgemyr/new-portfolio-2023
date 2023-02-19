export const createHtmlForContacts = () => {
  const contactTextBox: HTMLDivElement = document.getElementById(
    "contact__texts"
  ) as HTMLDivElement;
  const contactLinkSymbols: HTMLDivElement = document.getElementById(
    "contact__links"
  ) as HTMLDivElement;

  let contactInfo: HTMLParagraphElement = document.createElement("p");
  contactInfo.innerHTML =
    "If you want to contact me you can either email me or contact me on Linkedin.";

  let mailContainer: HTMLParagraphElement = document.createElement("p");
  mailContainer.innerHTML = "Email: ";
  const mailTag: HTMLAnchorElement = document.createElement("a");
  mailTag.href = "mailto: petra.elgemyr@medieinstitutet.se";
  mailTag.innerHTML = "Petra.elgemyr@gmail.com";
  mailContainer.append(mailTag);

  let linkedinContainer: HTMLParagraphElement = document.createElement("p");
  const linkedInLink: HTMLAnchorElement = document.createElement("a");
  linkedInLink.setAttribute(
    "href",
    "https://www.linkedin.com/in/petra-elgemyr-a707b724b/"
  );
  linkedInLink.setAttribute("target", "_blank");
  linkedInLink.innerHTML = "Linkedin";
  linkedinContainer.append(linkedInLink);

  contactTextBox.append(contactInfo, mailContainer, linkedinContainer);

  let githubLink: HTMLAnchorElement = document.createElement("a");
  let linkedinLogo: HTMLAnchorElement = document.createElement("a");

  let githubSymbol: HTMLSpanElement = document.createElement("span");
  let linkedinSymbol: HTMLSpanElement = document.createElement("span");

  githubLink.setAttribute("href", "https://github.com/PetraElgemyr");
  githubLink.setAttribute("target", "_blank");

  linkedinLogo.setAttribute(
    "href",
    "https://www.linkedin.com/in/petra-elgemyr-a707b724b/"
  );
  linkedinLogo.setAttribute("target", "_blank");

  githubSymbol.className = "fa-brands fa-github";
  linkedinSymbol.className = "fa-brands fa-linkedin";

  githubLink.appendChild(githubSymbol);
  linkedinLogo.appendChild(linkedinSymbol);

  contactLinkSymbols.append(githubLink, linkedinLogo);
};
