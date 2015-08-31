// Bootstrap Tabs / Tab Panels coordination
$("a[data-tab-destination]").on('click', function() {
        var tab = $(this).attr('data-tab-destination');
        $("#"+tab).click();
    });

// scripts for DataTables Events, People, Places and Relationships
$(document).ready(function(){
    $('#tblEvents').DataTable();
});

$(document).ready(function(){
    $('#tblPeople').DataTable();
});

$(document).ready(function(){
    $('#tblPlaces').DataTable();
});

$(document).ready(function(){
    $('#tblRel').DataTable();
});