function createMenu(){
    const main = document.createElement('main');

    main.appendChild(createBox("1", "Khaman Dhokla Recipe | Khaman Recipe"));
    main.appendChild(createBox("2", "Thepla Recipe | Methi Thepla (Fenugreek Flatbread)"));
    main.appendChild(createBox("3","Dabeli Recipe | Kacchi Dabeli | Dabeli Masala"));
    main.appendChild(createBox("4", "khandvi recipe"));
    main.appendChild(createBox("5", "Muthiya Recipe | Methi Muthia (Steamed and Fried)"));
    main.appendChild(createBox("6", "Rava Dhokla | Suji ka Dhokla"));

    return main;
}

function createBox(number, text){
    const div = document.createElement('div');
    div.classList.add("box");

    const img = document.createElement('img');
    img.src = `../dist/images/box Img/img-${number}.jpg`;
    img.alt = `Image ${number}`;
    img.classList.add("box-img");

    const para = document.createElement("p");
    para.classList.add("text-md");

    para.textContent = text;

    div.appendChild(img);
    div.appendChild(para);

    return div;
}

function showMenu(){
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(createMenu());
}

export default showMenu;