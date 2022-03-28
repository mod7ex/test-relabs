const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^((?=.*[A-Z]).{8,})$/;

let cleanOnEmpty = (fn) => {
      return (v) => {
            if (!v) return true;
            return fn(v);
      };
};

export const required = (val) => {
      return {
            valide: ((v) => (v ? true : false))(val),
            error: "field is required",
      };
};

export const email = (val) => {
      return {
            valide: cleanOnEmpty((v) => emailRegex.test(v))(val),
            error: "invalide email",
      };
};

export const password = (val) => {
      return {
            valide: cleanOnEmpty((v) => passwordRegex.test(v))(val),
            error: "invalide password",
      };
};
