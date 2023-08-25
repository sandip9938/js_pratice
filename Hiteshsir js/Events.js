// Events 

// onclick 
function click(e) {
    console.log("click");
    }
    document.addEventListener('click', function (event){
        console.log(`Click event: ${JSON.stringify({type : 'click'})}`);
    })


    // dblClick 
    document.addEventListener('dblclick', function(){
        console.log(`${JSON.stringify({type:'dblclick'})}`)
    })


    // as like many eventlistener in events 
    document.addEventListener('mousemove', function (){})

    // Event list 
    // const EVENTS = [
    //     'abort',
    //     'animationcancel',
    //     'animationend',
    //     'animationiteration',
    //     'auxclick',
    //     'blur',
    //     'canplay',
    //     'canplaythrough',
    //     'change',
    //     'compositionstart',
    //     'compositionupdate',
    //     'compositionend',
    //     'cuechange',
    //     'close',
    //     e.t.c ]



// type ,timestamp, deafulrprevent 
const mouseEvent = new MouseEvent('mouseenter');
console.dir(mouseEvent);
document.dispatchEvent(mouseEvent);// dispatching the event

















