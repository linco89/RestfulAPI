const express = require('express');
const app = express();
const userRoutes = require('./routes/itemRoute'); 
const PORT= 4800;

app.use(express.json());
app.use('/users', userRoutes);

app.get('/',(req, res) =>{
    res.status(200).send('hello world!')
})

app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
 