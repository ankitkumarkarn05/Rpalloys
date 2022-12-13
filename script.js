console.log("hii")
var twenty = document.getElementById("twenty")
var twentythree = document.getElementById("twentythree")
var fifty = document.getElementById("fifty")
var visi = document.getElementById("visi")

// var ftsize = document.querySelector(".visi")
var initval1= 1
 var finalval1 = 20


var initval2 = 1
var finalval2 = 23


var initval3= 1
var finalval3 = 50

var observer = new IntersectionObserver(function(entries) {
if(entries[0].isIntersecting === true){




    setInterval(()=>{

        initval1++
        if(initval1<=finalval1){
            twenty.innerHTML=initval1
        
        }
        if(initval1==finalval1){
            twenty.innerHTML=initval1+ `<span class="plussign">+</span>`
        
        }
        
        },90)
        
        setInterval(()=>{
        
            initval2++
            if(initval2<=finalval2){
                twentythree.innerHTML=initval2
            
            }
            if(initval2==finalval2){
                twentythree.innerHTML=initval2+ `<span class="plussign">+</span>`
            
            }
            
            },90)
        
            setInterval(()=>{
        
                initval3++
                if(initval3<=finalval3){
                    fifty.innerHTML=initval3
                
                }
                if(initval3==finalval3){
                    fifty.innerHTML=initval3+ `<span class="plussign">+</span>`
                
                }
                
                },90)
		console.log('Element is fully visible in screen');

}


}, { threshold: [1] });

observer.observe(visi);




