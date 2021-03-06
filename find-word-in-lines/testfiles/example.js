var Promise = require('bluebird');
var util = require('../../lib/util');

//渲染
module.exports = function (req, res, next) {
  var def = process.def;
  var http = https;
  util.modules_list().then(function (parsedJSONs) {
    res.json({
      success: true,
      modules: parsedJSONs
    });
  }).catch(SyntaxError, function (e) {
    def.log.error("Invalid JSON in file " + e.fileName + ": " + e.message);
    res.json({
      success: false,
      message: "Invalid JSON in file " + e.fileName + ": " + e.message
    });
  });
}
