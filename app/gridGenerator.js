var gridGenerator = (function()
{
    // private
    var gridData = null;
    var response = {};

    // public
    return{
        setData: function(data)
        {
            gridData = data;

            return this;
        },
        generate: function()
        {
            try{
                // abgreifen Block
                var template = $('#quickstart').html();

                // kompilieren Block
                var compile = Handlebars.compile(template);

                // umwandeln in ein Objekt
                var grid = JSON.parse(gridData);

                var tabelle = {
                    data: grid
                };

                // kompilieren
                var output = compile(tabelle);

                // Werte ins Fenster
                $("#tabelle").html(output);

                return this;
            }
            catch(e){
                response.error = true;
                response.message = 'Fehler in der Erstellung der Tabelle';
            }
        },
        getResponse: function(){
            return response;
        }
    }
})();
