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

    const header = '<header>' +

                        '<nav>' +

                            '<button> <i class="bx bx-menu">  </i> </button>' +
    
                            '<div id="access">' +
    
                                `<a href="${pages_root_folder}Register.html"> Cadastro </a>` +
                                `<a href="${pages_root_folder}Login.html"> Login </a>` +
    
                            '</div>' +
    
                        '</nav>' +

                   '</header>';

    const main = document.getElementById("container").innerHTML;

    document.getElementById("container").innerHTML = header.concat(main);

}

async function ADD_Menu()
{

    const menu = '<div id="menu">' +

                    `<figure> <img src="${assets_root_folder}Assets/Images/Logo.png" alt="Logo"> </figure>` +

                    '<nav>' +

                        `<a href="${index_root_folder}Index.html"> Início </a>` +
                        `<a href="${pages_root_folder}Team.html"> Desenvolvedores </a>` +

                    '</nav>' +

                    '<button> Fechar </button>' +

                 '</div>';

    const container = document.body.innerHTML;

    document.body.innerHTML = menu.concat(container);

}

// Events:

window.onload = async function() {

    ADD_Favicon();

    const pages_without_nav = ["Login.html", "Register.html"];

    if(!pages_without_nav.includes(window.location.pathname.split("/").pop()))
    {

        ADD_Menu();

        ADD_Header();

        document.querySelector("header").querySelector("button").onclick = function() {

            document.getElementById("menu").style.transform = "translateX(0%)";
    
        };
    
        document.getElementById("menu").querySelector("button").onclick = function() {
    
            document.getElementById("menu").style.transform = "translateX(-100%)";
    
        };
        
    }

}