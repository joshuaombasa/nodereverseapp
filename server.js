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
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Node.js App</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: #f0f4f8;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    background: #fff;
                    padding: 2rem;
                    border-radius: 10px;
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                    max-width: 600px;
                    text-align: center;
                }
                h1 {
                    color: #0078d4;
                    margin-bottom: 0.5rem;
                }
                h2 {
                    color: #444;
                    margin-bottom: 1rem;
                }
                p {
                    color: #555;
                    line-height: 1.6;
                }
                ul {
                    text-align: left;
                    margin: 1rem auto;
                    padding-left: 1.2rem;
                    max-width: 400px;
                    color: #444;
                }
                footer {
                    margin-top: 2rem;
                    font-size: 0.85rem;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <main class="container">
                <h1>🚀 Node.js App Deployed!</h1>
                <h2>CI/CD & Reverse Proxy Lab</h2>
                <p>This Node.js app has been successfully deployed behind Nginx as part of your CI/CD and reverse proxy lab.</p>
                
                <ul>
                    <li>Set up a Node.js server with Express</li>
                    <li>Serve and style an HTML page</li>
                    <li>Configure Nginx as a reverse proxy</li>
                    <li>Automate deployment via CI/CD pipelines</li>
                </ul>

                <p>You can now extend this project by connecting a database, containerizing the app, or deploying it to the cloud.</p>

                <footer>Made with ❤️ and Node.js</footer>
            </main>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server is live: http://localhost:${PORT}`);
});
