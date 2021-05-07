var button=document.querySelector("#button");
button.addEventListener("click",function(){ //function to be invoked when create button is clicked
    let input=document.querySelector("#count").value // gets the count from user
    let color=document.querySelector("#color").value //gets the color from user
    input=Number(input)
    let parent=document.querySelector("#parent") //gets the division inside which boxes must be created
    parent.style.border="2px solid black"
    let lastChildValue=0  //gets the value inside last box of parent division
    if(parent.lastChild!==null){
    lastChildValue=parent.lastChild.innerHTML;
    lastChildValue=Number(lastChildValue)
    }
    for(let index=1;index<=input;index++){
       let newElement=document.createElement("div") //creates new division element
       newElement.classList.add("boxes"); // adds class to the created element
       newElement.style.backgroundColor=color
       newElement.innerHTML=lastChildValue+index
       parent.appendChild(newElement) 
    }

})