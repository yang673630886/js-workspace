const testDemo = require('../main');

it ('should return multiply table from 2 to 4 when call testDemo', () => {
    expect(testDemo(2, 4)).toBe("2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16");
});

it ('should return start must less than end when call testDemo', () =>{
    expect(testDemo(4,2)).toBe("左边应小于右边");
});

it ('should return start must less than end when call testDemo', () =>{
    expect(testDemo(1,9999)).toBe("数字不是1到1000之间");
});

it ('should return start must less than end when call testDemo', () =>{
    expect(testDemo(1,1.1)).toBe("输入不是整数");
});
