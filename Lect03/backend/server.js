import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// get 5 jokes
app.get('/jokes', (req,res) => {
    const jokes = [
        {
            id: 1,
            title: 'joke 1'
        },
        {
            id: 2,
            title: 'joke 2'
        }, 
        {
            id: 3,
            title: 'joke 3'
        },
        {
            id: 4,
            title: 'joke 4'
        },
        {
            id: 5,
            title: 'joke 5'
        }
    ];
    res.send(jokes);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is ready ${PORT}`);
})