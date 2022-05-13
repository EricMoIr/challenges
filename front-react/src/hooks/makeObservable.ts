export default function makeObservable<T>(target: T) {
  let listeners = []; // initial listeners can be passed an an argument aswell
  let value = target;

  function get() {
    return value;
  }

  function set(newValue: T) {
    if (value === newValue) return;
    value = newValue;
    listeners.forEach((listener) => listener(value));
  }

  // Returns cleanup function
  function subscribe(listenerFunc: (newValue: T) => any) {
    listeners.push(listenerFunc);
    return () => unsubscribe(listenerFunc);
  }

  function unsubscribe(listenerFunc: (newValue: T) => any) {
    listeners = listeners.filter((listener) => listener !== listenerFunc);
  }

  return {
    get,
    set,
    subscribe,
  };
}
