const { read } = require('fs');
const fs = require('fs/promises');
const filename = 'data.txt';

async function readFile(filename) {
    let data;
    try {
        data = await fs.readFile(filename, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
    return data;
}


readFile(filename)