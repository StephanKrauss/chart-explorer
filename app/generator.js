var generator = (function()
{
    // Objects
    var objGridGenerator = null;
    var objChartGenerator = null;

    // private
    var dataCsv = null;
    var dataArray = null;
    var dataJson = null;

    var categories = new Array();


    var lineEnd = "\n";
    var separator = ";";


    function csvConvert()
    {
        var response = {};

        var lines = dataCsv.split(lineEnd);

        var result = [];

        var headers = lines[0].split(separator);
        categories = lines[0].split(separator);

        for(var i = 1;i < lines.length; i++){

            var obj = {};
            var currentline = lines[i].split(separator);

            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }

            result.push(obj);
        }

        dataArray = result; //JavaScript object
        dataJson = JSON.stringify(result); //JSON

        return response;
    }

    // public
    return{
        setCsvData: function(inputCsv)
        {
            dataCsv = null;
            dataArray = null;
            dataJson = null;

            dataCsv = inputCsv;

            return this;
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
        generateTableAndChart: function()
        {
            async.series([
                function(callback)
                {
                    var response = csvConvert();
                    if(response.err)
                        callback(true, response.message);
                    else
                        callback(false, null);

                    return;
                },
                function(callback)
                {
                    var response = objGridGenerator.setData(dataJson).generate().getResponse();
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