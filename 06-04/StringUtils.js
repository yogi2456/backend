const capitalString = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const reverseString = (str) => str.split("").reverse().join("")


module.exports = {capitalString, reverseString}