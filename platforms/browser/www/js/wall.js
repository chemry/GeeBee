const wallPosition = [
    [98, 55],
    [73, 55],
    [504, 55],
    [10, 150],
    [10, 175],
    [504, 150],
    [567, 175],
    [35, 360],
    [82, 385],
    [504, 360],
    [504, 385],
    [292, 360],
    [82, 630],
    [504, 630],
];

let Wall = function (img, num) {
    let o = {
        img: img,
        w: img.width,
        h: img.height
    };
    o.x = wallPosition[num][0];
    o.y = wallPosition[num][1];


    return o;
};
