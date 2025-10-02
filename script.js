
var tdElement = document.getElementsByTagName('td');
var tdLength = tdElement.length;
for(var i = 0; i < tdLength; i++)
{
    
   tdElement[i].style.color = 'gray';
}

const mypara=document.querySelector(".name")

// mypara.setAttribute("align", "center")
// alert(mypara.setAttribute('align'));
// console.log(mypara)


mypara.removeAttribute("style","color")
console.log(mypara);
 var newText = document.createTextNode('This is my heading');
 console.log(newText);
 
 var newElem = document.createElement('h1');
 var newText = document.createTextNode('This is my heading');
 newElem.appendChild(newText);
 document.body.appendChild(newElem)

 var d = new Date();
//  console.log(d);
 
 var mytime =d.getHours();
document.write(mytime);