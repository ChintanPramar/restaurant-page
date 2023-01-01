function createHome() {
  const main = document.createElement("main");

  const chefImage = document.createElement("img");
  chefImage.src = "../dist/images/chef.jpg";
  chefImage.alt = "Chef Image";
  chefImage.id = "chefImg";

  main.appendChild(paragraph("Welcome To GUJ FOOD", "text-lg"));
  main.appendChild(paragraph("This the wonder full restaurant", "text-md"));
  main.appendChild(chefImage);
  main.appendChild(paragraph("since 1985 by your love.", ""));
  return main;
}

export function paragraph(text, className) {
  if (className === "") {
    const para = document.createElement("p");
    para.textContent = text;
    return para;
} else {
    const para = document.createElement("p");
    para.classList.add(className);
    para.textContent = text;
    return para;
  }
}

function showHome() {
  const content = document.getElementById("content");
  content.textContent = "";

  content.appendChild(createHome());
}

export default showHome;
