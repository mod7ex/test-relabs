export const debounce = function (func, timeout = 2000) {
      let timer;
      return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                  func.apply(this, args);
            }, timeout);
      };
};

let concat_0 = (num) => {
      if (`${num}`.length != 1) return num;

      return "0" + num;
};

export const formatDateTime = (num) => {
      let d = new Date(num * 1000);

      return (
            [
                  concat_0(d.getDate()),
                  concat_0(d.getMonth() + 1),
                  d.getFullYear(),
            ].join(".") +
            " " +
            [concat_0(d.getHours()), concat_0(d.getMinutes())].join(":")
      );
};
