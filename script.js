let uInput = document.getElementById("un-input").value;
let pInput = document.getElementById("pass-input").value;
let btn = document.getElementById("btn");
let message = document.getElementById("message")

// console.log(pInput);



btn.addEventListener('click', ()=>{
    if(uInput !== "" && uInput == "India") {
        console.log(uInput);
    }else{
        message.style.display = "block";
    }
    
})




// ____________________________________________Practising Callback Hell___________________________________

function getData(data,getNextData) {
    setTimeout(()=>{
        console.log(`Next favourite car:- ${data}`);
        getNextData();
    },1200);
};

function gNFC() {
    setTimeout(()=>{
        console.log(`________________________________________`)
        console.log(`Getting next favourite car...`);
    },600);
}


getData(`Bugatti Chiron`, ()=>{
    gNFC();
    getData(`Koenigsegg Jesko`, ()=>{
        gNFC();
        getData(`Pagani Zonda HP Burchetta`, ()=>{
            gNFC();
            getData(`Peugeot Onyx`, ()=>{
                gNFC();
                getData(`Ultima Rs`,()=>{
                    gNFC();
                    getData(`Hannessay venom F5`, ()=>{
                        gNFC();
                        getData(`Glicknhause 007s`, ()=>{
                            console.log(`That's it...`);
                        })
                    })
                })
            })
        })
    })
})



function greet() {
    setTimeout(hello(), 2000);
}

function hello() {
    console.log("Hello");
}

// _____________________________________Daily Routine with CallBacks__________________________________


function gm(no, cb) {
    setTimeout(()=>{
        console.log(`${no} Good Morning..`);
        cb();
    }, 2000);
}

function brush(no, cb) {
    setTimeout(()=>{
        console.log(`${no} Brushing..`);
        cb();
    }, 2000);
}

function eat(no, cb) {
    setTimeout(()=>{
        console.log(`${no} Eating..`);
        cb();
    }, 2000);
}

function study(no, cb) {
    setTimeout(()=>{
        console.log(`${no} Studying..`);
        cb();
    }, 2000);
}

function gym(no, cb) {
    setTimeout(()=>{
        console.log(`${no} Working Out..`);
        cb();
    }, 2000);
}

function sleep(no, cb) {
    setTimeout(()=>{
        console.log(`${no} Going to sleep..`);
        cb();
    }, 2000);
}

function done() {
   setTimeout(()=>{
    console.log(`Done...`);
   }, 2000)
}

gm(1, ()=>{
    brush(2, ()=>{
        eat(3, ()=>{
            study(4, ()=>{
                gym(5, ()=>{
                    sleep(6, done)
                })
            })
        })
    })
})






function dot1(cb) {
    setTimeout(()=>{
        console.log(".");
        cb();
    }, 800);
};

function dot2(cb) {
    setTimeout(()=>{
        console.log(" .");
        cb();
    }, 800);
};

function dot3(cb) {
    setTimeout(()=>{
        console.log("  .");
        cb();
    }, 800);
};

function dot4(cb) {
    setTimeout(()=>{
        console.log("   .");
        cb();
    }, 800);
};

function dot5() {
    setTimeout(()=>{
        console.log("     .");
        
    }, 800);
};

for(i=0; i<5; i++) {
    dot1(()=>{
        dot2(()=>{
            dot3(()=>{
                dot4(()=>{
                    dot5();
                })
            })
        })
    })
}

//__________________________________________Promises______________________________________

console.log("greetings");

setTimeout(()=>{
    console.log("at last");
}, 2000)

let promise = new Promise((resolve) =>{
    console.log("Hello")
    resolve()
})
console.log(promise);


let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Near Orbit vanguard Alliance");
        resolve("Done!");
    }, 4000)
  
    
})

console.log(p);

p.then((value)=>{
    console.log(`Loading next game....`);
    new Promise((resolve, reject)=>{
       setTimeout(()=>{
        console.log("Modern Combat");
        reject("Not done!")
       }, 2000)
    })
},(error)=>{
    console.log(error + " kaand ho gaya");
}).then((value)=>{
    setTimeout(()=>{
        console.log("we're done")
    }, 2000)
})


console.log(p);
setTimeout(()=>{
    console.log(p)
}, 10500)
function lng() {
    setTimeout(()=>{
        console.log("Loading Next Game....");
}, 200)
}

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Near Orbit Vanguard Alliance 3rd Edition");
        
        resolve("Done");
    }, 1000);
}).then(()=>{
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Modern Combat 5 Blackout");
             resolve("Done!");
        }, 1000)
        
    });
}).then(()=>{
    let p3 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Asphalt Legends Unite");
            resolve("done");
        }, 1000);
    });
}).then(()=>{
    let p4 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Kya pata bc??")
        }, 1000)
    })
})


let pp = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("1- " + "Nova 3");
        resolve(2);
    },1000)

}).then(()=>{
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Modern Combat 5 blackout`);
            resolve(3);
        }, 1000)
    })
    return p2;

}).then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Apshalt legends Unite`);
            resolve("All Done!")

        }, 1000)
    })
}).then((value)=>{
    setTimeout(()=>{
        console.log(value);
    }, 1000)
})