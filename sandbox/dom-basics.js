const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random placeholder image");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const heading = document.createElement("h2");
heading.innerText = "DOM Basics";
const para = document.createElement("p");
para.innerText = "This was added through Javascript";
newSection.appendChild(heading);
newSection.appendChild(para);
document.body.appendChild(newSection);
