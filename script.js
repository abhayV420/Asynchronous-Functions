// let uInput = document.getElementById("un-input").value;
// let pInput = document.getElementById("pass-input").value;
let btn = document.getElementById("btn");
// let message = document.getElementById("message")

// // console.log(pInput);



// btn.addEventListener('click', ()=>{
//     if(uInput !== "" && uInput == "India") {
//         console.log(uInput);
//     }else{
//         message.style.display = "block";
//     }
    
// })




// // ____________________________________________Practising Callback Hell___________________________________

// function getData(data,getNextData) {
//     setTimeout(()=>{
//         console.log(`Next favourite car:- ${data}`);
//         getNextData();
//     },1200);
// };

// function gNFC() {
//     setTimeout(()=>{
//         console.log(`________________________________________`)
//         console.log(`Getting next favourite car...`);
//     },600);
// }


// getData(`Bugatti Chiron`, ()=>{
//     gNFC();
//     getData(`Koenigsegg Jesko`, ()=>{
//         gNFC();
//         getData(`Pagani Zonda HP Burchetta`, ()=>{
//             gNFC();
//             getData(`Peugeot Onyx`, ()=>{
//                 gNFC();
//                 getData(`Ultima Rs`,()=>{
//                     gNFC();
//                     getData(`Hannessay venom F5`, ()=>{
//                         gNFC();
//                         getData(`Glicknhause 007s`, ()=>{
//                             console.log(`That's it...`);
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })



// function greet() {
//     setTimeout(hello(), 2000);
// }

// function hello() {
//     console.log("Hello");
// }

// // _____________________________________Daily Routine with CallBacks__________________________________


// function gm(no, cb) {
//     setTimeout(()=>{
//         console.log(`${no} Good Morning..`);
//         cb();
//     }, 2000);
// }

// function brush(no, cb) {
//     setTimeout(()=>{
//         console.log(`${no} Brushing..`);
//         cb();
//     }, 2000);
// }

// function eat(no, cb) {
//     setTimeout(()=>{
//         console.log(`${no} Eating..`);
//         cb();
//     }, 2000);
// }

// function study(no, cb) {
//     setTimeout(()=>{
//         console.log(`${no} Studying..`);
//         cb();
//     }, 2000);
// }

// function gym(no, cb) {
//     setTimeout(()=>{
//         console.log(`${no} Working Out..`);
//         cb();
//     }, 2000);
// }

// function sleep(no, cb) {
//     setTimeout(()=>{
//         console.log(`${no} Going to sleep..`);
//         cb();
//     }, 2000);
// }

// function done() {
//    setTimeout(()=>{
//     console.log(`Done...`);
//    }, 2000)
// }

// gm(1, ()=>{
//     brush(2, ()=>{
//         eat(3, ()=>{
//             study(4, ()=>{
//                 gym(5, ()=>{
//                     sleep(6, done)
//                 })
//             })
//         })
//     })
// })






// function dot1(cb) {
//     setTimeout(()=>{
//         console.log(".");
//         cb();
//     }, 800);
// };

// function dot2(cb) {
//     setTimeout(()=>{
//         console.log(" .");
//         cb();
//     }, 800);
// };

// function dot3(cb) {
//     setTimeout(()=>{
//         console.log("  .");
//         cb();
//     }, 800);
// };

// function dot4(cb) {
//     setTimeout(()=>{
//         console.log("   .");
//         cb();
//     }, 800);
// };

// function dot5() {
//     setTimeout(()=>{
//         console.log("     .");
        
//     }, 800);
// };

// for(i=0; i<5; i++) {
//     dot1(()=>{
//         dot2(()=>{
//             dot3(()=>{
//                 dot4(()=>{
//                     dot5();
//                 })
//             })
//         })
//     })
// }



// console.log("greetings");

// setTimeout(()=>{
//     console.log("at last");
// }, 2000)

// let promise = new Promise((resolve) =>{
//     console.log("Hello")
//     resolve()
// })
// console.log(promise);


// let p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Near Orbit vanguard Alliance");
//         resolve("Done!");
//     }, 4000)
  
    
// })

// console.log(p);

// p.then((value)=>{
//     console.log(`Loading next game....`);
//     new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//         console.log("Modern Combat");
//         reject("Not done!")
//        }, 2000)
//     })
// },(error)=>{
//     console.log(error + " kaand ho gaya");
// }).then((value)=>{
//     setTimeout(()=>{
//         console.log("we're done")
//     }, 2000)
// })


// console.log(p);
// setTimeout(()=>{
//     console.log(p)
// }, 10500)
// function lng() {
//     setTimeout(()=>{
//         console.log("Loading Next Game....");
// }, 200)
// }

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Near Orbit Vanguard Alliance 3rd Edition");
        
//         resolve("Done");
//     }, 1000);
// }).then(()=>{
//     let p2 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Modern Combat 5 Blackout");
//              resolve("Done!");
//         }, 1000)
        
//     });
// }).then(()=>{
//     let p3 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Asphalt Legends Unite");
//             resolve("done");
//         }, 1000);
//     });
// }).then(()=>{
//     let p4 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Kya pata bc??")
//         }, 1000)
//     })
// })


// let pp = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("1- " + "Nova 3");
//         resolve(2);
//     },1000)

// }).then(()=>{
//     let p2 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`Modern Combat 5 blackout`);
//             resolve(3);
//         }, 1000)
//     })
//     return p2;

// }).then(()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`Apshalt legends Unite`);
//             resolve("All Done!")

//         }, 1000)
//     })
// }).then((value)=>{
//     setTimeout(()=>{
//         console.log(value);
//     }, 1000)
// })


