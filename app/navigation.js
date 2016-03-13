var navigation = (function()
{
    // private
    function setHeadNavigation(activeTabNummer)
    {
        var response = {};
        try{
            console.log('Navigation');
            response.message = true;

            return response;
        }
        catch(e){
            response.error = true;

            return response;
        }
    }

    function setInfoBlock(activeTabNummer)
    {
        var response = {};
        try{
            console.log('Info');

            // Fehler
            sadasasda();

            response.message = true;

            return response;
        }
        catch(e){
            response.error = true;

            return response;
        }
    }

    // public
    return{
        setTabNummer: function(activeTabNummer)
        {
            async.parallel([
                    function(callback) {
                        var response = setHeadNavigation(activeTabNummer);
                        if(response.message)
                            callback(null, true);
                        else
                            callback(true, null);
                    },
                    function(callback) {
                        var response = setInfoBlock(activeTabNummer);

                        if(response.message)
                            callback(null, true);
                        else
                            callback(true, null);
                    }],
                // Callback
                function(err, res){
                    if(err){
                        var message = 'Fehler in den Tabs';
                        $("#fehler").html(message);
                    }


                }
            );
        }
    }
})();
