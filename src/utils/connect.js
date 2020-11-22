import mongoose from 'mongoose';

export default function connect(MongoUri) {
  mongoose.connect(MongoUri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'mongoDB connection error'));
  return db;
}
