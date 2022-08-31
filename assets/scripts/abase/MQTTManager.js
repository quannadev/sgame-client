//var mqtt = require('mqtt-no-shebang')
import mqtt from 'mqtt-no-shebang/dist/mqtt.min.js';
console.log(mqtt)
// let MQTTManager = {
//   connect() {
//     this.setupClient();
//   },
//   setupClient() {
//     // let clientId = Date.now().toString();
    
//     mqttInfo = {username:"kamasutra",password:"H7j3dfQ5vOfG",topic:"user/kamasutra/events",host:"events.loccoc.club"};
//     this.mqttInfo = mqttInfo;
//     this.client = mqtt.connect(mqttInfo.host, [{port: port, username: mqttInfo.username, password: mqttInfo.password}]);
//     this.client.on('connect', this.onConnected);
//     this.client.on('disconnect', this.onDisconnected);
//     this.client.on('message', this.onMessage);
//   },
//   onConnected() {
//     console.log('MQTT: on connected');
//     this.subscribe(this.mqttInfo.topic);
//   },
//   onDisconnected() {
//     console.log('MQTT: on disconnected');
//   },
//   onMessage(topic, message) {
//     var json = JSON.parse(message.toString());
//     console.log("MQTT: topic " + topic + " payload " + json);

//     this.handleIncomingMessage(json);
//   },
//   subscribe(topic) {
//     console.log('MQTT: subscribe topic ' + topic);
//     this.client.subscribe(topic, function (err) {
//       if (err) {
//         console.log('subsribe error ' + topic);
//       }
//     });
//   },
//   handleIncomingMessage(message) {
//     var gameActions = [
//       "game_new_turn",
//       "game_end_turn",
//       "room_info",
//       "game_info",
//       "game_end_bet",
//       "game_end",
//       'user_bet_result',
//       'live',
//       "user_chat",
//       "balance_refund"
//     ];
//     if (message.action == 'logout') {
//       let svMsg = message.data.containsKey('message')
//           ? message.data['message']
//           : 'Tài khoản của bạn đã đăng nhập ở thiết bị khác';
      
//       SmartFoxSDK.PortalController._reset();
//       PortalManager.disconnectAll();
//       Config.clearTokens();
//     } else if (message.action == 'user_balance') {
//       let userBalance = message.data;
//       let user = GameVariables.getAccount;
//       if (userBalance.username == Config.getUsername()) {
//         let amount = userBalance.balance;
//         GameVariables.Poker.setChip(amount);
//       }
//     } else if (gameActions.contains(message.action)) {
//       // if (Get.isRegistered<TaiXiuGameController>()) {
//       //   TaiXiuGameController txController = Get.find();
//       //   txController.updateGameMessage(message);
//       // }
//       // if (Get.isRegistered<XocDiaGameController>()) {
//       //   XocDiaGameController txController = Get.find();
//       //   txController.updateGameMessage(message);
//       // }
//     }
//   }
// };
// module.exports = MQTTManager;