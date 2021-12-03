import { blogContent } from "./content/blog-content.js";

const blogArray = blogContent;
console.log(blogArray[0])

const sidebar = document.getElementById("widget-recent-posts");
let widgetPost = document.createElement("div");

for (let i = 0; i < 3; i++) {
    const blogElement = blogArray[i];
    widgetPost = document.createElement("div");
    widgetPost.innerHTML = `
                                <img src="${blogElement.img}" alt="">
                                <a href=""><h3 class="headings">${blogElement.title}</h3></a>
                            `
    widgetPost.classList.add("widget-post");
    sidebar.appendChild(widgetPost);
}


