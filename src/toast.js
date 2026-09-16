export const showToast = (msg) => {
  const event = new CustomEvent('show-toast', { detail: msg });
  window.dispatchEvent(event);
};
