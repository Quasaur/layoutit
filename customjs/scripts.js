// Bootstrap Tabs / Tab Panels coordination
$("a[data-tab-destination]").on('click', function() {
        var tab = $(this).attr('data-tab-destination');
        $("#"+tab).click();
    });

// script for DataTables
$(document).ready(function(){
    $('#tblEvents').DataTable();
});