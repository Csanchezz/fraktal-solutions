function greet(callback) {
    console.log('hello');
    var data = {
        name: 'Cyny',
        lastname: 'Lion'
    }
    callback(data);
}

function called(name) {
    console.log(`Callback was invoked by ${name.name + " " + name.lastname}`);
}

greet(called);