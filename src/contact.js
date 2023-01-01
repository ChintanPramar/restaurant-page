import { paragraph } from "./home";

function createContact() {
  const main = document.createElement("main");

  main.appendChild(paragraph("I am from Gujarat.", "text-md"));
  main.appendChild(paragraph("Contact Us: +91 123-456-7890", ""));
  main.appendChild(
    paragraph("Address: Lorem ipsum dolor sit amet consectetur.", "")
  );
  main.appendChild(paragraph("Thank you for coming here.", ""));

  return main;
}

function showContact() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createContact());
}

export default showContact;
