
$(document).ready(function () {
    console.log("ready!");
    renderPersonList();
});


var dbname = "gmci";
var dburl = "http://127.0.0.1:5984/" + dbname + "/";


function renderPersonList(){
    loadBasicDocuments().then( (data) => renderPersons(data));    
}

function renderPersons(data){
    console.log(data);
    let persons = data.persons;
    console.log(persons);

    let context = "";

    for(let i = 0; i < persons.length; i++){
        let person = persons[i];
        
        let container =
        "<div class=\"person\">" +
            "<p class=\"personText\">" + person.Name + "</p>"+
            "<p class=\"fragenText\">" + person.Fragen[0].Frage + "</p>"+
            "<p class=\"antwortText\">" + person.Fragen[0].Antwort + "</p>"+
            "<img class=\"personPicture\" src=\"persons/" + person.Name + "/" + person.Foto +  "\"/>"
        "</div>";

        context += container;
    }
    console.log(context);
    document.getElementById("personcontainer").innerHTML = context;
}
