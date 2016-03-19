var dataStore = (function()
{
    // private
    var dataCsv = null;
    var dataObj = {};

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

        for(var i = 1;i < lines.length; i++)
        {
            var currentline = lines[i].split(separator);
            var obj = {};

            for(var j=0; j < headers.length; j++){
                obj[headers[j]] = currentline[j];
            }

            dataObj.data.push(obj);
        }

        return response;
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
            return csvConvert();
        },
        getDataObj: function()
        {
            return dataObj;
        },
        getCategories: function()
        {
            return categories;
        }
    }
})();
