var _ = require('lodash');

function buildMapping(array, key, attrPath) {
  var target = {};
  _.each(array, function (item) {
    target[key ? item[key] : item] = attrPath ? _.get(item, attrPath) : item;
  });
  return target;
}

var a = [{"ifIndex":1001,"port":"1/1","description":"Alcatel-Lucent 1/1","id":"id_0","sdlSelected":true,"bkHashKey":0,"checked":false,"$$hashKey":"object:3031"},{"ifIndex":1002,"port":"1/2","description":"Alcatel-Lucent 1/2","id":"id_1","sdlSelected":true,"bkHashKey":1,"checked":false,"$$hashKey":"object:3032"}];

console.log(buildMapping(a, 'ifIndex'));