const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("Enter seconds: ", (time)=>{
    let seconds=Number(time);
    if(isNaN(seconds) || seconds<0){
        console.log("Enter a valid number!")
        process.exit();
    }
    console.log("Press 's' and Enter to stop the countdown.\n");
    const countdownInterval=setInterval(()=>{
       console.log("Time left:", seconds);
       seconds--;
         if(seconds<0){
            clearInterval(countdownInterval);
            console.log("Countdown finished!");
            process.exit();
         }
    },1000);
    function checkStop(){
        setTimeout(()=>{
            process.stdin.once("data", (data)=>{
                if(Key.toString().trim()==="s"){
                    clearInterval(countdownInterval);
                    console.log("Countdown stopped by user.");
                    process.exit();
                }else{
                    checkStop();
                }    
                });
        }, 100);
    }
    checkStop();
});

