function getNumber(num)
{
    var results = document.getElementById("result");
    results.value += num ;
}
function clearResult(){
    document.getElementById("result").value="";
    
}
function getResult(){
    var result=document.getElementById("result");
    result.value = eval(result.value);
}

