// requiring in client from client file
import client from './client';

const kafkaSubscribe = async (topic: string) => {
	try {
		const consumer = client.consumer({ groupId: 'my-group' });
		await consumer.connect();
		await consumer.subscribe({ topic: topic });
		await consumer.run({
			eachMessage: async ({ topic, message }) => {
				console.log({
					// key: message.key.toString(),
					value: message.value.toString(),
				});
			},
		});
	} catch (e) {
		console.log('Error in consuming => ', e);
	}
};

kafkaSubscribe('test-topic');