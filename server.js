const express = require('express');
const { json } = require('express/lib/response');

const app = express();

global.memory = '';

app.use(express.json());

app.post('/api/mem', async(req, res) => {
    try {
        memory = (req.body.data);
        console.log(memory);
    } catch (err) {
        console.log(err.message);
    }
})

app.get('/api/mem', async(req, res) => {
    try {
        res.json(memory);
    } catch (err) {
        console.log(err.message);
    }
})

app.post('/api/calc', async(req, res) => {
    try {
        const {data} = req.body;
        let operand;
        let result;
        for(let i = 0; i < data.length; i++){
            if(data.charAt(i) == '+' || data.charAt(i) == '-' || data.charAt(i) == '*' || data.charAt(i) == '/'){
                operand = data.charAt(i);
            }
        }

        let arr = data.split(operand);
        
        switch (operand) {
            case '+':
                result = parseInt(arr[0]) + parseInt(arr[1]);
                break;
            case '-':
                result = parseInt(arr[0]) - parseInt(arr[1])
                break;
            case '*':
                result = parseInt(arr[0]) * parseInt(arr[1])
                break;
            case '/':
                result = parseInt(arr[0]) / parseInt(arr[1])
                break;
            default:
                break;
        }

        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
})

app.post('/api/save', async(req, res) => {
    try {
        const {num} = req.body;

        const fs = require('fs');

        fs.writeFile('result.txt', num.toString(), err => {
        if (err) {
            console.error(err);
        }
        });


        res.json('Data saved successfully ' + num);
    } catch (err) {
        console.error(err.message);
    }
})

app.get('/api/load', async(req, res) => {
    try {
        const fs = require('fs');

        fs.readFile('result.txt', 'utf8', (err, data) => {
        if (err) {
            console.log("hereasd");
            console.error(err);
            return;
        }
        console.log("Data loaded successfully: ", data);
        res.json(data);
        });
    } catch (err) {
        console.error(err.message);
    }
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));