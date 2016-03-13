$(document).ready(function()
{
    // Tab initialization
    $('#tabs').tabs().on('click',function(event)
    {
        $("#fehler").html(' ');
        var activeTabNummer = $( "#tabs" ).tabs( "option", "active" );
        navigation.setTabNummer(activeTabNummer);
    });

    $("#tabs").css("min-height", "600px");
});
