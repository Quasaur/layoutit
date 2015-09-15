// Bootstrap Tabs / Tab Panels coordination
$("a[data-tab-destination]").on('click', function() {
        var tab = $(this).attr('data-tab-destination');
        $("#"+tab).click();
    });

