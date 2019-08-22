function isVaildNum(start, end) {
    var startIsInteger = Number.isInteger(start);
    var endIsInteger = Number.isInteger(end);
    if (startIsInteger == true, endIsInteger == true) {
        return true;
    }
    else {
        return "输入不是整数";
    }
}

function isStartLessEnd(start, end) {
    if (start <= end) {
        return true;
    }
    else {
        return "左边应小于右边";
    }
}

function is1To1000(start, end) {
    if (start >= 1, start <= 1000, end >= 1, end <= 1000) {
        return true;
    }
    else return "数字不是1到1000之间";
}

// function createMultiplyTable(start, end) {
//     let multiplyTable = [];
//     for (let i = start; i <= end; i++) {
//         for (let j = start; j <= i; j++) {
//             multiplyTable += j + "*" + i + "=" + i * j;
//             if (i !== j) {
//                 multiplyTable += " "
//             }
//         }
//         if (i < end) {
//             multiplyTable += "\n";
//         }
//     }
//     return multiplyTable;
// }

function createMultiplyTable(start, end) {

}

function getItem(leftNum, rightNum) {
    let seperate = leftNum === rightNum ? "" : "\t";
    return `${leftNum} * ${rightNum} = ${leftNum * rightNum}${seperate}`;
}

function getLine(start, end) {
    var lineResult = '';
    for (let i = start; i <= end; i++) {
        let seperate = start === end ? "\n" : "";
        lineResult = getItem(start,end) + seperate;
    }
}

function generateTable(start,end){
    var tableResult = '';
    for (let i =start;i<=end;i++){

    }
}

function testDemo(start, end) {
    if (isStartLessEnd(start, end) == true) {
        if (isVaildNum(start, end) == true) {
            if (is1To1000(start, end) == true) {
                return createMultiplyTable(start, end);
            }
            else return is1To1000(start, end);
        }
        else return isVaildNum(start, end);
    }
    else return isStartLessEnd(start, end);
}

module.exports = testDemo;


