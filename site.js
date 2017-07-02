$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": 'https://cdn.rawgit.com/Szensiker/CapsCollectorData/8d642a04/caps.txt'
    } );
} );