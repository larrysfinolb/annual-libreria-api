const express = require('express');
const cors = require('cors');
const router = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

router(app);

app.listen(port, () => {});
