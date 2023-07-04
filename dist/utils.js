"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlBuilder = void 0;
function encodeQueryData(data) {
    if (!data) {
        return "";
    }
    const ret = [];
    for (let d in data)
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
}
function urlBuilder(rawg, endpoint, params) {
    const url = rawg.baseUrl + endpoint + "?" + encodeQueryData(params) + "&key=" + rawg.key;
    return url;
}
exports.urlBuilder = urlBuilder;
