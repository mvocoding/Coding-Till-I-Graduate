const http = require('http');
const crypto = require('crypto');
const fs = require('fs').promises; // Use fs.promises to get promise-based methods
const path = require('path');

const generateUID = () => {
    return crypto.randomBytes(16).toString('hex');
}

const server = http.createServer(async (req, res) => {
    const { method, url } = req;
    console.log(method, url);

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');

        try {
            const [htmlBuffer, tasksJSON] = await Promise.all([
                fs.readFile(path.join(__dirname, 'index.html')),
                fs.readFile('tasks.json', 'utf-8').catch(() => '[]') // Fallback if no file
            ]);

            const tasks = JSON.parse(tasksJSON);
            const tasksHTML = tasks.map(task => `
<li>
    <span>${task.name}</span>
    <button type="button" class="btnDelete" data-id="${task.id}">Delete</button>
</li>`).join('');
            const finalHTML = htmlBuffer.toString().replace('{{TASKS}}', tasksHTML);
            res.end(finalHTML);
        } catch (err) {
            res.statusCode = 500;
            res.end('Error loading data');
        }
    }

    if (url === '/addtask' && method === 'POST') {
        console.log('Received POST request at /addtask');

        const chunksData = [];
        req.on('data', (chunk) => {
            chunksData.push(chunk);
        });

        req.on('end', async () => {
            const taskNew = Buffer.concat(chunksData).toString();
            console.log('Received task data:', taskNew);

            const taskName = new URLSearchParams(taskNew).get('taskName');
            console.log('Parsed task name:', taskName);

            if (!taskName) {
                res.statusCode = 400; // Bad request
                res.end('Task name is required');
                return;
            }

            try {
                const data = await fs.readFile('tasks.json', 'utf-8');
                let tasks = [];
                if (data) {
                    tasks = JSON.parse(data);
                }

                tasks.push({
                    id: generateUID(),
                    name: taskName
                });

                await fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2));

                console.log('Task saved successfully!');

                res.statusCode = 302; // Redirect
                res.setHeader('Location', '/'); // Redirect to home page after saving task
                res.end(); // End the response
            } catch (err) {
                console.log('Error reading or writing tasks.json:', err);
                res.statusCode = 500;
                res.end('Error saving task');
            }
        });
    }

    if (url.startsWith('/delete') && method === 'POST') {
        try {
            const [,, taskID] = url.split('/');
            console.log(`Deleting Task ${taskID}`);

            const data = await fs.readFile('tasks.json', 'utf-8');
            let tasks = JSON.parse(data);

            tasks = tasks.filter((task) => task.id !== taskID);
            await fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2));
            res.statusCode = 200;
            res.end();
        }
        catch (err) {
            res.statusCode = 500;
            res.end();
        }
    }
});

server.listen(3000);
