var operation
var resulted
var inp1
var inp
var text
var text1
function clicked(val)
{
    if (resulted==true) {
        document.getElementById('screen').value=""
        resulted=false
    }
    else{
    document.getElementById('screen').value+=val
}
}
function addClicked(op){
    inp1=document.getElementById('screen').value
    inp=parseInt(inp1)
    document.getElementById('screen').value=""
    operation=op
    console.log(operation);
}
function cleared(){
    document.getElementById('screen').value=""
}
function equalClicked(){
    text1=document.getElementById('screen').value
    text=parseInt(text1)
    if (operation === "+") {
        var result=text+inp
    }
    if (operation === "*") {
        var result=text*inp
    }
    if (operation === "-") {
        var result=text-inp
    }
    if (operation === "/") {
        var result=text/inp
    }    
    document.getElementById('screen').value=result
    Boolean(resulted=true)
}