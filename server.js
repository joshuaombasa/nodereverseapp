const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

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
                    max-width: 500px;
                }
                h1 {
                    color: #0078d4;
                    margin-bottom: 0.5rem;
                }
                h2 {
                    color: #333;
                    margin-bottom: 1rem;
                }
                p {
                    color: #555;
                    line-height: 1.4;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 Node.js App Deployed!</h1>
                <h2>CI/CD & Reverse Proxy Lab</h2>
                <p>
                    This Node.js application has been successfully deployed as part of your CI/CD and reverse proxy lab.
                    It is running behind Nginx and serves a styled HTML page.
                </p>
                <p>
                    You have learned to:
                    <ul style="text-align: left; margin: 1rem auto; max-width: 400px;">
                        <li>Set up a Node.js server with Express</li>
                        <li>Style and serve a test page</li>
                        <li>Configure Nginx as a reverse proxy</li>
                        <li>Automate deployment using CI/CD pipelines</li>
                    </ul>
                </p>
                <p>
                    You can continue to enhance this app, connect it to a database, or containerize it for scalable deployments.
                </p>
            </div>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('🚀 Node.js app running on http://localhost:3000');
});
