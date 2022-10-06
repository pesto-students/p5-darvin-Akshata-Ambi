hasDuplicate=arr=>new Set(arr).size!==arr.length
console.log(hasDuplicate([1,7,-1,4,4]))//true
console.log(hasDuplicate([2,6,0,3]))//false