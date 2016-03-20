var control = (function()
{
    // Objects
    var objGridGenerator = null;
    var objChartGenerator = null;
    var objDataStore = null;
    var chartType = 'Line';

    var data = null;

    // public
    return{
        setData: function(csv)
        {
            data = csv;

            return this;
        },
        setChartType: function(type)
        {
            chartType = type;

            return  this;
        },
        setTableGenerator: function(gridGenerator)
        {
            objGridGenerator = gridGenerator;

            return this;
        },
        setChartGenerator: function(chartGenerator)
        {
            objChartGenerator = chartGenerator;

            return this;
        },
        setDataStore: function(dataStore)
        {
            objDataStore = dataStore;
        },
        generateTableAndChart: function()
        {
            async.series([
                // Daten
                function(callback)
                {
                    dataStore.setCsvData(data);
                    response = dataStore.convertData().chartData().getResponse();

                    if(response.err)
                        callback(true, response.message);
                    else
                        callback(false, null);

                    return;
                },
                // Tabelle
                function(callback)
                {
                    var response = objGridGenerator.setData(dataStore.getDataObj()).generate().getResponse();
                    if(response.err)
                        callback(true, response.message);
                    else
                        callback(false, null);

                    return;
                },
                // Diagramm
                function(callback)
                {
                    var response = objChartGenerator
                        .setData(dataStore.getChartData())
                        .setChartType(chartType)
                        .setCountElementeChart(dataStore.getCountElementsChart())
                        .generate()
                        .getResponse();

                    if(response.err)
                        callback(true, response.message);
                    else
                        callback(false, null);

                    return;
                }
                ],
                function(err, message){
                    if(err){
                        $("#fehler").html(message);
                    }

                }
            );

            return this;
        }
    }
})();

/*** allgemeine Steuerung **/

$(document).ready(function()
{
    // Helper für Tabelle
    Handlebars.registerHelper('tabelle', function(colsObj, index)
    {
        var row = '';

        row += '<tr>';

        for (var key in colsObj) {
            if(index > 0)
                row += '<td>' + colsObj[key] + '</td>';
            else
                row += '<th>' + colsObj[key] + '</th>';
        }

        row += '</tr>';

        return row;
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
    $("#tabs").css({
        'min-height': '700px',
        'overflow': 'auto'
    });

    // Grid und Chart
    $("#uebernahme").on('click',function()
    {
        var inputCsv = $("#daten").val();
        control.setData(inputCsv).setTableGenerator(gridGenerator).setChartGenerator(chartGenerator).setChartType('Line').generateTableAndChart();

        $('#tabs').tabs("option","active",3);
    });

    // Chart ändern
    $('#chartType').on('change', function()
    {
        chartGenerator.setChartType(this.value).generate();
    });
});