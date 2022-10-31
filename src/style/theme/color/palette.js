const { generate } = require('@eyas-design/color');

module.exports = {
  install(_, __, functions) {
    functions.add('color-palette', (color, index) => {
      return generate(color.value, { index: index.value });
    });
  },
};
