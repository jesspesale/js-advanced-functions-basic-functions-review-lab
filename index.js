// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const  mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(symbol = "*") {
    return function(adjective = "special") {
        return `You are ${symbol}${adjective}${symbol}!`
}
}

const Calculator = {
    add: function add(a, b) {
        return a + b
    },
    subtract: function subtract(a, b) {
        return a - b
    },
    multiply: function multiply(a,b) {
        return a * b
    },
    divide: function divide(a, b) {
        return a / b
    }
}

function actionApplyer (integer, array) {

    for (var i = 0; i < array.length; i++) {
        integer = array[i](integer)
    }
    return integer
}

