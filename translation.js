// 1830 edition 2 Nephi 7-8  (Deutero-Isaiah)
var scripture = "yea for thus saith the lord have I put thee away or have I cast thee off forever for thus saith the lord where is the bill of your mother's divorcement to whom have I put thee away or to which of my creditors have I sold you yea to whom have I sold you behold for your iniquities have ye sold yourselves and for your transgressions is your mother put away wherefore when I come there was no man when I called yea there was none to answer o house of israel is my hand shortened at all that it cannot redeem or have I no power to deliver behold at my rebuke I dry up the sea I make their rivers a wilderness and their fish to stink because the waters are dried up and they die because of thirst I clothe the heavens with blackness and I make sackcloth their covering the lord god hath given me the tongue of the learned that I should know how to speak a word in season unto thee o house of israel when ye are weary he waketh morning by morning he waketh mine ear to hear as the learned the lord god hath appointed mine ear and I was not rebellious neither turned away back I gave my back to the smiter and my cheeks to them that plucked off the hair I hid not my face from shame and spitting for the lord god will help me therefore shall I not be confounded therefore have I set my face like a flint and I know that I shall not be ashamed and the lord is near and he justifieth me who will contend with me let us stand together who is mine adversary let him come near me and I will smite him with the strength of my mouth for the lord god will help me and all they which shall condemn me behold all they shall wax old as a garment and the moth shall eat them up who is among you that feareth the lord that obeyeth the voice of his servant that walketh in darkness and hath no light behold all ye that kindleth fire that compass yourselves about with sparks walk in the light of your fire and in the sparks which ye have kindled this shall ye have of mine hand ye shall lie down in sorrowchapter hearken unto me ye that follow after righteousness look unto the rock from whence ye are hewn and the hole of the pit from whence ye are digged look unto abraham your father and unto sarah she that bare you for I called him alone and blessed him for the lord shall comfort zion he will comfort all her waste places and he will make her wilderness like eden and her desert like the garden of the lord joy and gladness shall be found therein thanksgiving and the voice of melody hearken unto me my people and give ear unto me o my nation for a law shall proceed from me and I will make my judgment to rest for a light thing of the people my righteousness is near my salvation is gone forth and mine arm shall judge the people the isles shall wait upon me and on mine arm shall they trust lift up your eyes to the heavens and look upon the earth beneath for the heavens shall vanish away like smoke and the earth shall wax old like a garment and they that dwell therein shall die in like manner but my salvation shall be forever and my righteousness shall not be abolished hearken unto me ye that know righteousness the people in whose heart I have written my law fear ye not the reproach of men neither be ye afraid of their revilings for the moth shall eat them up like a garment and the worm shall eat them like wool but my righteousness shall be forever and my salvation from generation to generation awake awake put on strength o arm of the lord awake as in the ancient days art thou not it that hath cut rahab and wounded the dragon art thou not it which hath dried the sea the waters of the great deep that hath made the depths of the sea a way for the ransomed to pass over therefore the redeemed of the lord shall return and come with singing unto zion and everlasting joy and holiness shall be upon their heads and they shall obtain gladness and joy sorrowing and mourning shall flee away I am he yea I am he that comforteth you behold who art thou that thou shouldst be afraid of man which shall die and of the son of man which shall be made like unto grass and forgetest the lord thy maker that hath stretched forth the heavens and laid the foundations of the earth and hast feared continually every day because of the fury of the oppressor as if he were ready to destroy and where is the fury of the oppressor the captive exile hasteneth that he may be loosed and that he should not die in the pit nor that his bread should fail but I am the lord thy god whose waves roared the lord of hosts is my name and I have put my words in thy mouth and hath covered thee in the shadow of mine hand that I may plant the heavens and lay the foundations of the earth and say unto zion behold thou art my people awake awake stand up o jerusalem which hast drunk at the hand of the lord the cup of his fury thou hast drunken the dregs of the cup of trembling rung out and none to guide her among all the sons she hath brought forth neither that taketh her by the hand of all the sons she hath brought up these two sons are come unto thee who shall be sorry for thee thy desolation and destruction and the famine and the sword and by whom shall I comfort thee thy sons have fainted save these two they lie at the heads of all the streets as a wild bull in a net they are full of the fury of the lord the rebuke of thy god therefore hear now this thou afflicted and drunken and not with wine thus saith thy lord the lord and thy god pleadeth the cause of his people behold I have taken out of thine hand the cup of trembling the dregs of the cup of my fury thou shalt no more drink it again but I will put it into the hand of them that afflict thee which I said to thy soul bow down that we may go over and thou hast laid thy body as the ground and as the street to them that went over awake awake put on thy strength o zion put on thy beautiful garments o jerusalem the holy city for henceforth there shall no more come into thee the uncircumcised and the unclean shake thyself from the dust arise sit down o jerusalem loose thyself from the bands of thy neck o captive daughter of zion";

