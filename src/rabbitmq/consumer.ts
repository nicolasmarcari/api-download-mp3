import RabbitMQ from "./rabbitmq";

export default class Consumer {
  private static queue: string = 'download_queue';

  static async start() {
    const channel = RabbitMQ.getChannel();
    await channel.assertQueue(this.queue, { durable: true });

    channel.consume(this.queue, async (msg) => {
      if(msg) {
        const content = JSON.parse(msg.content.toString());

        channel.ack(msg);
      }
    });
  }
}