// Constants and Variables:

const equipments = [

    {name: "Televisão", quantity: 2}, {name: "Computador", quantity: 30}, {name: "Monitor", quantity: 30},
    {name: "Mouse", quantity: 30}, {name: "Cabo de Rede", quantity: 30}, {name: "Estabilizador", quantity: 10},
    {name: "Mesa - Docente", quantity: 1}, {name: "Lousa", quantity: 1}, {name: "Ar-Condicionado", quantity: 2}

];

// Functions:

function Add_Equipments()
{

    let equipments_inserts = "";

    equipments.forEach(equipment => {

        equipments_inserts = equipments_inserts.concat(
            `<span class="equipment">

                <p class="equipment-name"> ${equipment.name} | ${equipment.quantity} unidade(s) </p>

            </span>`
        );

    });

    document.getElementById("equipments").innerHTML = "".concat(equipments_inserts);

}

function Modify_Header()
{

    const access = document.getElementById("access");

    access.parentNode.removeChild(access);

    document.querySelector("header").querySelector("nav").innerHTML += `<a href="#"> Agendar </a>`;

    document.querySelector("header").querySelector("button").onclick = function() {

        document.getElementById("menu").style.transform = "translateX(0%)";

    };

    document.getElementById("menu").querySelector("button").onclick = function() {

        document.getElementById("menu").style.transform = "translateX(-100%)";

    };

}

// Events:

window.addEventListener("load", function() {

    const get_variables = new URLSearchParams(window.location.search);

    document.querySelector("p").innerText = `${get_variables.get("room_name")} (${get_variables.get("room_number")})`;

    Modify_Header();

    Add_Equipments();

});