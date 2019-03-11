console.log("app");

jQuery(document).ready(function($) {

    var grammar = tracery.createGrammar(input);

    function loadGrammar() {
        jQuery("#generate").prop("disabled", true);

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

        jQuery("#generate").attr("data-percent", 0);

        var timer = setInterval(function() {
            var percent = parseInt(jQuery("#generate").attr("data-percent"));
            percent += 10;
            jQuery("#generate").attr("data-percent", percent);
            // background: linear-gradient(90deg, #FFC0CB 50%, #00FFFF 50%);
            jQuery("#generate").css({ 'background': 'linear-gradient(90deg, #28a745 ' + percent + '%, #343a40 ' + percent + '%)'});

            if(percent >= 100) {
                jQuery("#generate").prop("disabled", false);
                jQuery("#generate").attr("data-percent", 0);
                clearInterval(timer);
            }
        }, 1000);
    }

    setTimeout(function() {
        loadGrammar();

    }, 10);

    jQuery('#survey').tooltip({ offset: 10 });

    jQuery('#generate').click(function() {
        loadGrammar();
    });
});
