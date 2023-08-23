// Q . custom foreach loop implement karke bataiye 



// Basic 

Array.prototype.customForEachOne= function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}

// Advance 

Array.prototype.forEachtwo= function(callback,thisscontext){
    if(typeof callback !== 'function'){
throw `not a function`
    }
    const length = this.length
    let i=0
    while(i< length){
        if(this.hasOwnProperty){
            callback.call()
        }
    i++
    }
}