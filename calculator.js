
var addActivityButton = document.getElementById('topButton')
var weightedButton = document.getElementById('leftButton')
var meanButton = document.getElementById('rightButton')
var inputs = document.getElementsByClassName('textInput')
var percentCol = document.getElementsByClassName('percentage')
var rowAmount = 4;

addActivityButton.addEventListener("click", addRow);
meanButton.addEventListener("click", giveMean);
weightedButton.addEventListener("click", giveWeight);
document.addEventListener("keyup", givePercentage);

function addRow(){
    rowAmount += 1;
    var table = document.getElementById("myTable")
    var row = table.insertRow(rowAmount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    var input1= document.createElement("input")
    input1.classList.add("textInput")
    var input2= document.createElement("input")
    input2.classList.add("textInput")
    input2.classList.add("slashpara");
    var input3= document.createElement("input")
    input3.classList.add("textInput")
    input3.classList.add("slashpara");
    
    var para= document.createElement("p")
    para.classList.add("percentage")
    var slash = document.createElement("p");
    slash.classList.add("slashpara");
    slash.textContent= " / ";
    var frag = document.createDocumentFragment();
    frag.appendChild(input2);
    frag.appendChild(slash);
    frag.appendChild(input3);

    cell1.innerHTML = "Activity " + rowAmount;
    cell2.innerHTML = "A" + rowAmount;
    cell3.appendChild(input1);
    cell4.appendChild(frag);
    cell5.appendChild(para);

    
}

function giveMean(){
document.getElementById("result").innerHTML = calculateMean();
}

function calculateMean(){
    var x = 0;
    var y = 0;
   for (var i = 1; i< inputs.length; i++){
       if (i%3 == 1){
           if(inputs[i].value != "" && inputs[i+1].value != ""){
               x+= (inputs[i].value / inputs[i+1].value);
               y+= 1;     
            } 
        }
    }
    var mean = Math.round(100*x/y);
   
    return mean;
}
function giveWeight(){
    document.getElementById("result").innerHTML = calculateWeight();
    }
    
    function calculateWeight(){
        var x = 0;
        var y = 0;
       for (var i = 0; i< inputs.length; i++){
           if (i%3 == 0){
               if (inputs[i].value != ""){
            
                   if(inputs[i+1].value != "" && inputs[i+2].value != ""){
                       x+= (inputs[i].value *  (inputs[i+1].value / inputs[i+2].value));
                       y+= (inputs[i]).value * 1;
                    }    
                }
                else{
                    if(inputs[i+1].value != "" && inputs[i+2].value != ""){
                        x+= (inputs[i+1].value / inputs[i+2].value);
                        y+= 1;
                     }    

                }
            }
        }
        var weighted = Math.round(100*x/y);
       
        return weighted;
    }



function givePercentage(){
    for (var i = 0 ; i< percentCol.length; i++ ){
    percentCol[i].innerHTML = calculatePercentage(i*3+1);
    }

}

function calculatePercentage(i) {

    if(inputs[i].value != "" && inputs[i+1].value != ""){
    var x = (inputs[i].value / inputs[i+1].value) * 100;
    return x;
    }
    else{
        return "";
    }

}
