// ek array he uski andar ki original properties me loop lagana he 
Array.prototype.exProperty="sandip"
// ex property hoiega
const myarr=[1,2,3,4,5]
for(let v in myarr){
    if(myarr.hasOwnProperty(v)){
        console.log(v);
    }
}
// hasOwnProperty is important property 