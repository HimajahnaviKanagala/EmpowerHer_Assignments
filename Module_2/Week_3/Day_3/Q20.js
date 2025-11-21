//1.
function createCounter(){
    let count=0;
    return {
        increment: function(){
            count++;
            console.log(count);
        },
        decrement: function(){
            count--;
            console.log(count);
        },
        reset: function(){
            count=0;
            console.log(count);
        }
    };
}
let counter=createCounter();
counter.increment();
counter.increment();
counter.decrement();

//2.
function createBankAccount(){
    let balance=0;
    return {
        deposit: function(amount){
            if(amount>0){
                balance+=amount;
                console.log(amount);
            }

        },
        withdraw:function(amount){
            if(amount>0 && amount<=balance){
                balance-=amount;
                console.log(amount);
            }else{
                console.log("Insufficient balance");
            }
        },
        getbalance: function(){
            console.log(balance);
        }
    
};
}
let account=createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
console.log(account.balance);
