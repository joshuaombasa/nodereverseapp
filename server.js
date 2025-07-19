const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());

// Routes
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="Node.js CI/CD & Nginx Reverse Proxy Lab" />
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
            border-radius: 12px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
            max-width: 640px;
            text-align: center;
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
            line-height: 1.6;
        }
        ul {
            text-align: left;
            margin: 1rem auto;
            padding-left: 1.4rem;
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
    <main class="container" role="main" aria-label="Main content">
        <h1>🚀 Node.js App Deployed!</h1>
        <h2>CI/CD & Reverse Proxy Lab</h2>
        <p>This Node.js app has been successfully deployed behind <strong>Nginx</strong> as part of your lab.</p>
        
        <ul>
            <li>Set up a Node.js server with Express</li>
            <li>Serve and style an HTML page</li>
            <li>Configure Nginx as a reverse proxy</li>
            <li>Automate deployment via CI/CD pipelines</li>
        </ul>

        <p>Next steps: connect a database, containerize this app, or deploy it to the cloud</p>

        <footer>Made with Node.js & Express</footer>
    </main>
</body>
</html>`);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
