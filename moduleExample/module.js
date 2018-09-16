exports.abs = (number) => {
    if(0 < number)
        return number;
    else
        return -number;
};

exports.circleArea = (radius) => {
    return radius * radius * Math.PI;
}