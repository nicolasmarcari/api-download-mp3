import amqp, { Connection, Channel } from 'amqplib';

export default class RabbitMQ {
  private static connection: Connection;
  private static channel: Channel;

  static async connect(): Promise<void> {
    try{
      this.connection = await amqp.connect(String(process.env.RABBIT_URI));
      this.channel = await this.connection.createChannel();
      console.log('RabbitMQ connected!');
    } catch (error) {
      console.log(`Error to connect on RabbitMQ ${error}`);
    }
  }

  static getChannel(): Channel {
    if(!this.channel) throw new Error('Channel not initialized');
    return this.channel;
  }
}