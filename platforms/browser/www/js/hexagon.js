let hPosition = [
    [[184, 175], [184, 187], [190, 181], [197, 173]],
    [[184, 175], [184, 187], [190, 181], [197, 173]],

];

let big = [[177, 168], [361, 168]];
for(let i = 0; i < 4; i++){
    hPosition[1][i][0] += 184;
}

let BigHex = function (img, num) {
    let o = {
        img: img,
        w: img.width,
        h: img.height
    };
    o.x = big[num][0];
    o.y = big[num][1];

    return o;
};

let Hexagon = function (img, num) {
    let o = {
        img: img,
        w: img.width,
        h: img.height
    };
    o.x = hPosition[num][0][0];
    o.y = hPosition[num][0][1];


    return o;
};

let HexPart= function (img, hex, num, score) {
    let o = {
        img: img,
        part: hex,
        score: score,
        fast: true,
        w: img.width,
        h: img.height
    };

    num++;
    o.x = hPosition[hex][num][0];
    o.y = hPosition[hex][num][1];
    //log(num, o.x, o.y, img);

    o.getPart = function () {
        return o.part;
    };
    return o;
};