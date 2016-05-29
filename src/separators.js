'use strict';

function thousands_separators(input) {
    var number = String(input).split(".");
    number[0] = number[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)','ig'),"$1,");
    return number.join(".");

}


module.exports = thousands_separators;

