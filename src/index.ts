// inspired by https://github.com/luanre
// thanks to https://github.com/dkamyshov

const noop = () => {};

// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
(function() {
  if (!window) return false;

  if (typeof window.CustomEvent === 'function') return false;

  // @ts-ignore
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }

  // @ts-ignore
  window.CustomEvent = CustomEvent;
})();

export const publishDOM = (name: string, payload: any) => {
  const event = new CustomEvent(name, {
    detail: payload
  });

  if (document.body) {
    document.body.dispatchEvent(event);
  }
};

export const subscribeDOM = (
  name: string,
  listener: (payload: any) => void
) => {
  const internalListener = ((event: CustomEvent) => {
    listener(event.detail);
  }) as EventListener;

  if (document.body) {
    document.body.addEventListener(name, internalListener);

    return () => {
      document.body.removeEventListener(name, internalListener);
    };
  }

  return noop;
};