var msgIdx = 0;
var bootUpMsgs = [
    {msg:"Scrying BOIS v6.65",delay:1600},
    {msg:"System check",delay:600},
    {msg:"System check.",delay:600},
    {msg:"System check..",delay:600},
    {msg:"System check...",delay:600},
    {msg:"Display type: Rock",delay:2000},
    {msg:"Establishing connection to concealed golden plates",delay:1100},
    {msg:"Establishing connection to concealed golden plates.",delay:1100},
    {msg:"Establishing connection to concealed golden plates..",delay:1100},
    {msg:"Establishing connection to concealed golden plates...",delay:1600},
    {msg:"Connection Established.",delay:1700},
    {msg:"Sacred handshake complete.",delay:2500},
    {msg:"Error correction mode: Enabled",delay:3000},
    {msg:"Ready.<p/>Shake or press stone and begin dictation.",delay:700}
];


var tokenizeRevelation = null;
var tokenizedIdx = 0;
var maxChunkLen = 50;

var numReformedChars = 21;
var reformedCharWidth = 100;
var currReformedIdx = 0;

var inputEnabled = false;

function getNextChurck() {
    var str = "";
    if (tokenizeRevelation == null) tokenizeRevelation = scripture.split(" ");

    var currLen = 0;
    while (currLen < maxChunkLen) {
        if (tokenizedIdx >= tokenizeRevelation.length) return "";
        var nextWord = tokenizeRevelation[tokenizedIdx];
        if ((str.length + nextWord.length + 1) <= maxChunkLen) {
            str += " " + nextWord
            tokenizedIdx++;
            continue;
        }
        break;
    }
    return str;
}

function showNextPhrase() {
    $("#revelation").delay(400).fadeOut("slow", function () {
        if (currReformedIdx >= numReformedChars) currReformedIdx = 0;
        var offset = -(reformedCharWidth * currReformedIdx);
        var offsetStr = '' + offset + 'px 0px';
        $("#reformed_egyptian").css('background-position', offsetStr);
        currReformedIdx++;
        var nextChunk = getNextChurck();
        $("#englishText").html(nextChunk);
        $("#revelation").delay(400).fadeIn("slow");
    });
}

$('#rockContainer').click(function () {
    if(!inputEnabled)
        return;
    showNextPhrase();
});


function enableInput()
{
    inputEnabled = true;
    var shakeEvent = new Shake({threshold: 1});
    shakeEvent.start();
    window.addEventListener('shake', function () {
        showNextPhrase();
    }, false);
    //if(!("ondevicemotion" in window)){alert("Not Supported");}
}

function bootUp()
{    
    if(msgIdx >= bootUpMsgs.length)
    {
        enableInput();
        return;    
    }   
       
    $("#revelation").fadeOut(0, function() {
       $("#englishText").html(bootUpMsgs[msgIdx].msg);       
       $("#revelation").fadeIn(0).delay(bootUpMsgs[msgIdx].delay);
       msgIdx += 1;
       bootUp();
    });    
}


$(document).ready(function() {   
    bootUp(0);
});

