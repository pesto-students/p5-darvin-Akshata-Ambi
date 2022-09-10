const add = (a,b)=>{
    return a+b
}

const memoizeAdd = (fn,context)=>{
  const res={}
  return (...args)=>{
    var cache = JSON.stringify(args);
    if(!res[cache]){
     res[cache] = fn.call(context || this, ...args)
    }
    else {
        return res[cache]
    }
  }
}

const memoizedAdd = memoizeAdd(add);
memoizedAdd(100,100)// 200
memoizedAdd(100)//100
memoizedAdd(100,100)// 200 without computing

