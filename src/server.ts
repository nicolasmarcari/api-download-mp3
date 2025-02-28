import app from "./app";
import Consumer from "./rabbitmq/consumer";
import RabbitMQ from "./rabbitmq/rabbitmq";


const PORT: number = Number(process.env.PORT) || 3000;

async function startServer() {
  await RabbitMQ.connect();
  Consumer.start();
}

app.listen(PORT, () => {
  console.log(`Server initialized at port ${PORT}`);
})

startServer();
