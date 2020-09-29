module.exports = function toReadable(number) {
    const NUMBERS = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    function numToArr(num) {
        const arr = num.toString().split("");
        arr[0] = arr[0] + "0";
        return arr;
    }

    if (number >= 100) {
        const firstNum = number.toString().slice(0, 1);
        const secondNum = number.toString().slice(1);

        if (secondNum === "00") {
            return `${NUMBERS[firstNum]} hundred`;
        }

        if (secondNum.startsWith("0")) {
            return `${NUMBERS[firstNum]} hundred ${
                NUMBERS[secondNum.slice(1)]
            }`;
        }

        const arr = numToArr(secondNum);
        return `${NUMBERS[firstNum]} hundred ${
            NUMBERS[secondNum]
                ? NUMBERS[secondNum]
                : `${NUMBERS[arr[0]]} ${NUMBERS[arr[1]]}`
        }`;
    }

    if (number > 20) {
        const arr = numToArr(number);
        return NUMBERS[number]
            ? NUMBERS[number]
            : `${NUMBERS[arr[0]]} ${NUMBERS[arr[1]]}`;
    }

    if (number <= 20) {
        return NUMBERS[number];
    }
};
