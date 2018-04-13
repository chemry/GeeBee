let triPosition = [
    [[250, 280], [250, 285]],
    [[330, 280], [340, 285]],

];
let Triangle = function (img, num) {
    let o = {
        img: img,
        w: img.width,
        h: img.height
    };
    o.x = triPosition[num][0][0];
    o.y = triPosition[num][0][1];

    return o;
};

let TriPart = function (img, num) {
    let o = {
        img: img,
        w: img.width,
        h: img.height
    };
    o.x = triPosition[num][1][0];
    o.y = triPosition[num][1][1];
    return o;
};

let Trip = function (img, num) {
    let o = {
        img: img,
        w: img.width,
        h: img.height
    }
    return o;
}