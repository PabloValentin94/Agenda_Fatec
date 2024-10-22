// Constants and Variables:

const rooms = [

    {name: "Laboratório 04"},
    {name: "Laboratório 09"},
    {name: "Laboratório 02"},
    {name: "Laboratório 06"}

];

// Functions:

function ADD_Rooms()
{

    const rooms_list = document.getElementById("rooms").innerHTML;

    let rooms_inserts = "";

    rooms.forEach(room => {

        rooms_inserts = rooms_inserts.concat(

            '<a class="room" href="#">' +

                `<h2 class="room-name"> ${room.name} </h2>` +

            '</a>'

        );

    });

    document.getElementById("rooms").innerHTML = rooms_list.concat(rooms_inserts);

}

// Events:

window.addEventListener("load", function() {

    ADD_Rooms();

});