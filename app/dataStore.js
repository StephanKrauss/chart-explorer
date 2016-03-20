var dataStore = (function()
{
    // private
    var dataCsv = null;
    var dataObj = {};

    // Kategorien
    var categories = null;

    // ChartData
    var chartData = null;

    // Anzahl Diagramm Elemente
    var countElementsChart = 0;

    // Kontrolle
    var response = {};

    // Standard
    var lineEnd = "\n";
    var separator = ";";

    function csvConvert()
    {
        var lines = dataCsv.split(lineEnd);
        dataObj.data = [];

        var headers = lines[0].split(separator);

        // Categories
        categories = lines[0].split(separator);
        categories.shift();

        for(var i = 0;i < lines.length; i++)
        {
            var currentline = lines[i].split(separator);
            var obj = {};

            for(var j=0; j < headers.length; j++){
                obj[headers[j]] = currentline[j];
            }

            dataObj.data.push(obj);
        }

        return;
    }

    function convertChartData()
    {
        // Kategorien
        var graphdef = '{"categories": [';
        for(var i = 0; i < categories.length; i++){
            graphdef = graphdef + '"' + categories[i] + '",';
        }

        // kappen
        graphdef = graphdef.slice(0,-1);

        graphdef = graphdef + '],';

        graphdef = graphdef + '"dataset": {';

        var lines = dataCsv.split(lineEnd);


        // Kategorien der Datensaetzen
        for(var j = 0; j < categories.length; j++)
        {
            // Beginn der Kategorie
            graphdef = graphdef + '"' + categories[j] + '": [';

            for(var i = 1; i < lines.length; i++)
            {
                var currentline = lines[i].split(separator);
                graphdef = graphdef + '{"name": "' + currentline[0] + '", "value": ' + currentline[j + 1] + '},';
            }

            // kappen
            graphdef = graphdef.slice(0,-1);

            // Ende der einzelnen Kategorie
            graphdef = graphdef + '],';
        }

        // kappen
        graphdef = graphdef.slice(0,-1);
        graphdef = graphdef + '}}';

        graphdef = graphdef.replace(/(\r\n|\n|\r)/gm,"");

        chartData = JSON.parse(graphdef);

        // Anzahl Elemente
        countElementsChart = i;

        return;
    }

    // public
    return{
        setCsvData: function(data)
        {
            dataCsv = data;

            return this;
        },
        convertData: function()
        {
            csvConvert();

            return this;
        },
        chartData: function()
        {
            convertChartData();

            return this;
        },
        getDataObj: function()
        {
            return dataObj;
        },
        getCategories: function()
        {
            return categories;
        },
        getChartData: function()
        {
            return chartData;
        },
        getCountElementsChart: function()
        {
            return countElementsChart;
        },
        getResponse: function()
        {
            return categories;
        }
    }
})();
