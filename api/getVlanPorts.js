var faker = require('faker');
var _ = require('lodash');

module.exports = {
  fake: fake
};

function getResponseSkeleton(order) {
  return {
    status: 'SUCCESS',
    statusCode: 200,
    type: 'VlanCommonDBResponseObject',
    response: {
      name: order,
      response: 'RESPONSE_ASYNCHRONOUS',
      finalResponse: order !== 'first',
      status: 'Success',
      data: []
    }
  }
}

function fake(order) {
  var response = getResponseSkeleton(order);
  response.response.data = _.times(10, fakePortWrapper);
  return response;
}

function fakePortWrapper() {
  return {
    deviceId: faker.random.uuid(),
    ports: _.times(10, fakePort)
  };
}

function fakePort(count) {
  return {
    port: '1/1/' + count,
    adminStatus: faker.random.arrayElement(['Up', 'Down']),
    ifIndex: 1000 + count,
    portStatus: faker.random.arrayElement(['Up', 'Down'])
  }
}






//function getFakeVlanData() {
//  var data = [];
//  for (var i = 0; i < 10; i++) {
//    var item = fakeVlan(i);
//    data.push(item);
//  }
//  return data;
//}


//<editor-fold desc="faker">
//function fakeSwitch(i) {
//  return {
//    deviceType: null,
//    name: 'OAW-4704',
//    ipAddress: '10.1.1.' + i,
//    model: null,
//    version: '6.4.3.4_51619',
//    location: 'TMA Solutions',
//    deviceDNS: '',
//    deviceLastUpgradeStatus: '',
//    backupDate: null,
//    backupVersion: null,
//    lastKnownUpAt: 1453116579781,
//    description: 'ArubaOS (MODEL: Aruba3600), Version 6.4.3.4 (51619)',
//    status: 'Up',
//    traps: 'Not Configurable',
//    seenBy: 'Administrators,Network Administrators,Writers,Default',
//    runningFrom: null,
//    changes: ' ',
//    discoveredDateTime: 1450768414633,
//    macAddress: '00:0b:86:6e:f7:6c',
//    sync: true,
//    supportsSsh: true,
//    allowPortDisabling: false,
//    licenseType: 'Third-Party',
//    featureIds: null,
//    friendlyName: 'Friendly Name' + '10.1.1.' + i,
//    others: {},
//    instanceid: _.uniqueId()
//  };
//}

//function getFakeSwitches(decoratorArray) {
//  var data = [];
//  for (var i = 0; i < 10; i++) {
//    var item = {
//      device: fakeSwitch(i)
//    };
//    _.forEach(decoratorArray, function (decorator) {
//      item = decorator(item);
//    });
//    data.push(item);
//  }
//  return data;
//}
//
//
//function fakePort(count) {
//  return {
//    vlanId: 1,
//    ifIndex: '100' + (count + 1),
//    portStr: '1/1/' + (count + 1),
//    vpaType: 'Default Config ',
//    vpaStatus: null,
//    vpaState: faker.random.arrayElement(['Inactive', 'Forwarding']),
//    vlanAdminStatus: false,
//    vlanOperationStatus: false
//  };
//}


//var getFakeVlanDetail = function (config) {
//  var successData = {
//    response: {
//      data: []
//    }
//  };
//  for (var i = 0; i < 10; i++) {
//    var item = {
//      device: fakeSwitch(i),
//      vlanInfo: fakeVlan(i),
//      ports: _.times(5, fakePort),
//      linkAggs: _.times(5, fakeLinkAggregate)
//    };
//    successData.response.data.push(item);
//  }
//  return successData;
//};
//
//function fakeLinkAggregate(count) {
//  return {
//    vlanId: 34,
//    ifIndex: 1400000 + count,
//    portStr: 'LAG-' + count,
//    vpaType: null,
//    vpaStatus: null,
//    vpaState: false,
//    vlanAdminStatus: false,
//    vlanOperationStatus: false
//  };
//}
//
//
//function fakeVlan(i) {
//  return {
//    vlanId: 'vlan' + i,
//    description: faker.lorem.sentence(),
//    adminStatus: faker.random.arrayElement(['Enabled', 'Disabled']),
//    operStatus: faker.random.arrayElement(['Enabled', 'Disabled']),
//    type: faker.random.arrayElement(['Dynamic', 'Static']),
//    status: faker.random.arrayElement(['Enabled', 'Disabled']),
//    spanningTreeStatus: faker.random.arrayElement(['Enabled', 'Disabled']),
//    routerProtocol: faker.random.arrayElement(['None', 'IPv4', 'IPv6', 'Both'])
//  };
//}


//</editor-fold>
