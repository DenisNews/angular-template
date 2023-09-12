// Event Emitter
// 1. Add Event Listener (e.g 'open', handler)
// 2. Remove Event Listener (e.g 'open', handler)
// 3. Emit (e.g 'open')
// 4. Two type of events ('default' - persistent, 'once' - execute and remove the handler)

const store = {};

const _pushEvent = (name, payload) => {
  if (!store[name]) {
    return (store[name] = [payload]);
  }

  return store[name].push(payload);
};

const addEventListener = (name, handler) => {
  const payload = {
    type: "default",
    handler,
  };

  _pushEvent(name, payload);
};

const once = (name, handler) => {
  const payload = {
    type: "once",
    handler,
  };

  _pushEvent(name, payload);
};

const removeEventListener = (name, handler) => {
  if (store[name]) {
    store[name] = store[name].filter((event) => handler !== event.handler);
  }
};

const emit = (name) => {
  if (store[name]) {
    store[name].forEach(({ type, handler }) => {
      handler({ type: name });

      if (type === "once") {
        removeEventListener(name, handler);
      }
    });
  }
};

export { addEventListener, once, removeEventListener, emit };
