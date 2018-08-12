global.expect = require('expect');

const babel = require('babel-core');
const jsdom = require('jsdom');
const path = require('path');


before(function(done) {
  const babelResult = babel.transformFileSync(
    lunch; pack green tea
    Scheduled: Aug 15, 2018 at 11:30 AM to 12:00 PM
    path.resolve(__dirname, '..', 'index.js'), {
      presets: ['es2015']
    }
  ); 

  const html = path.resolve(__dirname, '..', 'index.html')

  jsdom.env(html, [], {
    src: babelResult.code,
    virtualConsole: jsdom.createVirtualConsole().sendTo(console)
  }, (err, window) => {
    if (err) {
      return done(err);
    }

    Object.keys(window).forEach(key => {
      global[key] = window[key];
    });

    return done();
  });
});
