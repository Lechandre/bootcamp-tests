function countRegNumber(regCount) {
    return regCount.split(',').length
}

var regCount = countRegNumber('CA 182736');
var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
