module.exports = {
  DB: {
    test: 'mongodb://localhost/northcoders-news-api-test',
    dev: 'mongodb://joshmarsden:password@ds133251.mlab.com:33251/northcoders-news'
  },
  PORT: {
    test: 3090,
    dev: process.env.PORT
  }
};