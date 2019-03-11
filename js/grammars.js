
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
    "origin-male": [ "#[heroName:#maleName#][heroSurname:#surname#][pronounHe:he][pronounHis:his][heroProfession:#profession#]story#" ],
    "origin-female": [ "#[heroName:#femaleName#][heroSurname:#surname#][pronounHe:she][pronounHis:her][heroProfession:#profession#]story#" ],
    "story": [ "#avatar##body##overall#" ],
    "avatar": [ "<div class=\"row mb-4\"><div class=\"col-3\"><img class=\"avatar\" src=\"https://miro.medium.com/fit/c/240/240/1*lwkv9EOqIU3Q_NGuTc1C9Q@2x.jpeg\"></div><div class=\"col-9\"><h3>#heroName# #heroSurname#, <small>#heroProfession#</small></h3><p>@#username#</p></div></div>" ],
    "body": [ "<p><strong>#heroName# #heroSurname#</strong> is a #skillLevel# #heroProfession# living in #place#. #pronounHe.capitalize#'s #age# years old.</p>#storyPatternNumber#<p><strong>Personality:</strong> #heroName# is #positiveTrait#, #positiveTrait# and #positiveTrait#. #pronounHe.capitalize#'s #repetitive# #negativeTrait#.</p>" ],
    "storyPatternNumber": [ "<p>#storyPattern#</p>", "<p>#storyPattern#</p><p>#storyPattern#</p>", "<p>#storyPattern#</p><p>#storyPattern#</p><p>#storyPattern#</p>", "<p>#storyPattern#</p><p>#storyPattern#</p><p>#storyPattern#</p>" ],
    "maleName": maleNames,
    "femaleName": [ "Anna", "Bianca", "Theresa", "Kate", "Laura" ],
    "surname": surnames,
    "profession": professions,
    "repetitive": [ "often", "sometimes", "rarely", "usually" ],
    "overall": [ "<p>Overall, a cool person you would like to #personSummaryDescription#.</p>" ],
    "personSummaryDescription": [ "work with", "meet", "meet for coffee", "network with", "befriend", "get to know better", "add as a friend on Twitter" ],
    "skillLevel": [ "beginner", "adept", "competent", "struggling", "expert" ],
    "age": [ "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42" ],
    "positiveTrait": [ "energetic", "creative", "outgoing", "thourough", "positive", "optimistic", "happy", "smart", "sophisticated", "charismatic" ],
    "negativeTrait": [ "lazy", "selfish", "quarrelsome", "egotisitical", "pessimistic" ],
    "username": [ "#weirdWord#", "#usernamePrefix.capitalize##heroName#_#usernameWord#", "#usernamePrefix.capitalize##heroName##heroSurname##usernameWord.capitalize#" ],
    "usernameWord": [ "theGreat", "UX", "designer", "usability", "design", "wireframes", "monkey" ],
    "usernamePrefix": [ "", "", "", "", "", "galaxy", "laser", "space", "rogue", "prototyping", "happy" ],
    "weirdWord": [ "Bumfuzzle", "UltraLaser", "DrDoom", "MasterOfDisaster", "Cattywampus", "Gardyloo", "Taradiddle", "Snickersnee", "Widdershins", "Collywobbles", "Gubbins", "Abibliophobia", "Bumbershoot",
        "Lollygag", "Flibbertigibbet", "Malarkey", "Pandiculation", "Sialoquent", "Wabbit", "Snollygoster", "Erinaceous", "Quire", "Ratoon", "Xertz", "Zoanthropy",
        "Pauciloquent", "Bloviate", "Brouhaha", "Absquatulate", "Comeuppance", "Nincompoop" ],
    "place": [ "Budapest, Hungary", "Warsaw, Poland", "Paris, France", "London, UK", "Rome, Italy", "Athens, Greece" ],
    "storyPattern": [ "#storyPatternStruggle#", "#storyPatternCreation#", "#storyPatternBlog#" ],
    "storyPatternStruggle": [ "#pronounHe.capitalize# used to struggle with #ux-skill# #timeInPast#. One day, #pronounHe# discovered new tools and read some articles and decided to improve #pronounHis# workflow. #pronounHe.capitalize# worked hard to achieve success, until finally #pronounHe# managed to optimise #pronounHis# workflow." ],
    "ux-skill": [ "wireframing", "prototyping", "user research", "persona creation", "data analysis", "visual design" ],
    "storyPatternCreation": [ "#pronounHe.capitalize#'s created #objectQuality.a# #mediumType# #timeInPast#. It was very well received by #audienceTemplate#. #pronounHe.capitalize# was awarded the Best New Designer award for it." ],
    "timeInPast": [ "in the past", "two years ago", "three years ago", "four years ago", "five years ago" ],
    "mediumType": [ "mobile app", "website", "application", "desktop app" ],
    "audienceTemplate": [ "#audience#", "#audience# and #audience#" ],
    "audience": [ "web designers", "other UX designers", "the Norman Nielsen Group", "the Twitter community", "UX publications", "bloggers", "designers", "the Dribbble community" ],
    "objectQuality": [ "great-looking", "very usable", "well designed", "awesome", "cool" ],
    "storyPatternBlog": [ "#heroName# runs a blog on #blogPlatform# where #pronounHe# shares #pronounHis# ideas about #mediumType.s#. #pronounHis.capitalize# posts gather a large audience of more than #number#K #profession.s#." ],
    "number": [ "#digit#", "#digit##digit#", "#digit##digit##digit#" ],
    "digit": [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ],
    "blogPlatform": [ "Medium", "BlogSpot", "WordPress.com", "ghost.org", "GitHub", "Facebook" ]
};
