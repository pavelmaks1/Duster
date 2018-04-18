(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    } else {
        factory({}, this);
    }
})(function (require, exports) {
    "use strict";
    var PostMessanger = (function () {
        function PostMessanger(forMessage, origin) {
            this._forMessage = forMessage;
            this._listenOrigin = origin;
            this._onMessage = this._onMessage.bind(this);
            this._setHandlers();
        }

        PostMessanger.prototype.on = function (event, handler) {
            if (!this._events) {
                this._events = {};
            }
            if (!this._events[event]) {
                this._events[event] = [];
            }
            this._events[event].push(handler);
        };
        PostMessanger.prototype.off = function (event, handler) {
            if (!event) {
                this._events = {};
                return null;
            }
            if (!handler) {
                if (this._events[event]) {
                    delete this._events[event];
                }
                return null;
            }
            if (this._events[event]) {
                this._events[event] = this._events[event].filter(function (cb) {
                    return handler !== cb;
                });
            }
        };
        PostMessanger.prototype.send = function (event, data) {
            this._forMessage.postMessage({
                message: event,
                data: data
            }, this._listenOrigin);
        };
        PostMessanger.prototype._setHandlers = function () {
            window.addEventListener('message', this._onMessage);
        };
        PostMessanger.prototype._onMessage = function (event) {
            if (event.origin !== this._listenOrigin) {
                return null;
            }
            if (typeof event.data === 'object' && event.data.message && this._events[event.data.message]) {
                this._events[event.data.message].slice().forEach(function (handler) {
                    handler(event.data.data);
                });
            }
        };
        return PostMessanger;
    }());
    exports.PostMessanger = PostMessanger;
});
