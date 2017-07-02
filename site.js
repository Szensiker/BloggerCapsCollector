$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": "https://raw.githubusercontent.com/Szensiker/CapsCollectorData/master/caps.txt",
        "columns": [
            { 
                "data": function(data){ return "<img src='" + data["image"] +"' height='100' width='100'>"; },
                "width" : "84px"     
            },
            { "data": "beer_name" },
            { "data": "country" },
            { "data": "colours" }
        ]
    } );
} );