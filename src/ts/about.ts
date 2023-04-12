export const createHtmlAboutMe = () => {
  const aboutRoot: HTMLDivElement = document.getElementById(
    "about"
  ) as HTMLDivElement;

  // let aboutWrapper: HTMLDivElement = document.createElement("div");
  // aboutWrapper.className = "about__wrapper";

  const aboutWrapper: HTMLDivElement = document.getElementById(
    "aboutWrapper"
  ) as HTMLDivElement;

  // let aboutTitle: HTMLHeadingElement = document.createElement("h3");
  // aboutTitle.className = "about__title";
  // aboutTitle.innerHTML = "Who am I?";

  let aboutBox: HTMLDivElement = document.createElement("div");
  aboutBox.className = "about__box";

  aboutWrapper.appendChild(aboutBox);
  // aboutRoot.append(aboutTitle, aboutWrapper);

  let pTag: HTMLParagraphElement = document.createElement("p");
  let spanTag: HTMLSpanElement = document.createElement("span");
  spanTag.className = "orange";
  spanTag.innerText = "#about-me { ";

  pTag.appendChild(spanTag);
  aboutBox.appendChild(pTag);

  let secondAboutBox: HTMLDivElement = document.createElement("div");
  secondAboutBox.className = "about";
  secondAboutBox.innerHTML = ` <p>
<span class="blue">name: </span><span>"Petra Elgemyr"</span> <span class="white"> ; </span>
</p>
<p>
<span class="blue">age: </span><span class="green">22</span
> <span class="white"> ; </span>
</p>
<p>
<span class="blue">location: </span><span>"Stockholm"</span>  <span class="white"> ; </span>
</p>
<p>
<span class="blue">likes: </span
><span>"dogs, sushi and playing the piano" </span>  <span class="white"> ; </span>
</p>
<p class="ed"><span class="orange"> } </span></p>
<p class="ed" ><span class="orange">.education {</span></p>
<p>
<span class="blue">school: </span>
<span>"Medieinstitutet"</span>  <span class="white"> ; </span>
</p>
<p>
<span class="blue">program:</span
><span>"front-end developer"</span>  <span class="white"> ; </span>
</p>
<p>
<span class="blue">expected graduation: </span
><span class="green">2024</span> <span class="white"> ; </span></p>
<p class="ed"><span class="orange"> }</span></p>
<p class="ed" ><span class="orange">cv {</span></p>
<p><span class="blue">link: </span><a href="https://www.dropbox.com/s/yhhbcws83bm71aw/cvPetraElgemyr.pdf?dl=0">cv_link</a>
<span class="white"> ; </span></p>
<p class="ed"><span class="orange"> }</p>

`;
  // <p class="ed"><span class="orange"> cv { </span></p>
  // <p> <a href="file:///C:/Skola/Medieinstitutet/portfolio/src/assets/PetraElgemyrCV.pdf" target="_blank">link_to_my_cv</a></p>
  // <p class="ed"> <span class="orange">}</span> </p>
  //   let secondPTag: HTMLParagraphElement = document.createElement("p");

  //   let nameSpanTag: HTMLSpanElement = document.createElement("span");
  //   nameSpanTag.className = "blue";
  //   nameSpanTag.innerText = "name: ";
  //   let myNameSpanTag: HTMLSpanElement = document.createElement("span");
  //   myNameSpanTag.innerText = "Petra Elgemyr ;";

  //   secondPTag.append(nameSpanTag, myNameSpanTag);
  //   secondAboutBox.appendChild(secondPTag);
  aboutBox.appendChild(secondAboutBox);

  // const meBox: HTMLDivElement = document.createElement("div");
  // const meBox: HTMLDivElement = document.getElementById(
  //   "meBox"
  // ) as HTMLDivElement;

  // const myDescription: HTMLSpanElement = document.createElement("span");
  // myDescription.innerHTML = "Hej jag lorem impsum dolor sit amet";
  // myDescription.className = "me__description";

  // meBox.append(myDescription);

  // aboutRoot.appendChild(meBox);
};
