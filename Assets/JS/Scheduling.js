// Constants and Variables:

const get_variables = new URLSearchParams(window.location.search);

const rooms = [

    {name: "Auditório 01", number: "115"}, {name: "Auditório 02", number: "?"}, {name: "Auditório 03", number: "?"},
    {name: "Laboratório 01", number: "116"}, {name: "Laboratório 02", number: "114"}, {name: "Laboratório 03", number: "?"},
    {name: "Laboratório 04", number: "216"}, {name: "Laboratório 05", number: "214"}, {name: "Laboratório 06", number: "212"}

];

const times = {

    morning: ["07:45", "08:35", "09:30", "10:20", "11:20", "12:10", "13:00"],

    night: ["17:20", "18:10", "19:00", "19:50", "20:50", "21:40", "22:30"]

}

// Functions:

function Add_Rooms()
{

    let rooms_inserts = "";

    for(let i = 0; i < rooms.length; i++)
    {

        rooms_inserts = rooms_inserts.concat(`<option value="${i}"${(get_variables.get("room") === rooms[i].name) ? " selected" : ""}> ${rooms[i].name} (${rooms[i].number}) </option>`);

    }

    document.getElementById("room").innerHTML = rooms_inserts;

}

function Add_Times()
{

    let start_times = "";

    let end_times = "";

    const times_list = (document.getElementById("period").value === "morning") ? times.morning : times.night;

    for(let i = 0; i < times_list.length - 1; i++)
    {

        start_times = start_times.concat(`<option value="${times_list[i]}"> ${times_list[i]} </option>`);

        end_times = end_times.concat(`<option value="${times_list[i + 1]}"> ${times_list[i + 1]} </option>`);

    }

    document.getElementById("start-time").innerHTML = "".concat(start_times);

    document.getElementById("end-time").innerHTML = "".concat(end_times);

}

// Events:

window.addEventListener("load", function() {

    Add_Rooms();

    Add_Times();

});

document.querySelector("div").querySelectorAll("input").forEach(element => {

    if(element.type === "radio")
    {

        element.onchange = function() {

            document.getElementById("period").value = element.value;
    
            Add_Times();
    
        };

    }

});