import axios from "axios";
export const PATHS = {
    ARTICLE:"https://mediaedit.iitmandi.co.in/article/"
};

export const API = {
    GET: (url, body = {}, params = {}, cb) => {
        axios
            .get(url, {
                data: body,
                params: params,
            })
            .then((res) => {
                cb(res.data);
            })
            .catch((error) => {
                console.error("ERROR:", error);
                cb(null);
            });
    },
    POST: (url, body = {}, params = {}, cb) => {
        axios
            .post(url, body, {
                params: params,
            })
            .then((res) => {
                cb(res.data);
            })
            .catch((err) => {
                console.log("ERROR: ", err);
                cb(null);
            });
    },
    PATCH: (url, body = {}, params = {}, cb) => {
        axios
            .patch(url, body, {
                params: params,
            })
            .then((res) => {
                cb(res.data);
            })
            .catch((err) => {
                console.log("ERROR: ", err);
                cb(null);
            });
    },
    DELETE: (url, body = {}, cb) => {
        axios
            .delete(url, {
                data: body,
            })
            .then((res) => {
                cb(res);
            })
            .catch((err) => {
                console.error("ERROR: ", err);
                cb(null);
            });
    },
};