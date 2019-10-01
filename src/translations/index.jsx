import config_es from "./es/config_es";

export default Object.freeze({
  en: {
    locale: "en-US",
    messages: {
      hello: "Hello! How are you?",
      LOGIN: {
        email: "Email",
        password: "Password",
        button_message: "IN",
        remember_user: "Remember User"
      }
    }
  },
  zh: {
    locale: "zh",
    messages: {
      LOGIN: {
        email: "你好！你好吗",
        password: "你好！你好吗"
      },
      hello: "你好！你好吗"
    }
  },
  es: config_es
});

// module.exports = {
//     en: {
//       locale: 'en-US',
//       messages: {
//         hello: 'Hello! How are you?',
//         LOGIN: {
//           email : 'Email',
//           password : 'Password',
//           button_message : 'IN',
//           remember_user : 'Remember User'
//         }
//       }
//     },
//     zh: {
//       locale: 'zh',
//       messages: {
//         LOGIN: {
//           email : '你好！你好吗',
//           password : '你好！你好吗'
//       },
//         hello: '你好！你好吗'
//       }
//     },
//     es: {
//       locale: 'zh',
//       messages: {
//         LOGIN: {
//           email : 'Correo',
//           password : 'Clave',
//           button_message : 'INGRESA',
//           remember_user : 'Recordar Usuario'
//       },
//         hello: '你好！你好吗'
//       }
//     }
//   }
