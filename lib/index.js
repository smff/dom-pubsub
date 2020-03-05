"use strict";
// inspired by https://github.com/luanre
// thanks to https://github.com/dkamyshov
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdDQUF3QztBQUN4Qyx5Q0FBeUM7O0FBRXpDLElBQU0sSUFBSSxHQUFHLGNBQU8sQ0FBQyxDQUFDO0FBRXRCLDJFQUEyRTtBQUMzRSxDQUFDO0lBQ0MsSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPLEtBQUssQ0FBQztJQUUxQixJQUFJLE9BQU8sTUFBTSxDQUFDLFdBQVcsS0FBSyxVQUFVO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFM0QsYUFBYTtJQUNiLFNBQVMsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNO1FBQ2hDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3ZFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUMsR0FBRyxDQUFDLGVBQWUsQ0FDakIsS0FBSyxFQUNMLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsTUFBTSxDQUFDLFVBQVUsRUFDakIsTUFBTSxDQUFDLE1BQU0sQ0FDZCxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsYUFBYTtJQUNiLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFUSxRQUFBLFVBQVUsR0FBRyxVQUFDLElBQVksRUFBRSxPQUFZO0lBQ25ELElBQU0sS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksRUFBRTtRQUNsQyxNQUFNLEVBQUUsT0FBTztLQUNoQixDQUFDLENBQUM7SUFFSCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7UUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7QUFDSCxDQUFDLENBQUM7QUFFVyxRQUFBLFlBQVksR0FBRyxVQUMxQixJQUFZLEVBQ1osUUFBZ0M7SUFFaEMsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFVBQUMsS0FBa0I7UUFDM0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQWtCLENBQUM7SUFFcEIsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO1FBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFdkQsT0FBTztZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyJ9