var revelations = [
    "His Dudeness, Duder, El Duderino, or Deutero Isaiah",
    "If your son asks for bread, will give him a stone?",
    "Wherefore, I the Lord...",
    "For verily the voice of the Lord is unto all men",
    "No",
    "not pertinent to salvation",
    "Tapirs",
    "Lie for me",
    "Doubt your doubts",
    "That's an anti-mormon lie",
    "Obedience is the first law",
    "Thus saith the Lord unto you my servant Joseph",
    "The church is true",
    "Rename the church",
    "And it came to past...",
    "We always taught that.",
    "Translate does not mean translate",
    "It was a catalyst.",
    "Follow the prophet",
    "Let's skip to Mosiah",
    "I'm tired, just copy the Bible",
    "And it came to pass",
    "Charles Anthon can't read this",
    "Wherefore it came to pass",
    "I don't know that we teach that",
    "Behold, I am God and have spoken it",
    "The note has been noted.",
    "Wherefore or Therfore?",
    "White and delightsome",
    "For it came to pass",
    "Truth abideth forever and ever. Amen.",
    "Use that story from your youth",
    "Just copy your father's dream",
    "Put in errors to test faith",
    "Millions of dead Jaredites...",
    "Indians are the literal descendants of Abraham",
    "Behold, and lo, I am the Lord thy God",
    "Change my words, they're eternal",
    "Shiz!",
    "Plural marriage is necessary for exaltation.",
    "And again, verily I say unto you",
    "Just copy out of Isaiah",
    "There are no red headed angels",
    "I give unto you this commandment...",
    "For I am no respecter of persons",
    "Abraham is Osiris",
    "prepare my chariots...",
    "Speculate about Zelph",
    "Horses, cattle, oxen, and donkeys",
    "goats and wild goats",
    "...except in times of famine.",
    "sheep, swine and elephants",
    "Barley and Wheat",
    "Buy that property",
    "You shall pretend to no other gift",
    "For God did then changth the DNA",
    "Marry that girl",
    "Send that man away on a mission",
    "Silk Chariots with Cimeters",
    "He cannot commit adultery for they are given unto him",
    "We'll need steel, lots of steel",
    "Honey Bees",
    "Predict a Civil War",
    "Non-round metal in denominations used for trade",
    "The treasure is that way -->",
    "Urim and Thummim?",
    "Why would our Heavenly Father do that to anyone?",
    "She has committed adultery, and shall be destroyed",
    "Battery low. Charge in hat.",
    "Drink your Ovaltine",
    "Literal descendants of Abraham",
    "Do it for the widows",
    "Meat commerce",
    "Skin of blackness",
    "Don't eat meat",
    "Wheelless chariots",
    "packed with tapir meat",
    "dragged by slaves",
    "the borders of the Lamanites",
    "Begin translation from the other scroll",
    "The tumbaga plates",
    "Build a mall",
    "Flirt with Sylvia Sessions",
    "Start a bank",
    "Behold, I am Alpha and Omega. Amen.",
    "Cattle",
    "Polygamy is not polygamy",
    "Roaming fees apply",
    "Look! Parallels from antiquity!",
    "7000 year temporal existence",
    "Toucheth not thy little factory",
    "No hot drinks",
    "Nothing is written in stone",
    "Curelom. That's spelled c-u-r-e-l-o-m",
    "Stay away from Sunstone",
    "Windows would be dashed to pieces",
    "Hyrum's stone is of the devil",
    "Some things that are true are not very useful",
    "The blessings might be fulfilled in the next life",
    "Gift of the rod is a gift from God",
    "Sell the canadian copyright",
    "Terms and conditions may apply",
    "people fall away due to transgression."];

var revIdx = 0;
var shakeTime = 2000;
var revealTimer = 0;

function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


result = function () {    
    if (revIdx >= revelations.length) {
        revIdx = 0;
        shuffle(revelations);
    }
    $("#revelation").html(revelations[revIdx]);
    $("#revelation").fadeIn("slow").delay(2200).fadeOut("slow");
    revIdx++;
}





$(document).ready(function () {
    $("#revelation").fadeOut(0);
    $("#instructions").fadeOut(0);    
    shuffle(revelations);
    $("#stone").delay(1100).animate({"height": "130px"}, "slow");
    $("#revelation").delay(2000).fadeIn("slow");
    $("#instructions").delay(10000).fadeIn("slow").delay(9000).fadeOut("slow");

    $("#stone").click(function () {
        window.clearTimeout(revealTimer);
        $("#stone").finish() ;
        $("#revelation").finish();
        
        $("#revelation").fadeOut();
        $("#stone").effect("shake", {
            times: 6,
            direction: "up"
        }, shakeTime);
        revealTimer = window.setTimeout('result()', shakeTime - 200);
    });


    var shakeEvent = new Shake({threshold: 5});
    shakeEvent.start();
    window.addEventListener('shake', function () {
        showNextPhrase();
    }, false);
    

});
