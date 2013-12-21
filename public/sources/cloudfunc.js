/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var AVCloud = AVCloud || {};

(function() {
    AVCloud.addEvent = function(title, start, end, callback) {

    };
    AVCloud.delEvent = function(eventid, callback) {

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
            {start_date: "2013-12-18 09:00", end_date: "2013-12-18 12:00", text: "FT", subject: 'english'},
            {start_date: "2013-12-20 10:00", end_date: "2013-12-21 16:00", text: "仪器A", subject: 'math'},
            {start_date: "2013-12-21 10:00", end_date: "2013-12-21 14:00", text: "仪器B", subject: 'science'},
            {start_date: "2013-12-23 16:00", end_date: "2013-12-23 17:00", text: "仪器A", subject: 'english'},
            {start_date: "2013-12-24 09:00", end_date: "2013-12-24 17:00", text: "FT"}
        ]);
    };
})();
