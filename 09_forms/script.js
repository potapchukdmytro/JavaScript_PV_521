function formSubmit(event) {
    // зупинити стандартне виконання форми
    event.preventDefault();

    const form = event.target;
    // Щоб отримати текст у input потрібно прочитати його value
    const email = form["email"].value;
    const password = form["password"].value;

    const formData = {
        name: form["name"].value,
        email: form["email"].value,
        password: form["password"].value,
        phone: form["phone"].value,
        search: form["search"].value,
        url: form["url"].value,
        age: form["age"].value,
        rememberMe: form["rememberMe"].checked, // для checkbox читаємо checked
        gender: form["gender"].value,
        color: form["color"].value,
        time: form["time"].value,
        date: form["date"].value,
        week: form["week"].value,
        month: form["month"].value,
        datetime: form["datetime"].value,
    };

    // Отримання файлу
    const file = document.getElementById("file");
    for (const f of file.files) {
        console.log(f);
    }

    console.log(formData);
}

// один файл
function selectFile(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
        const file = input.files[0];
        const div = document.getElementById("previewImage");
        div.innerHTML = `<img alt=${file.name} width="100px" height="100px" src=${URL.createObjectURL(file)}>`;
    }
}

// декілька файлів
function selectFiles(event) {
    const input = event.target;
    if (input.files) {
        const div = document.getElementById("previewImage");
        div.innerHTML = "";
        for (const file of input.files) {
            div.innerHTML += `<img alt=${file.name} width="100px" height="100px" src=${URL.createObjectURL(file)}>`;
        }
    }
}

function createFigure(event) {
    event.preventDefault();
    const form = event.target;
    const width = parseInt(form["width"].value);
    const height = parseInt(form["height"].value);
    const color = form["color"].value;
    const figure = form["figure"].value;
    const div = document.getElementById("figures");

    if (figure === "rect") {
        div.innerHTML += `
    <div style="display: inline-block; width: ${width}px; height: ${height}px; background-color: ${color};"></div>`;
    } else if (figure === "circle") {
        div.innerHTML += `
    <div style="display: inline-block; width: ${width}px; height: ${height}px; background-color: ${color}; border-radius: 50%;"></div>`;
    } else if (figure === "triangle") {
        div.innerHTML += `
     <div style="display: inline-block; width: 0; height: 0; border-style: solid; border-width: 0px ${width / 2}px ${height}px ${width / 2}px; border-color: transparent transparent ${color} transparent;"></div>`;
    }
}
