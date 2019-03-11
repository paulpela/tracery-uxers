console.log("app");

jQuery(document).ready(function($) {
    var maleNames = (function () {
        var json = null;
        jQuery.ajax({
            'async': false,
            'global': false,
            'url': 'https://raw.githubusercontent.com/paulpela/corpus/master/people/names/male-names.json',
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })(); 

    var input = {
        "avatar": [ "<div class=\"row mb-4\"><div class=\"col-3\"><img class=\"avatar\" src=\"https://miro.medium.com/fit/c/240/240/1*lwkv9EOqIU3Q_NGuTc1C9Q@2x.jpeg\"></div><div class=\"col-9\"><h3>#maleName# Surname, <small>UX Designer</small></h3><p>@funny_username</p></div></div>" ],
        "origin": [ "#avatar#<p><strong>#maleName#</strong> is a beginner UX designer living in Budapest, Hungary. He's 30 years old. He used to struggle with wireframing in the past. One day he discovered new tools and read some articles and decided to improve his workflow. He worked hard to achieve success, until finally he managed to optimise X.</p><p><strong>Personality:</strong> He is energetic, smart and outgoing. He's often lazy.</p><p>His Twitter username is @funny_username</p><p>#loremIpsum#</p>" ],
        "maleName": maleNames,
        "loremIpsum": [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in mauris quis odio dictum pulvinar ac ut dolor. Aliquam in tincidunt eros. Sed in dapibus turpis. Sed aliquet arcu ac sollicitudin viverra. In vel lacus eget felis laoreet vulputate. Sed placerat sem vel scelerisque varius. Donec ullamcorper consequat gravida. Morbi lobortis arcu neque, ut mattis nisl scelerisque ut. Nulla bibendum non sapien vitae ullamcorper. Nam neque augue, tincidunt nec auctor eleifend, sodales ut purus. Suspendisse a ornare lorem. Nulla facilisi. Sed sed sem elementum risus euismod efficitur et hendrerit ante." ]
    };

    function loadGrammar() {
        jQuery("#output").html("");

        var grammar = tracery.createGrammar(input);
        jQuery("#grammar").html(grammar.toText());

        var s = grammar.flatten("#origin#");
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
                'url': 'https://randomuser.me/api/?gender=male',
                'dataType': "json",
                'success': function (data) {
                    json = data.results[0].picture.large;
                }
            });
            return json;
        })(); 

        jQuery("#output").append(div);
        jQuery("#output img").attr("src", avatar);


    }

    setTimeout(function() {
        loadGrammar();

    }, 10);

    jQuery('#survey').tooltip({ offset: 10 });

    jQuery('#generate').click(function() {
        $("#generate").prop("disabled", true);
        loadGrammar();
        $("#generate").prop("disabled", false);
    });
});
