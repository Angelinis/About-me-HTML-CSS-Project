export function createEntity(tag, attributes = {}) {
  const el = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    if (value === undefined || value === null || value === true) {
      el.setAttribute(key, "");
    } else {
      el.setAttribute(key, value);
    }
  });

  return el;
}
