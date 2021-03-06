
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

var maleNames = getRemoteData('/corpus/people/names/male-names.json');
var surnames = getRemoteData('/corpus/people/names/surnames.json');
var professions = getRemoteData('/corpus/people/professions/ux-design.json');
var citiesPoland = getRemoteData('/corpus/geography/cities/poland.json');

var input = {
    "origin-male": [ "#[heroName:#maleName#][heroSurname:#surname#][pronounHe:he][pronounHis:his][heroProfession:#profession#]story#" ],
    "origin-female": [ "#[heroName:#femaleName#][heroSurname:#surname#][pronounHe:she][pronounHis:her][heroProfession:#profession#]story#" ],
    "story": [ "#avatar##body##overall#" ],
    "avatar": [ "<div class=\"row mb-4\"><div class=\"col-12 text-center col-lg-3\"><img class=\"avatar d-none d-lg-block\" src=\"https://miro.medium.com/fit/c/240/240/1*lwkv9EOqIU3Q_NGuTc1C9Q@2x.jpeg\"><img class=\"avatar d-lg-none w-25\" src=\"https://miro.medium.com/fit/c/240/240/1*lwkv9EOqIU3Q_NGuTc1C9Q@2x.jpeg\"></div><div class=\"d-block d-lg-none col-12 mb-3\">&nbsp;</div><div class=\"col-lg-9 col-12\"><h3>#heroName# #heroSurname#, <small>#heroProfession#</small></h3><p>@#username#</p></div></div>" ],
    "body": [ "<p><strong>#heroName# #heroSurname#</strong> is #skillLevel.a# #heroProfession# living in #place#. #pronounHe.capitalize#'s #age# years old.</p>#storyPatternNumber#<p><strong>Personality:</strong> #personality#</p>" ],
    "storyPatternNumber": [ "<p>#storyPattern#</p>", "<p>#storyPattern#</p><p>#storyPattern#</p>", "<p>#storyPattern#</p><p>#storyPattern#</p><p>#storyPattern#</p>", "<p>#storyPattern#</p><p>#storyPattern#</p><p>#storyPattern#</p>", "<p>#storyPattern#</p><p>#storyPattern#</p><p>#storyPattern#</p><p>#storyPattern#</p>" ],
    "maleName": maleNames,
    "femaleName": [ "Anna", "Bianca", "Theresa", "Kate", "Laura" ],
    "surname": surnames,
    "profession": professions,
    "cityPoland": citiesPoland,
    "heOrName": [ "#pronounHe#", "#heroName#" ],
    "hisOrName": [ "#pronounHis#", "#heroName#'s" ],
    "repetitive": [ "often", "sometimes", "usually" ],
    "personality": [ "#heroName# is #personalityModifier# #positiveTrait#, #personalityModifier# #positiveTrait# and #personalityModifier# #positiveTrait#. #pronounHe.capitalize#'s #repetitive# #negativeTrait#. #heOrName.capitalize# #personalityOther#." ],
    "personalityModifier": [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "quite", "very", "a little", "extremely" ],
    "personalityOther": [ "occasionally overindulges", "isn't given to flights of fancy", "is emotionally stable", "likes to try new things", "dislikes trying new things", "is #repetitive# willing to compromise with others", "likes to work in a quiet environment", "#repetitive# listens to #musicGenre# music when #pronounHe# tries to focus" ],
    "musicGenre": [ "Hip Hop", "rock", "jazz", "pop", "instrumental", "punk", "folk", "country", "electronic dance", "classical", "emo", "dance", "inspirational", "J-pop", "Latin", "New Age" ],
    "overall": [ "<p>Overall, a cool person you would like to #personSummaryDescription#.</p>" ],
    "personSummaryDescription": [ "work with", "meet", "meet for coffee", "network with", "befriend", "get to know better", "add as a friend on Twitter" ],
    "skillLevel": [ "beginner", "adept", "competent", "struggling", "expert" ],
    "age": [ "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42" ],
    "positiveTrait": [ "modest", "intuitive", "energetic", "creative", "outgoing", "thourough", "positive", "optimistic", "happy", "smart", "sophisticated", "charismatic" ],
    "negativeTrait": [ "lazy", "selfish", "quarrelsome", "egotisitical", "pessimistic" ],
    "username": [ "#weirdWord#", "#weirdWord##heroName#", "#usernamePrefix.capitalize##heroName#_#usernameWord#", "#usernamePrefix.capitalize##heroName##heroSurname##usernameWord.capitalize#" ],
    "usernameWord": [ "theGreat", "UX", "designer", "usability", "design", "wireframes", "monkey" ],
    "usernamePrefix": [ "", "", "", "", "", "galaxy", "laser", "space", "rogue", "prototyping", "happy" ],
    "weirdWord": [ "Bumfuzzle", "UltraLaser", "DrDoom", "MasterOfDisaster", "Cattywampus", "Gardyloo", "Taradiddle", "Snickersnee", "Widdershins", "Collywobbles", "Gubbins", "Abibliophobia", "Bumbershoot",
        "Lollygag", "Flibbertigibbet", "Malarkey", "Pandiculation", "Sialoquent", "Wabbit", "Snollygoster", "Erinaceous", "Quire", "Ratoon", "Xertz", "Zoanthropy",
        "Pauciloquent", "Bloviate", "Brouhaha", "Absquatulate", "Comeuppance", "Nincompoop" ],
    "place": [ "Budapest, Hungary", "#cityPoland#, Poland", "Paris, France", "London, UK", "Rome, Italy", "Athens, Greece" ],
    "storyPattern": [ "#storyPatternStruggle#", "#storyPatternCreation#", "#storyPatternBlog#", "#storyPatternSpecialty#" ],
    "storyPatternStruggle": [ "#pronounHe.capitalize# used to struggle with #ux-skill# #timeInPast#. One day, #pronounHe# discovered new tools and read some articles and decided to improve #pronounHis# workflow. #pronounHe.capitalize# worked hard to achieve success, until finally #pronounHe# managed to optimise #pronounHis# workflow." ],
    "ux-skill": [ "wireframing", "prototyping", "user research", "persona creation", "data analysis", "visual design" ],
    "storyPatternCreation": [ "#storyPatternCreationBeginning# #objectQuality.a# #mediumType# for #userJob.s# #timeInPast#. It was very well received by #audienceTemplate#. #pronounHe.capitalize# was awarded the Best New Designer award for it." ],
    "storyPatternCreationBeginning": [ "#heOrName.capitalize# has created", "#heOrName.capitalize# is best known for creating" ],
    "timeInPast": [ "in the past", "two years ago", "three years ago", "four years ago", "five years ago" ],
    "mediumType": [ "mobile app", "website", "application", "desktop app" ],
    "userJob": [ "pet owner", "cat owner", "reader", "real estate agent", "developer", "project manager" ],
    "audienceTemplate": [ "#audience#", "#audience# and #audience#" ],
    "audience": [ "web designers", "other UX designers", "Mac users", "Windows users", "smartphone users", "the Norman Nielsen Group", "the Twitter community", "UX publications", "bloggers", "designers", "the Dribbble community" ],
    "objectQuality": [ "great-looking", "very usable", "well designed", "awesome", "cool" ],
    "storyPatternBlog": [ "#heroName# runs a blog on #blogPlatform# where #pronounHe# shares #pronounHis# ideas about #mediumType.s#. #pronounHis.capitalize# #frequency# posts gather a large audience of more than #number#K #profession.s#, who especially enjoy #objectOfJoy#." ],
    "frequency": [ "daily", "weekly", "monthly" ],
    "objectOfJoy": [ "#pronounHis# deep insights", "#pronounHis# biting remarks", "#pronounHis# on-point opinions", "#pronounHis# unique observations" ],
    "number": [ "#digit#", "#digit##digit#", "#digit##digit##digit#" ],
    "digit": [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ],
    "blogPlatform": [ "Medium", "BlogSpot", "WordPress.com", "ghost.org", "GitHub", "Facebook" ],
    "storyPatternSpecialty": [ "#heOrName.capitalize# is #skillLevel.a# #uxSpecialty# and also #skillLevel.a# #uxSpecialty#." ],
    "uxSpecialty": [ "wireframer", "prototyper", "user researcher", "generalist", "inventor", "Interaction Designer", "Sketch user", "Adobe XD user" ],
    "skillLevel": [ "exquisite", "great", "experienced", "distinguished", "highly skilled", "skilled", "master" ]
};
