console.log('Starting')

setTimeout(() => {
    console.log('2 Sec Timer')
}, 2000);

setTimeout(() => {
    console.log('0 Sec Timer')
}, 0);

console.log('Stopping')

// call stack & call back , that is why Stopping printed before 0 sec timer 
//After main function executes , then event queue such as setTimeout functions executes 

