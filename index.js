import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));

app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user',userRoutes);

app.get('/', (req, res) => {
  res.json('Welcome to memories API!!!');
});
const CONNECTION_URL =
  'mongodb+srv://pranshugupta:PRANSHUg2@cluster0.4j2bj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server on running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));
