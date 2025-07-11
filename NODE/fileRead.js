const fs = require('fs/promises');
const filename = 'data.txt';
async function readFile(filename) {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        console.log(data);
        return data;
    } catch (error) {
        console.error(`Error reading file from disk: ${error}`);
        throw error;
    }
}

readFile(filename);