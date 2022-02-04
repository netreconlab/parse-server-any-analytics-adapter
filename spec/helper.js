// https://github.com/mtrezza/parse-server-api-mail-adapter/blob/alpha/spec/helper.js
// Simulate Parse User class
const Parse = {
    User: class User {
      get(key) {
        switch (key) {
          case 'username':
            return 'ExampleUsername';
          case 'email':
            return 'to@example.com';
          case 'locale':
            return 'de-AT';
        }
      }
    }
  };
  export default Parse;
