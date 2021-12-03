import { blogContent } from "./content/blog-content.js";

const blogArray = blogContent;
console.log(blogArray[0])

const homepageDiv = document.getElementById("homepage");
const otherPosts = document.createElement("div");
let secondaryPost = document.createElement("div");

for (let i = 0; i < blogArray.length; i++) {
    const blogElement = blogArray[i];
    secondaryPost = document.createElement("div");
    secondaryPost.innerHTML = `<div class="post-image post-image-secondary">
                                    <img src="${blogElement.img}" alt="">
                                    <p class="post-description">${blogElement.dateCreated}  |  ${blogElement.numberOfComments} comments</p>
                                </div>
                                <div class="post-content post-content-secondary">
                                    <h2 class="post-title headings">${blogElement.title}</h2>
                                <p>
                                    ${blogElement.contentOverview}
                                </p>
                                <a href="#">continue reading</a>
                                </div>`
    secondaryPost.classList.add("post-secondary");
    otherPosts.appendChild(secondaryPost);
}
homepageDiv.appendChild(otherPosts);


