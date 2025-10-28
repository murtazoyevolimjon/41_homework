import express from 'express';
import { connectDB } from './src/db/db.js';
import { mainRouter } from './src/routes/index.js';
import { errorHandler } from './src/middleware/errorHandler.js';
const app = express();
app.use(express.json());
connectDB();
app.use('/', mainRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});