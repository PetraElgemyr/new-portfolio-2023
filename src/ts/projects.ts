// import { IRepos } from "./models/IRepos";
// import { getMyGitRepo } from "./services/gitRepoServices";
//  getMyGitRepo();

// export const createProjectPageHtml = (repos: [IRepos]) => {
//   const projectDiv: HTMLDivElement = document.getElementById(
//     "projects"
//   ) as HTMLDivElement;

//   let projectPageTitle: HTMLHeadingElement = document.createElement("h3");
//   projectPageTitle.innerHTML = "Projects";

//   const allReposContainer: HTMLDivElement = document.createElement("div");
//   allReposContainer.className = "reposWrapper";

//   projectDiv.append(projectPageTitle, allReposContainer);

//   for (let i = 0; i < repos.length; i++) {
//     const repoContainer: HTMLDivElement = document.createElement("div");
//     repoContainer.className = "repo__container";

//     const repoImage: HTMLImageElement = document.createElement("img");
//     repoImage.className = "repo__image";

//     const repoTitle: HTMLParagraphElement = document.createElement("p");
//     repoTitle.className = "repo__title";
//     repoTitle.innerHTML = repos[i].name;

//     const repoDescription: HTMLSpanElement = document.createElement("span");
//     repoDescription.className = "repo__description";
//     repoDescription.innerHTML =
//       "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ";

//     allReposContainer.appendChild(repoContainer);
//     repoContainer.append(repoImage, repoTitle, repoDescription);
//   }
//   console.log("Detta är mina repos: ", repos);

//   // const firstProjectPic: HTMLImageElement = document.createElement("img");
//   // firstProjectPic.src = "./assets/km1.jpg";
//   // firstProjectPic.alt = "Köksmästarn AB image";

//   const firstProjectPic: HTMLSpanElement = document.createElement("span");
//   firstProjectPic.innerHTML =
//     '<img src="/km1.jpg" alt="Köksmästarn AB Image" /> ';

//   projectDiv.appendChild(firstProjectPic);
// };
