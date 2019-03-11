
var getRemoteData = function (url) {
    var json = null;
    jQuery.ajax({
        'async': false,
        'global': false,
        'url': url,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
}

var maleNames = getRemoteData('https://raw.githubusercontent.com/paulpela/corpus/master/people/names/male-names.json');

var surnames = getRemoteData('https://raw.githubusercontent.com/paulpela/corpus/master/people/names/surnames.json');

var professions = getRemoteData('https://raw.githubusercontent.com/paulpela/corpus/master/people/professions/ux-design.json');

var input = {
    "origin": [ "#[heroName:#maleName#][heroSurname:#surname#][pronounHe:he][heroProfession:#profession#]story#" ],
    "story": [ "#avatar##body##overall#" ],
    "avatar": [ "<div class=\"row mb-4\"><div class=\"col-3\"><img class=\"avatar\" src=\"https://miro.medium.com/fit/c/240/240/1*lwkv9EOqIU3Q_NGuTc1C9Q@2x.jpeg\"></div><div class=\"col-9\"><h3>#heroName# #heroSurname#, <small>#heroProfession#</small></h3><p>@funny_username</p></div></div>" ],
    "body": [ "<p><strong>#heroName# #heroSurname#</strong> is a beginner #heroProfession# living in Budapest, Hungary. #pronounHe.capitalize#'s 30 years old.</p><p>He used to struggle with wireframing in the past. One day he discovered new tools and read some articles and decided to improve his workflow. He worked hard to achieve success, until finally he managed to optimise X.</p><p><strong>Personality:</strong> He is energetic, smart and outgoing. He's often lazy.</p><p>#loremIpsum#</p>" ],
    "maleName": maleNames,
    "surname": surnames,
    "profession": professions,
    "overall": [ "<p>Overall, a cool person you would like to work with.</p>" ],
    "loremIpsum": [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in mauris quis odio dictum pulvinar ac ut dolor. Aliquam in tincidunt eros. Sed in dapibus turpis. Sed aliquet arcu ac sollicitudin viverra. In vel lacus eget felis laoreet vulputate. Sed placerat sem vel scelerisque varius. Donec ullamcorper consequat gravida. Morbi lobortis arcu neque, ut mattis nisl scelerisque ut. Nulla bibendum non sapien vitae ullamcorper. Nam neque augue, tincidunt nec auctor eleifend, sodales ut purus. Suspendisse a ornare lorem. Nulla facilisi. Sed sed sem elementum risus euismod efficitur et hendrerit ante." ]
};
