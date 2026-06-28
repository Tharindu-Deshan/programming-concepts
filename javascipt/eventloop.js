console.log("1")

new Promise((resolve,reject)=>{
    resolve();
}).then(()=>{
    console.log("2")
});

setTimeout(()=>{
    console.log("3")
},0);

console.log("4")