function fatchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(null, data);
  }, 1000);
}

function processData(error, data){
    if(error) {
        console.log(`Error: ${error}`);
        return;
    } else {
        console.log(`Fetched Data: ${data.name}, Age: ${data.age}`);    
    }
}

fatchData(processData);
