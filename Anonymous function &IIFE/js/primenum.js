const isPrime=val=>
    { 
        if (val<=1)
            {
                return false;
            }
        for(let factor=2;factor<val;factor++)
            {
                if(val%factor===0)
                {
                    return false
                }
                

            }
            return true;
    }
const primeNumTill=function(till)
{
    
     let primeNumbers=[]
    for(value=2;value<=till;value++)
        {
            if(isPrime(value))
                {
                    primeNumbers.push(value)
                }
        }
        return primeNumbers
}
console.log(primeNumTill(100))