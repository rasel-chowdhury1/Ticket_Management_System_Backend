import { Server } from 'http';
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';


let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
        console.log(`This server running on ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

process.on('unhandledrejection', () => {

  console.log(`UnhandledRejection is detected, shutting down ...`)
  if(server){
    server.close(() => {
      process.exit(1);
    })
  }

  process.exit(1)
})

process.on('uncaughtException', ()=> {
  console.log(`uncaughtException is detected, shutting down .`);
  process.exit(1)
})