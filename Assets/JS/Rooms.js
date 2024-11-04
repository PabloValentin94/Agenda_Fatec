// Constants and Variables:

const rooms = [

    {name: "Auditório 01", number: "115"}, {name: "Auditório 02", number: "?"}, {name: "Auditório 03", number: "?"},
    {name: "Laboratório 01", number: "116"}, {name: "Laboratório 02", number: "114"}, {name: "Laboratório 03", number: "?"},
    {name: "Laboratório 04", number: "216"}, {name: "Laboratório 05", number: "214"}, {name: "Laboratório 06", number: "212"}

];

// Functions:

function ADD_Rooms()
{

    const rooms_list = document.getElementById("rooms").innerHTML;

    let rooms_inserts = "";

    rooms.forEach(room => {

        rooms_inserts = rooms_inserts.concat(
            `<a class="room" href="./Description.html?room_name=${room.name}&room_number=${room.number}">

                <h2 class="room-name"> ${room.name} (${room.number}) </h2>

            </a>`
        );

    });

    document.getElementById("rooms").innerHTML = rooms_list.concat(rooms_inserts);

}

// Events:

window.addEventListener("load", function() {

    ADD_Rooms();

});