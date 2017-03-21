'use strict';
var URLSearchParams = require('url-search-params');


module.exports = {
    sendrequest: function(url, data, method = 'post') {
        let searchParams = new URLSearchParams();
        if (data) {
            for (let param in data) {
                if (data[param] !== null) {
                    searchParams.append(param, JSON.stringify(data[param]));
                }
            }
        }

        return fetch(url, {
                "method": method,
                "credentials": "include",
                "headers": {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                "body": searchParams.toString()
            })
            .then(res => res.json())
            .then(data => {
                return data;
            });
    },
    upload: function(url, file, method = 'post') {
        var formData = new FormData()
        formData.append('image', file);

        return fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                return data;
            });
    }
}
