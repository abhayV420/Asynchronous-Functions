// let uInput = document.getElementById("un-input").value;
// let pInput = document.getElementById("pass-input").value;
// let btn = document.getElementById("btn");
// let message = document.getElementById("message")

// // console.log(pInput);



// btn.addEventListener('click', ()=>{
//     if(uInput !== "" && uInput == "Abhay") {
//         console.log(uInput);
//     }else{
//         message.style.display = "block";
//     }
    
// })




// ____________________________________________Practising Callback Hell___________________________________

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

//_____________________________________Daily Routine with CallBacks__________________________________


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



