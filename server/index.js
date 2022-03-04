const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


const postRoutes = require('./routes/posts');

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/posts', postRoutes);
const CONNECTION_URL = "mongodb+srv://mateusvictor7:mateus0723@cluster0.cyxd1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`)))
  .catch((error) => console.log(error.message));
