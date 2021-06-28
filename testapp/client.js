// import kafkajs from dependecies
import { Kafka } from 'kafkajs';
// create an instance of kafka, passing in the clientId & brockers
// no broker discovery here - just passing in port of kafka
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'],
});
// module.exports = kafka;
export default kafka;
//# sourceMappingURL=client.js.map