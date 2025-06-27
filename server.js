const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Node.js App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f4f8;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    background: white;
                    padding: 2rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    text-align: center;
                }
                h1 {
                    color: #0078d4;
                }
                p {
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello from Node.js app!</h1>
                <p>Your server is running and serving a styled page.</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('🚀 Node.js app running on http://localhost:3000');
});
