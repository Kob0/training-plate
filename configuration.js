//explains basic concepts of configurating in classes.


const hasNumber = (string) => (string.search(/\d/) !== -1);

class validatePassvord {
  constructor(options = {}) {
    const defaultOptions = {
      minLength: 8, 
      containNumbers: true,
    };
    this.options = { ...defaultOptions, ...options };
  }

  validate(password) {
    const errors = {};

    if (password.length < this.options.minLength) {
      errors.minLength = 'too short!';
    }
    if (this.options.containNumbers) {
      if (!hasNumber(password)) {
        errors.containNumbers = 'should contain at least one number';
      }
    }

    return errors;
  }
}
