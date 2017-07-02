$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": 'https://raw.githubusercontent.com/Szensiker/CapsCollectorData/master/caps.txt'
    } );
} );