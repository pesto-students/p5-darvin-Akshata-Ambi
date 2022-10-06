const Fibonacci = (n)=>({
    [Symbol.iterator]: ()=>{
     let i=1, n1=0, n2=0
     return{
         next:()=>{
          if(i++<=n){
              [n1 ,n2]=[n2, (n1+n2)||1];
            return {value:n1, done:false}
          }
          else{
              return{done:true}
          }
         }
     }
    }
})

console.log([...Fibonacci(8)])