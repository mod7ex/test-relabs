export const debounce = function (func, timeout = 2000) {
      let timer;
      return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                  func.apply(this, args);
            }, timeout);
      };
};

export const formatDateTime = (num) => {
      let d = new Date(num);

      return (
            [d.getMonth() + 1, d.getDate(), d.getFullYear()].join(".") +
            " " +
            [d.getHours(), d.getMinutes()].join(":")
      );
};
