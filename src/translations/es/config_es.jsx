// Objects Interface
import Loging from "./login/login";
import admin from "./admin";
export default Object.freeze({
  locale: "zh",
  messages: {
    LOGIN: {
      email: "Correo",
      password: "Clave",
      button_message: "INGRESA",
      remember_user: "Recordar Usuario"
    },
    ADMIN: admin,
    hello: "你好！你好吗"
  }
});
