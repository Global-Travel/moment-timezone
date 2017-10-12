var moment = module.exports = require("./moment-timezone");
//moment.tz.load(require('./data/packed/latest.json'));
moment.tz.load({
    "version": "2017b",
    "zones": [
        "Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6"
    ],
    "links": [
        "Asia/Shanghai|Asia/Chongqing",
        "Asia/Shanghai|Asia/Chungking",
        "Asia/Shanghai|Asia/Harbin",
        "Asia/Shanghai|PRC"
    ]
});