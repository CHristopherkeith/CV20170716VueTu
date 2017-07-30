// import $ from './jquery-2.2.2.min.js'

import {zepto} from './zepto.js'
// console.log(zepto)
function AjaxHelper() {
    this.ajax = function(url, type, dataType, data, callback,errorCallback) {
    	// console.log($)
        $.ajax({
            url: url,
            type: type,
            dataType: dataType,
            data: data,
      //       contentType: "application/json; charset=utf-8",
      //       crossDomain: true,
		    // xhrFields: {
		    //     // withCredentials: true
		    //     'Access-Control-Allow-Origin': '*'
		    // },
            success: callback,
            error: errorCallback || function(xhr, errorType, error) {
            	// console.log(xhr)
                alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
            }
        })
    }
}
AjaxHelper.prototype.get = function(url, data, callback,errorCallback) {
    this.ajax(url, 'GET', 'json', data, callback,errorCallback)
}
AjaxHelper.prototype.post = function(url, data, callback,errorCallback) {
    this.ajax(url, 'POST', 'json', data, callback,errorCallback)
}

AjaxHelper.prototype.put = function(url, data, callback,errorCallback) {
    this.ajax(url, 'PUT', 'json', data, callback,errorCallback)
}

AjaxHelper.prototype.delete = function(url, data, callback,errorCallback) {
    this.ajax(url, 'DELETE', 'json', data, callback,errorCallback)
}

AjaxHelper.prototype.jsonp = function(url, data, callback,errorCallback) {
    this.ajax(url, 'GET', 'jsonp', data, callback,errorCallback)
}

AjaxHelper.prototype.constructor = AjaxHelper

export default AjaxHelper