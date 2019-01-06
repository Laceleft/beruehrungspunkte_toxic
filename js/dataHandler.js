


async function loadBasicDocuments(){
   
   const result =  $.ajax({
        url: dburl + "persons",
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        success: function (data) {
            console.log("Documents loaded successfully");
            return data;
        },
        error: function (a, b, c) {
            console.log(a, b, c);
            return null;
        }
    });

    return result;
}