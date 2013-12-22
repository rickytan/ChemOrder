/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var AVCloud = AVCloud || {};

(function() {
    AVCloud.addEvent = function(event, callback) {

    };
    AVCloud.delEvent = function(event, callback) {

    };
    AVCloud.queryEvent = function(title, callback) {

    };
    AVCloud.loadAllEvents = function(callback) {

    };
    AVCloud.loadEvents = function(start, end, callback) {
        if (start === null)
            start = new Date(0);
        if (end === null)
            end = new Date(3000, 0, 1);
        callback([
            {id: 1, start_date: "2013-12-18 09:00", end_date: "2013-12-18 12:00", text: "仪器1", instrument: '1'},
            {id: 2, start_date: "2013-12-20 10:00", end_date: "2013-12-21 16:00", text: "仪器2", instrument: '2'},
            {id: 3, start_date: "2013-12-21 10:00", end_date: "2013-12-21 14:00", text: "仪器3", instrument: '3'},
            {id: 4, start_date: "2013-12-23 16:00", end_date: "2013-12-23 17:00", text: "仪器2", instrument: '2'},
            {id: 5, start_date: "2013-12-24 09:00", end_date: "2013-12-24 17:00", text: "仪器1", instrument: '1'}
        ]);
    };
    AVCloud.ajax = function(param, callback) {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechanged = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                callback(xmlhttp, xmlhttp.responseText);
            }
        };
        var method = 'GET';
        var url = param;
        var data = param.data || {};
        var value = null;
        if (typeof (param) !== 'string') {
            method = param.method.toUpperCase() || 'POST';
            url = param.url;
        }
        var now = "uid=" + new Date().getTime();
        url += (url.indexOf("?") + 1) ? "&" : "?";
        url += now;
        xmlhttp.open(method, url, true);
        if (method === 'POST') {
            var r = [];
            for (v in data) {
                if (typeof (v) !== 'undefined') {
                    r[r.length] = "" + v + "=" + data[v];
                }
            }
            value = r.join('&');
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.setRequestHeader("Content-length", value.length);
        }
        xmlhttp.send(value);
    };
})();
