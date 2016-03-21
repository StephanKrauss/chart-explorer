var chartGenerator = (function()
{
    // private
    var chartData = null;
    var response = {};
    var graphColors = [];
    var type = null;

    // Chart
    var chart = null;
    var countElementsChart = 0;

    function generateChart()
    {
        // berechnen Breite
        var  breite = countElementsChart * 100;

        if(type == 'Pie' || type == 'Donut' || type == 'PolarArea')
            breite = 1000;

        var colors = [];

        for(var i = 0; i < 20; i++){
            var farbe = randomColor();
            colors[i] = invertColor(farbe);
        }

        var config = {
            graph: {
                orientation: 'Vertical',
                custompalette: colors
            },
            meta: {
                caption: 'Chart Explorer',
                isDownloadable: true
            },
            legend: {
                position: 'right'
            },
            dimension: {
                width: breite, // dynamisch rechnen
                top: 20,
                bottom: 20,
                left: 20,
                right: 20
            }
        };

        if(chart)
            chart.remove();

        chart = uv.chart(type, chartData, config);

        return;
    }

    function randomColor() {
        var color;
        color = Math.floor(Math.random() * 0x1000000); // integer between 0x0 and 0xFFFFFF
        color = color.toString(16);                    // convert to hex
        color = ("000000" + color).slice(-6);          // pad with leading zeros
        color = "#" + color;                           // prepend #

        return color;
    }

    function invertColor(hexTripletColor) {
        var color = hexTripletColor;
        color = color.substring(1);           // remove #
        color = parseInt(color, 16);          // convert to integer
        color = 0xFFFFFF ^ color;             // invert three bytes
        color = color.toString(16);           // convert to hex
        color = ("000000" + color).slice(-6); // pad with leading zeros
        color = "#" + color;                  // prepend #

        return color;
    }

    // public
    return{
        setData: function(data)
        {
            chartData = data;

            return this;
        },
        setCountElementeChart: function(countElements)
        {
            countElementsChart = countElements;

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
        },
        hasChart: function()
        {
            if(chart)
                return true;
            else
                return false;
        }
    }
})();
