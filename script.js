const lowercaseAlphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

];
const uppercaseAlphabets = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const numbers = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

function translateIt(value) {
    let inputField = value === 'decrypt' ? document.getElementById("decrypt") : document.getElementById("encrypt");
    let inputValue = inputField.value;
    let rsltFieldValue = document.getElementById("rslt");
    let letters = inputValue.split("");

    letters = letters.map((letter, index) => {
        if(uppercaseAlphabets.includes(letter)){
            if (value === 'encrypt') {
                if (letter === "Y") {
                    return "A";
                } else if (letter === "Z") {
                    return "B";
                }
                else {
                    let newIndex = (uppercaseAlphabets.indexOf(letter) + 2) % uppercaseAlphabets.length;
                    return uppercaseAlphabets[newIndex];
                }
            }
            else if (value === 'decrypt') {
                if (letter === "B") {
                    return "Z";
                } else if (letter === "B") {
                    return "Y";
                }
                else {
                    let newIndex = (uppercaseAlphabets.indexOf(letter) - 2 + uppercaseAlphabets.length) % uppercaseAlphabets.length;
                    return uppercaseAlphabets[newIndex];
                }
            }
        }
        else if (lowercaseAlphabets.includes(letter)) {
            if (value === 'encrypt') {
                
                if (letter === "y") {
                    return "a";
                } else if (letter === "z") {
                    return "b";
                }
                else {
                    let newIndex = (lowercaseAlphabets.indexOf(letter) + 2) % lowercaseAlphabets.length;
                    return lowercaseAlphabets[newIndex];
                }
            } 
            else if (value === 'decrypt') {
                if (letter === "b") {
                    return "z";
                } else if (letter === "a") {
                    return "y";
                }
                else {
                    let newIndex = (lowercaseAlphabets.indexOf(letter) - 2 + lowercaseAlphabets.length) % lowercaseAlphabets.length;
                    return lowercaseAlphabets[newIndex];
                }
            }
        } 
        else if (numbers.includes(letter)) {
            if (value === 'encrypt') {
                if (letter === "8") {
                    return "1";
                } else if (letter === "9") {
                    return "2";
                } else {
                    let newIndex = (numbers.indexOf(letter) + 2) % numbers.length;
                    return numbers[newIndex];
                }
            } else if (value === 'decrypt') {
                if (letter === "1") {
                    return "8";
                } else if (letter === "2") {
                    return "9";
                } else {
                    let newIndex = (numbers.indexOf(letter) - 2 + numbers.length) % numbers.length;
                    return numbers[newIndex];
                }
            }
        } else {
            return letter;
        }
    });

    rsltFieldValue.value = letters.join("");
}
