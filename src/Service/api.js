import { API, PATHS } from "./constant";


export function getArticle(params, cb) {
    API.GET(PATHS.ARTICLE, {}, params, function (res) {
        cb(res);
    });
}