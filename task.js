


// let order = (call_launch)=>{
// setTimeout(()=>{
//     console.log("Order received from Iron Man")
//     call_launch();
//     },3000)  
// }

// let launch_battle= ()=>{
// setTimeout(()=>{
//     console.log("Launch the operation....")
//          setTimeout(()=>{
//             console.log("Spiderman attacks Thanos");
//                 setTimeout(()=>{
//                     console.log("Mr.Strange !! It's your turn....");
//                         setTimeout(()=>{
//                             console.log("Drax !! Get hold of Thanos's hand..")
//                                 setTimeout(()=>{
//                                     console.log("Mantis...Let's give Thanos some nap!!")
//                                 },3000)
//                         },2000)

//                 },2000)

//         },1000)

// },5000);
   
// }

// order(launch_battle);


let Thanos_is_alone = true;

let order = ( time , action )=>{

    return new Promise((resolve , reject)=>{
        if(Thanos_is_alone){

            setTimeout(()=>{
                resolve(action())

            },time)
           
        }
        else{
            reject(console.log("we lost"))
        }
    })
}

order(2000,()=>console.log("Order received from Iron Man"))

.then(()=>{
    return order(5000, ()=>console.log("Launch the operation...."))
})

.then(()=>{
    return order(1000, ()=>console.log("Spiderman attacks Thanos"))
})

.then(()=>{
    return order(2000, ()=>console.log("Mr.Strange !! It's your turn...."))
})

.then(()=>{
    return order(2000, ()=>console.log("Drax !! Get hold of Thanos's hand.."))
})

.then(()=>{
    return order(3000, ()=>console.log("Mantis...Let's give Thanos some nap!!"))
})

.catch(()=>{
    console.log("We lost")
})

