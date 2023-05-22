
let Thanos_is_alone = true;

function time(ms){
    return new Promise((resolve, reject)=>{
        if(Thanos_is_alone){

           setTimeout(resolve, ms)
        }
        else{
            reject(console.log("we lost"))
        }
    }
    )
}

async function attack(){
    try{
        await time(2000)
        console.log("Order received from Iron Man")
        await time(5000)
        console.log("Launch the operation....")
        await time(1000)
        console.log("Spiderman attacks Thanos")
        await time(2000)
        console.log("Mr.Strange !! It's your turn....")
        await time(2000)
        console.log("Drax !! Get hold of Thanos's hand..")
        await time(3000)
        console.log("Mantis...Let's give Thanos some nap!!")
        }
        catch(error){
            console.log("we lost")
        }
}
attack();