let debounce = (fn) => {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      // fn()
    }, 1000);
  };
};
export default debounce;
