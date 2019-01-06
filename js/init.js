

function createDb(){
    
    $.ajax({
        url: dburl,
        type: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        success: function (data) {
            console.log("Created db successfully");
        },
        error: function (a, b, c) {
            console.log(a, b, c);
        }
    });

}