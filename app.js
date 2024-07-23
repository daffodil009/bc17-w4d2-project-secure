import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(helmet());

app.get('/', (req, res) => {
    res.send("status code 200. Hello World!");
    console.log(req);

});



app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})
