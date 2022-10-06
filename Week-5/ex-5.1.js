const doTask1=()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('Task1')
            rej('Task1 was aborted')
        },Math.random()*1000)
    })
    .then(res=>console.log(res))
  }
  const doTask2=()=>{
      return new Promise((res,rej)=>{
          setTimeout(()=>{
              res('Task2')
              rej('Task2 was aborted')
          },Math.random()*1000)
      })
      .then(res=>console.log(res))
  }
  const doTask3=()=>{
      return new Promise((res,rej)=>{
          setTimeout(()=>{
              res('Task3')
              rej('Task3 was aborted')
          },Math.random()*1000)
      })
      .then(res=>console.log(res))
  }
  
  const completeTasks =async ()=>{
      try{
          const resp1= await doTask1();
          console.log(resp1)
          const resp2= await doTask2();
          console.log(resp2)
          const resp3= await doTask3();
          console.log(resp3)
      }
      catch(error){
  console.log(`complete task error ${error}`)
      }
  }
  
  completeTasks()
  
  // Implementing using Generators
  
  function* generateTasks() {
      try{
      yield doTask1()
      yield doTask2()
      yield doTask3()
      }
      catch(error){
          console.log(Error)
      }
  }
  
  let gen = generateTasks()
  
  
  gen.next().value
  gen.next().value
  gen.next().value
  
  