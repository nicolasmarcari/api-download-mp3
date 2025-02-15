import RabbitMQ from "./rabbitmq";

export default class Producer {
  private static exchange: string = 'download_exchange';
  private static queue: string = 'download_queue';

  static async sendMessage(message: object) {
    const channel = RabbitMQ.getChannel();
    await channel.assertExchange(this.exchange, 'direct', { durable: true });
    await channel.assertQueue(this.queue, { durable: true });
    await channel.bindQueue(this.queue, this.exchange, '');

    channel.sendToQueue(this.queue, Buffer.from(JSON.stringify(message)), {
      persistent: true
    });

    console.log(`send message to queue`);
  }
}