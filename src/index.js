module.exports = function toReadable (number) {

    const onesNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const tenNums = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number < 20) {
        return onesNum[number]
    }
    if(number >= 20 && number < 100) {
        if(number % 10 === 0) {
            return tenNums[number / 10]
        } else {
            return `${tenNums[Math.floor(number / 10)]} ${onesNum[number % 10]}`;
        }
    }
    if(number % 100 === 0) {
        return `${onesNum[Math.floor(number / 100)]} hundred`
    } else if (number % 100 < 20) {
        return `${onesNum[Math.floor(number / 100)]} hundred ${onesNum[number % 100]}`
    } else if (Number.isInteger(number % 100 / 10)) {
        return `${onesNum[Math.floor(number / 100)]} hundred ${tenNums[Math.floor(number % 100 / 10)]}`
    } else if (number % 100 > 20) {
        return `${onesNum[Math.floor(number / 100)]} hundred ${tenNums[Math.floor(number % 100 / 10)]} ${onesNum[number % 10]}`
    }
}
