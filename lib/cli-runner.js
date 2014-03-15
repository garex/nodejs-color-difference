module.exports = (function() { return cliRunner; })();

function cliRunner() {
  var cli = require('cli')
    .enable('version')
    .setApp(__dirname + '/../package.json')
    .setUsage([
      'color-difference [OPTIONS] color1 color2',
      '',
      '  NOTE: When you pass params like #fff #000, bash will ignore them because of "#" char',
      '   - Use quotes: "#fff", or escape them by slashes: \#000',
      '   - Also you can pass colors without leading "#" char',
    ].join('\n'));

  cli.parse({
    method:     ['m', 'Which method to use', 'string']
    , verbose:  ['v', 'Be verbose']
  });


  if (0 == cli.args) {
    cli.getUsage();
    cli.exit(2);
  }

  var color2 = cli.args.pop(),
      color1 = cli.args.pop(),
      difference = null;

  try {
    difference = require('..').compare(color1, color2, cli.options.method);
    if (!cli.options.verbose) {
      console.log(difference);
      cli.exit(0);
    }
  } catch (e) {
    cli.error(e.message);
    console.log('');
    cli.getUsage();
  }

  // Verbose way
  var HexRgb = require('color-model').HexRgb,
      c1     = new HexRgb(color1),
      c2     = new HexRgb(color2);

  console.log('Difference between ' + c1 + ' (' + c1.toRgb() + ') and ' + c2 + ' (' + c2.toRgb() + ') is ' + difference + '%');

};
