$emotes =
[
    "(ᵘʷᵘ)",
    "(ᵘﻌᵘ)",
    "(◡ ω ◡)",
    "(◡ ꒳ ◡)",
    "(◡ w ◡)",
    "(◡ ሠ ◡)",
    "(˘ω˘)",
    "(⑅˘꒳˘)",
    "(˘ᵕ˘)",
    "(˘ሠ˘)",
    "(˘³˘)",
    "(˘ε˘)",
    "(´˘`)",
    "(´꒳`)",
    "(˘˘˘)",
    "( ᴜ ω ᴜ )",
    "( ´ω` )",
    "(„ᵕᴗᵕ„)",
    "(ㅅꈍ ˘ ꈍ)",
    "(⑅˘꒳˘)",
    "( ˘ᴗ˘ )",
    "(ᵕᴗ ᵕ⁎)",
    "(。U ω U。)",
    "(U ᵕ U❁)",
    "(U ﹏ U)",
    "(◦ᵕ ˘ ᵕ◦)",
    "ღ(U꒳Uღ)",
    "( ͡U ω ͡U )",
    "( ͡o ᵕ ͡o )",
    "( ͡o ꒳ ͡o )",
    "( ˊ.ᴗˋ )",
    "(灬´ᴗ`灬)"
];

$rules =
[
    [/(?<=(\s|^))th/g, "d" ],
    [/(?<=[\S])th/g, "f" ],
    [/([Ll]+|[Rr]+)/g, "w" ],
    [/(?<=[fF])[uU]/g, "wu" ],
    [/[cC][kK]/g, "k" ],
    [/(?<=[oO])[Uu]|(?<=[qQ])[uU]/g, "w" ],
    [/(?<=[aA])[vV](?=[eE])/g, "b" ],
    [/(?<=[\S])[.]/g, " OwO." ],
    [/[oO][vV][eE]/g, "uv" ],
    [/(?<=[pP][hH])[yY]/g, "w"]
];

$("#message").on('change keydown paste input', function(){
    $message = $("#message").val();
    $("#output").text(ReplaceAll($message));
});

function ReplaceAll($message){
    $rules.forEach($rule => {
        $message = $message.replace($rule[0], $rule[1]);
    });

    $message = Emotify($message);
    return $message;
}

function Emotify($message, $index = 0){
    if($message == ""){
        return "";
    }

    $punctuation = /(?<=[^)])(?<=[\S])[,]|(?<=[^)])(?<=[\S])[!]|(?<=[^)])(?<=[\S])[?]/
    $matchFinder = /(?<=[\S])[,]|(?<=[\S])[!]|(?<=[\S])[?]/g
    
    $matches = $message.match($matchFinder);

    if($index >= $matches.length){
        return $message;
    }

    $emote = ` ${$emotes[getRandomInt($emotes.length)]}${$matches[$index]}`;
    $message = $message.replace($punctuation, $emote);

    $index += 1;
    return Emotify($message, $index);
}

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}