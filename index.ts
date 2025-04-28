import express from 'express';
import sinRouter from './src/routes/sin';
import cosRouter from './src/routes/cos';
import tanRouter from './src/routes/tan';

const app = express();
app.use(express.json());
app.use('/sin', sinRouter);
app.use('/cos', cosRouter);
app.use('/tan', tanRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));