module.exports = {
  entry: {
    vote: './front/vote.js',
    index: './front/index.js',
  },
  output: {
    filename: './server/public/javascripts/[name].js'
  }
};
