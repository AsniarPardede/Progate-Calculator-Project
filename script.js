function insert(num){
    document.form.hasil.value = document.form.hasil.value+num;
}
function equal(){
    const exp = document.form.hasil.value;
    if(exp){
        document.form.hasil.value = eval(exp)
    }
}
function allclear(){
    document.form.hasil.value = " ";
}
function back(){
    const exp = document.form.hasil.value;
    document.form.hasil.value = exp.substring(0,exp.length-1);
}
function percentage(){
    var value = document.form.hasil.value;
    value = value/100;
    document.form.hasil.value = value;
}
