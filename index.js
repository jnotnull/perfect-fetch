'use strict';
var URLSearchParams = require('url-search-params');

module.exports = {
    sendrequest: function(url, data, method) {
        if (!method) {
            method = 'post';
        }

        var searchParams = new URLSearchParams();
        if (data) {
            searchParams.append("data", JSON.stringify(data));
        }

        return fetch(url, {
                "method": method,
                "credentials": "include",
                "headers": {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                "body": searchParams.toString()
            })
            .then(function(res){
                return res.json()
            })
            .then(function(data){
                return data;
            });
    },
    upload: function(url, file, method) {
        if (!method) {
            method = 'post';
        }

        var formData = new FormData()
        formData.append('image', file);

        return fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(function(res){
                return res.json()
            })
            .then(function(data){
                return data;
            });
    }
}