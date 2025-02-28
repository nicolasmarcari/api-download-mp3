import Mp3Downloader from "../services/mp3download";
import RabbitMQ from "./rabbitmq";

export default class Consumer {
  private static queue: string = 'download_queue';

  static async start() {
    const channel = RabbitMQ.getChannel();
    await channel.assertQueue(this.queue, { durable: true });

    channel.consume(this.queue, async (msg) => {
      if(msg) {
        const content = JSON.parse(msg.content.toString());
        const mp3Downloader = new Mp3Downloader();
        mp3Downloader.downloadAudio(content.url, content.title);

        channel.ack(msg);
      }
    });
  }
}