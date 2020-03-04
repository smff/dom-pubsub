// inspired by https://github.com/luanre


// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
(function () {

    if ( typeof window.CustomEvent === "function" ) return false;

    // @ts-ignore
    function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: null };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
    }

    // @ts-ignore
    window.CustomEvent = CustomEvent;
})();

export const publishDOM = (name: string, data: any) => {
    const event = new CustomEvent(name, {
        detail: data
    });
    document.body.dispatchEvent(event);
};

export const subscribeDOM = (name: string, callback: any) => {
    document.body.addEventListener(name, ((evt: CustomEvent) => callback(evt.detail)) as EventListener);
};
