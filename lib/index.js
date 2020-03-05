"use strict";
// inspired by https://github.com/luanre
Object.defineProperty(exports, "__esModule", { value: true });
var noop = function () { };
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
(function () {
    if (!window)
        return false;
    if (typeof window.CustomEvent === 'function')
        return false;
    // @ts-ignore
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: null };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    // @ts-ignore
    window.CustomEvent = CustomEvent;
})();
exports.publishDOM = function (name, payload) {
    var event = new CustomEvent(name, {
        detail: payload
    });
    if (document.body) {
        document.body.dispatchEvent(event);
    }
};
exports.subscribeDOM = function (name, listener) {
    var internalListener = (function (event) {
        listener(event.detail);
    });
    if (document.body) {
        document.body.addEventListener(name, internalListener);
        return function () {
            document.body.removeEventListener(name, internalListener);
        };
    }
    return noop;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdDQUF3Qzs7QUFFeEMsSUFBTSxJQUFJLEdBQUcsY0FBTyxDQUFDLENBQUM7QUFFdEIsMkVBQTJFO0FBQzNFLENBQUM7SUFDQyxJQUFJLENBQUMsTUFBTTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRTFCLElBQUksT0FBTyxNQUFNLENBQUMsV0FBVyxLQUFLLFVBQVU7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUUzRCxhQUFhO0lBQ2IsU0FBUyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDaEMsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDdkUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5QyxHQUFHLENBQUMsZUFBZSxDQUNqQixLQUFLLEVBQ0wsTUFBTSxDQUFDLE9BQU8sRUFDZCxNQUFNLENBQUMsVUFBVSxFQUNqQixNQUFNLENBQUMsTUFBTSxDQUNkLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxhQUFhO0lBQ2IsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDbkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVRLFFBQUEsVUFBVSxHQUFHLFVBQUMsSUFBWSxFQUFFLE9BQVk7SUFDbkQsSUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFO1FBQ2xDLE1BQU0sRUFBRSxPQUFPO0tBQ2hCLENBQUMsQ0FBQztJQUVILElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtRQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQztBQUNILENBQUMsQ0FBQztBQUVXLFFBQUEsWUFBWSxHQUFHLFVBQzFCLElBQVksRUFDWixRQUFnQztJQUVoQyxJQUFNLGdCQUFnQixHQUFHLENBQUMsVUFBQyxLQUFrQjtRQUMzQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBa0IsQ0FBQztJQUVwQixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7UUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUV2RCxPQUFPO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUM7S0FDSDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDIn0=