/*

    Diferença entre Eventos ON e addEventListener:

    Eventos ON (onclick, onload, etc.): Só permite definir uma função para um determinado evento (Causa mau funcionamento se dois scripts
                                        diferentes acessarem o evento de um mesmo elemento.).

    addEventListener (click, load, etc.): Permite definir várias funções para um mesmo evento de um elemento.

*/

// Constants and Variables:

const assets_root_folder = (window.location.pathname.split("/").pop() === "Index.html") ? "./" : "../";

const index_root_folder = (window.location.pathname.split("/").pop() === "Index.html") ? "./" : "../";

const pages_root_folder = (window.location.pathname.split("/").pop() === "Index.html") ? "./Pages/" : "./";

// Functions:

function ADD_Favicon()
{

    let favicon = document.createElement("link");

    favicon.setAttribute("rel", "icon");

    favicon.setAttribute("type", "image/x-icon");

    favicon.setAttribute("href", `${assets_root_folder}Assets/Images/Favicon.png`);

    document.head.appendChild(favicon);

}

function ADD_Header()
{

    let access = "";

    if(localStorage.getItem("usuario_agenda_fatec_logado") !== null)
    {

        access = `<a id="logout" href="${index_root_folder}Index.html"> Sair </a>`;

    }

    else
    {

        access = `<a href="${pages_root_folder}Register.html"> Cadastro </a>
                  <a href="${pages_root_folder}Login.html"> Login </a>`;

    }

    const header = `<header>

                         <nav>

                             <button> <i class="bx bx-menu">  </i> </button>
    
                             <div id="access">
                        
                                ${access}
                        
                             </div>
    
                         </nav>

                    </header>`;

    const main = document.getElementById("container").innerHTML;

    document.getElementById("container").innerHTML = header.concat(main);

    if(localStorage.getItem("usuario_agenda_fatec_logado") !== null)
    {

        document.getElementById("logout").addEventListener("click", function() {

            localStorage.clear();

            window.location.href = `${index_root_folder}Index.html`;

        });

    }

}

function ADD_Menu()
{

    const menu = `<div id="blocker">

                     <div id="menu">

                        <figure> <img src="${assets_root_folder}Assets/Images/Logo.png" alt="Logo"> </figure>

                        <button> Fechar </button>

                        <nav>

                            <a href="${index_root_folder}Index.html"> Início </a>
                            <a href="${pages_root_folder}Rooms.html"> Salas </a>
                            <a href="${pages_root_folder}Team.html"> Desenvolvedores </a>

                        </nav>

                     </div>

                  </div>`;

    const container = document.body.innerHTML;

    document.body.innerHTML = menu.concat(container);

}

function ADD_Menu_Events()
{

    document.querySelector("header").querySelector("button").onclick = function() {

        document.getElementById("blocker").style.transform = "translateX(0%)";

    };

    document.getElementById("menu").querySelector("button").onclick = function() {

        document.getElementById("blocker").style.transform = "translateX(-100%)";

    };

}

// Events:

window.addEventListener("load", function() {

    ADD_Favicon();

    const pages_without_nav = ["Login.html", "Register.html", "Scheduling.html"];

    if(!pages_without_nav.includes(window.location.pathname.split("/").pop()))
    {

        ADD_Menu();

        ADD_Header();

        ADD_Menu_Events();
        
    }

});