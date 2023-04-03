const app = require('./app');
const dotEnv = require('dotenv');
dotEnv.config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));