/**
 * @license requirejs-hash-vars Copyright (c) 2012, Dmitry Kuznetsov All Rights Reserved.
 * Available via the MIT or new BSD license.
 * @see https://github.com/dmkuznetsov/requirejs-hash-vars
 */

define(function () {
    "use strict";
    return {
        all : function () {
            var vars = {}, hash;
            var hashes = decodeURIComponent(window.location.hash.substr(1));
            if (!hashes.length) {
                return vars;
            } else {
                hashes = hashes.split('&');
            }

            for (var i in hashes) {
                if (hashes.hasOwnProperty(i)) {
                    hash = hashes[i].split('=');
                    if (typeof hash[1] === 'undefined') {
                        vars['anchor'] = hash[0];
                    } else {
                        vars[hash[0]] = hash[1];
                    }
                }
            }
            return vars;
        },

        get : function (key) {
            var hashVars = this.all();
            return hashVars[key];
        },

        set : function (vars) {
            var hash = '';
            for (var i in vars) {
                if (vars.hasOwnProperty(i)) {
                    hash += '&' + i + '=' + vars[i];
                }
            }
            window.location.hash = hash.substr(1);
        },

        add : function (key, val) {
            var hashVars = this.all();
            hashVars[key] = val;
            this.set(hashVars);
        },

        remove : function (key) {
            var hashVars = this.all();
            delete hashVars[key];
            this.set(hashVars);
        },

        clear : function () {
            window.location.hash = '';
        }
    };
});
