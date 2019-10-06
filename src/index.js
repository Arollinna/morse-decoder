const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var res = "";
    for (var i=0; i<expr.length; i+=10) {
        var tmp=expr.substr(i,10);
        if (tmp[0]==="*") {
            res+= " ";
        } else {
            var trailEnd = tmp.indexOf("1");
            tmp=tmp.substr(trailEnd);
            
            var morseTmp = "";
            for (var j=0; j<tmp.length;j+=2) {
                morseTmp+=decodeChar(tmp.substr(j,2));
            } 
            res+=MORSE_TABLE[morseTmp]; 
        }
    } 
    return res;
}

function decodeChar(char) {
    if (char==="10") {
        return ".";
    } else if (char==="11") {
        return "-";
    } 
    return "";
}

module.exports = {
    decode
}
