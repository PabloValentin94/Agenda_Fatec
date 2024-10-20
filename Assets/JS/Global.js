// Functions:

function ADD_Favicon()
{

    let favicon = document.createElement("link");

    favicon.setAttribute("rel", "icon");

    favicon.setAttribute("type", "image/x-icon");

    favicon.setAttribute("href", (window.location.pathname.split("/").pop() === "Index.html") ? "./Assets/Images/Favicon.png" : "../Assets/Images/Favicon.png");

    document.head.appendChild(favicon);

}

function ADD_Menu()
{

    const header = '<header>' +

                        '<nav>' +

                            '<div id="options">' +
    
                                '<a href="#"> Início </a>' +
    
                            '</div>' +
    
                            '<div id="access">' +
    
                                '<a href="#"> Cadastro </a>' +
                                '<a href="#"> Entrar </a>' +
    
                            '</div>' +
    
                        '</nav>' +

                    '</header>';

    const main = document.getElementById("container").innerHTML;

    document.getElementById("container").innerHTML = header.concat(main);

}

// Events:

window.onload = function() {

    ADD_Favicon();

    ADD_Menu();

}