console.log("app");

jQuery(document).ready(function($) {

    var grammar = tracery.createGrammar(input);

    function loadGrammar() {
        jQuery("#generate").prop("disabled", true);
        jQuery("#generate i").addClass('fa-spin');

        jQuery("#output").html("<div class=\"loading col text-center mt-5\"><i class=\"fas fa-3x fa-spinner fa-spin\"></i></div>");

        //jQuery("#grammar").html(grammar.toText());
        var gender = null;

        if(Math.random() > 0.5) {
            gender = "female";
        } else {
            gender = "male";
        }

        if(gender == "male") {
            var s = grammar.flatten("#origin-male#");
        } else {
            var s = grammar.flatten("#origin-female#");
        }

        //console.log(s);
        var div = jQuery("<div/>", {
            class : "outputSample",
            html : s
        });

        var avatar = (function () {
            var json = null;
            jQuery.ajax({
                'async': false,
                'global': false,
                'url': 'https://randomuser.me/api/?gender=' + gender,
                'dataType': "json",
                'success': function (data) {
                    json = data.results[0].picture.large;
                }
            });
            return json;
        })(); 

        jQuery("#output").html("");
        jQuery("#output").append(div);
        jQuery("#output img").attr("src", avatar);

        jQuery("#generate i").removeClass('fa-spin');
        jQuery("#generate").prop("disabled", false);
    }

    setTimeout(function() {
        loadGrammar();

    }, 10);

    jQuery('#survey').tooltip({ offset: 10 });

    jQuery('#generate').click(function() {
        loadGrammar();
    });
});
