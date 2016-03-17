$(document).ready(function()
{
    // Helper für Tabelle
    Handlebars.registerHelper('spalten', function(column) {
        return '<td>' + column + '</td>';
    });

    // Tabs initialisieren
    $('#tabs').tabs().on('click',function()
    {
        $("#fehler").html(' ');
        var activeTabNumber = $( "#tabs" ).tabs( "option", "active" );

        navigation.setTabNummer(activeTabNumber).switchNav();
    });

    // Header Navigation
    $(".step").on('click',function(event){
        var activeTabNumber = $(this).attr('id');
        activeTabNumber = activeTabNumber.substr(4);

        $("#tabs" ).tabs({ active: activeTabNumber});
        navigation.setTabNummer(activeTabNumber).switchNav();
    });

    // minimale Höhe Tabs
    $("#tabs").css("min-height", "700px");

    // Datenuebernahme
    $("#uebernahme").on('click',function()
    {
        var inputCsv = $("#daten").val();
        generator.setCsvData(inputCsv).setTableGenerator(gridGenerator).setChartGenerator(chartGenerator).generateTableAndChart();
    });
});
