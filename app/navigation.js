var navigation = (function()
{
    // private
    var tabNummer = 0;

    function setHeadNavigation()
    {
        var response = {};
        try{
            $(".step").removeClass('underline');

            $("#step" + tabNummer).addClass('underline');

            response.message = true;

            return response;
        }
        catch(e){
            response.error = true;

            return response;
        }
    }

    function setActiveTab()
    {
        var response = {};
        try{
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
            tabNummer = activeTabNummer;

            return this;
        },
        switchNav: function()
        {
            $("#fehler").html('');

            async.parallel([
                    function(callback) {
                        var response = setHeadNavigation();
                        if(response.message)
                            callback(null, true);
                        else
                            callback(true, null);
                    }],
                // Callback
                function(err, res){
                    if(err){
                        var message = 'Fehler in der Navigation';
                        $("#fehler").html(message);
                    }
                }
            );

            return this;
        },
        switchTab: function()
        {
            async.parallel([
                    function(callback) {
                        var response = setHeadNavigation();
                        if(response.message)
                            callback(null, true);
                        else
                            callback(true, null);
                    }],
                // Callback
                function(err, res){
                    if(err){
                        var message = 'Fehler in der Navigation';
                        $("#fehler").html(message);
                    }
                }
            );
        }
    }
})();
