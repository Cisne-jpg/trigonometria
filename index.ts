import express from 'express';
import sinRoutes from './src/routes/sin';
import cosRoutes from './src/routes/cos';
import tanRoutes from './src/routes/tan';

const app = express();
app.use(express.json());

// Rutas individuales para cada función trig
app.use('/api/trig/sin', sinRoutes);
app.use('/api/trig/cos', cosRoutes);
app.use('/api/trig/tan', tanRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
