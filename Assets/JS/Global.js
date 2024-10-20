// Functions:

function ADD_Favicon()
{

    let favicon = document.createElement("link");

    favicon.setAttribute("rel", "icon");

    favicon.setAttribute("type", "image/x-icon");

    favicon.setAttribute("sizes", "512x512");

    favicon.setAttribute("href", (window.location.pathname.split("/").pop() === "Index.html") ? "./Assets/Images/Favicon.png" : "../Assets/Images/Favicon.png");

    document.head.appendChild(favicon);

}

// Events:

window.onload = function() {

    ADD_Favicon();

}