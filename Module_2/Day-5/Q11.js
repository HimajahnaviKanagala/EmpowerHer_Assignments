function isPrime(num) {
  if (num < 2) return false;  
  for (let i = 2; i*i <= num; i++) {
    if (num % i === 0) return false; 
  }
  return true; 
}
console.log(isPrime(11)); 

function isEvenOdd(num){
  if(num%2==0) return "Even";
  else return "Odd";
}
console.log(isEvenOdd(10));