// let newP = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Lancer Evolution");
//         resolve(2);
//     }, 1000)
// }).then((value)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("ferrari 599xx evo");
//             resolve(3)
//         }, 1000);
//     })
    
// }).then((value)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Ultima Rs");
//             resolve(4)
//         }, 1000);
//     })
    
// }).then((value)=>{
//    setTimeout(()=>{
//     console.log("All Done");
//    }, 1000)
// })

// function asyncFunc(){

    
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 console.log("Printed data in 2 sec");
//                 resolve("success");
//             }, 1500)
//         })
        
        
    
// }  

// asyncFunc().then((value)=>{
//     setTimeout(()=>{
//         console.log(value);
//     }, 400)
// })



// function getData(data){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`Your Data is:- ${data}`);
//             resolve("success");
//         }, 1500)
//     })
    
// };

//                 ______________________________Promise Chaining 1st method______________________________

// getData(1).then((value)=>{
//     console.log("success");
//     getData(2).then((value)=>{
//         console.log(value);
//         getData(3).then((value)=>{
//             console.log(value);
//             getData(4).then((value)=>{
//                 console.log(value)
//             })
//         })
//     })
// });


//                 ______________________________Promise Chaining 2nd method______________________________

// getData(1).then((value)=>{
//     console.log(value)
//     return getData(2);
// }).then((value)=>{
//     console.log(value)
//     return getData(3);
// }).then((value)=>{
//     console.log(value)
//     return getData(4);
// }).then((value)=>{
//     console.log(value);
// }) 

//                  ______________________________async await_____________________________________

// function getData(data){
//    return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log(`Your data is: ${data}`);
//         resolve("success")
//     }, 2000);
//    })
// }

// async function api() {
//   await  getData(1);
//   await  getData(2);
//   await  getData(3);
//   await  getData(4);
//   await  getData(5);
// }

// api()

// function first(game){
//     return new Promise((resolve, reject)=>{
//         console.log(`Your 1st favourite gameloft game is:- ${game}`);
//     })
// }

// function glGames(game) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`Your next favourite Gameloft game is:- ${game}`);
//             resolve("success");
//         }, 1200);
//     });
// };

// //               _____________________1st method to call an async function_________________________

// async function gApi() {
//     first(`Near orbit vanguard Alliance 3`);
//     console.log(`Getting next data...`)
//     await glGames(`Modern combat 5 Blackout`);
//     console.log(`Getting next data...`)
//     await glGames(`Asphalt Legends Unite`);
//     console.log(`Getting next data...`)
//     await glGames(`Near Orbit Vanguard Alliance 2`);
//     console.log(`Getting next data...`)
//     await glGames(`Modern combat 4 zero hour`);
//     console.log(`Getting next data...`)
//     await glGames(`Asphalt 8 Airbourne`);
//     console.log(`Getting next data...`)
//     await glGames(`The dark Knight Rises`);
//     console.log(`Getting next data...`)
//     await glGames(`The Amazing Spider-man 2`);
//     console.log(`Getting next data...`)
//     await glGames(`Modern Combat 3 fallen nation`);
//     console.log(`Getting next data...`)
//     await glGames(`James cameroon's Avatar`);
//     console.log(`Getting next data...`)
//     await glGames(`Rainbow Six: Shadow vanguard`);
//     console.log(`Getting next data...`)
//     await glGames(`Near Orbit vanguard Alliance`);
    
// }

// gApi();

//               ____________________2nd and simpler method to call an async function_______________


// (async () =>{
//     first(`Near orbit vanguard Alliance 3`);
//     console.log(`Getting next data...`)
//     await glGames(`Modern combat 5 Blackout`);
//     console.log(`Getting next data...`)
//     await glGames(`Asphalt Legends Unite`);
//     console.log(`Getting next data...`)
//     await glGames(`Near Orbit Vanguard Alliance 2`);
//     console.log(`Getting next data...`)
//     await glGames(`Modern combat 4 zero hour`);
//     console.log(`Getting next data...`)
//     await glGames(`Asphalt 8 Airbourne`);
//     console.log(`Getting next data...`)
//     await glGames(`The dark Knight Rises`);
//     console.log(`Getting next data...`)
//     await glGames(`The Amazing Spider-man 2`);
//     console.log(`Getting next data...`)
//     await glGames(`Modern Combat 3 fallen nation`);
//     console.log(`Getting next data...`)
//     await glGames(`James cameroon's Avatar`);
//     console.log(`Getting next data...`)
//     await glGames(`Rainbow Six: Shadow vanguard`);
//     console.log(`Getting next data...`)
//     await glGames(`Near Orbit vanguard Alliance`);
    
// })();


//                            ___________________Short Method exapmle__________________

                                            //  (async ()=>{

                                            //  })

                                            
// It's called the IIFE: Immediately Invoked Function expression, which can be executed only once,means you can't call it again and in order to use it again, you gonna have to copy/paste it.

const URL = "https://cat-fact.herokuapp.com/facts";
let cat = document.getElementById("cat");


// let getapi = async ()=>{
//     console.log(`getting data...`)
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[1].text);

// }

// getapi();


//           ______________________with async/await_____________________


// let printQuote = async ()=>{
//     cat.innerText = "Getting Fact...";
//     let response = await fetch(URL);
//     let data = await response.json();
//     let quote = data[1].text;
//     cat.innerText = quote;
// }


//             __________________with Promise/then()___________________

// function printQuote(){
//     fetch(URL).then((response)=>{
        
//         return response.json();
//     }).then((response)=>{
//         console.log(`Parsing data...`)
//         let quote = response[2].text;
//         cat.innerText = quote;
//     })
// }

btn.addEventListener('click', printQuote);


