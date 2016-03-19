var chartGenerator = (function()
{
    // private
    var chartData = null;
    var response = {};
    var graphColors = [];
    var type = null;

    // Chart
    var chart = null;

    function generateChart()
    {
        var graphdef = {
            categories : ['uvCharts'],
            dataset : {
                'uvCharts' : [
                    { name : '2009', value : 32 },
                    { name : '2010', value : 60 },
                    { name : '2011', value : 97 },
                    { name : '2012', value : 560 },
                    { name : '2013', value : 999 }
                ]
            }
        };

        var config = {
            graph: {
                orientation: 'Vertical',
                custompalette: ['#FF0066','#8A2E1A','#00E61A','#0000FF','#BF2640','#669999','#BF338C']
            },
            meta: {
                caption: 'Erkunden von Daten',
                isDownloadable: true
            },
            legend: {
                position: 'right'
            },
            dimension: {
                width: 700, // dynamisch rechnen
                top: 20,
                bottom: 20,
                left: 20,
                right: 20
            }
        };

        if(chart)
            chart.remove();

        chart = uv.chart(type, graphdef, config);

        return;
    }

    // public
    return{
        setData: function(data)
        {
            chartData = data;

            return this;
        },
        setChartType: function(chartType)
        {
            type = chartType;

            return this;
        },
        generate: function()
        {
            generateChart();

            return this;
        },
        getResponse: function()
        {
            return response;
        }
    }
})();
