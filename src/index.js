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
    let result = '';
    let code = '';
    let i = 0;
    while (i < expr.length) {
        let str = expr.substr(i, 10);
        for (x = 0; x < str.length; x++) {
            if (str[x] == '1' && str[x+1] == '0') {
                code += '.';                
                x = x + 1;
            }
            else if (str[x] == '1' && str[x+1] == '1') {
                code += '-';
                x = x + 1;
            }
            else if (str[x] == '*') {
                code += ' ';
                x = x + 10;
            } 
        }
        if (code == ' ') {result += ' ';}
        else {
        result += MORSE_TABLE[code];
    }
        console.log(code);
        code = '';
        i = i + 10;
    }
    return result;
}

module.exports = {
    decode
}