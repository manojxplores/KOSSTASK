//asynchronous JS allows us to breakdown bigger projects into smaller tasks
//callbacks
//promises
//async/await

//function name(){}

//let name = ()=>{}----->arrow function


// console.log("I")
// console.log("EAT")

// setTimeout(()=>{
//     console.log("ICECREAM")
// },4000)

// console.log("WITH")
// console.log("A SPOON")

//callback--->calling a function inside another function


// function one(call_two){
//     call_two()
//     console.log("step-1");
  
// }

// function two(){
//     console.log("step-2");
// }

// one(two);

let stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}



let order = (fruit_name , call_production)=>{
 setTimeout(()=>{

    console.log(`${stocks.fruits[fruit_name]} was selected`)
    call_production()

    },2000)
  
    
}

let production = ()=>{
    setTimeout(()=>{
        console.log("order received, starting production")

        setTimeout(()=>{
            console.log("fruit has been chopped")
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
                    setTimeout(()=>{
                        console.log("the machine has started");
                        setTimeout(()=>{
                            console.log(`${stocks.holder[0]} was selected`)
                            setTimeout(()=>{
                              console.log(`${stocks.toppings[0]} was added`)
                              setTimeout(()=>{
                                console.log("serve ice-cream")
                              },2000)

                            },3000)

                        },2000)

                },1000)

            },1000)

        },2000)

    },0000);

}

//order(0, production)


let is_shop_open = true;

let order1 = (time, work)=>{

    return new Promise( (resolve , reject)=>{
    
        if(is_shop_open){
            setTimeout(()=>{ resolve( work )}, time)
           
       }

       else{
         reject(console.log("our shop is closed"))

        }
    } )
}

order1(2000 , ()=>console.log(`${stocks.fruits[0]}`));
