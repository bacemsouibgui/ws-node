//console.log('starting Node js introduction')


// creating a simple javascript function
function Sum(a,b) {
    return a+b
}

//console.log(Sum(5,3))

// process.argv
//console.log(process.argv)

//
//let input1= Number(process.argv[2])
//let input2= Number(process.argv[3])
//console.log(Sum(input1,input2))

// modules
// 1/ local modules
// 2/ core module
// 3/ third party module


// 2- core module
let fs= require('fs');
//console.log(fs)
/*fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });*/

  // readdir() methode read the conent of a given directory=> fs.readdir(path, callback func)
  //expl

/*fs.readdir('./', (error, files)=> {
    if(error) console.log('ERROR', error);
    else console.log('Result', files)
})*/

//http module(core module)
// creation de serveur

/*const http= require('http');
const serv= http.createServer((req,res)=> {
    res.write('Hello world')
    res.end()
})
serv.listen(3000, '127.0.0.1', ()=> {
    console.log('test server')
})*/

// 3 / third party module
//expl in react redux, axio, uuid()...install+ import

const uuid= require('uuid')

function createUser(name,age) {
    return {
        name,
        age,
        id: uuid.v4()
    }
}

const name= process.argv[2]
const age= process.argv[3]

const user= createUser(name,age)
//console.log(user)

// 1 /local module
// on va le creer
let myFunction= require('./myFunction')
//console.log(myFunction);
//console.log('my sum function returns', myFunction.sum(3,6));
//console.log('my minus function reurns', myFunction.minus(10,4));
console.log('my hello function reurns', myFunction.sayHello() )
