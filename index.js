function myFunction(n){
    var f = [];
    for(i=0; i<=n ; i++){
        f.push((i<2) ? i : f[i-1] + f[i-2]);
    }
    return f;
}
function btnclicked (e) {
    var n = Number(prompt('please enter your number'));
    alert(myFunction(n));
}
btn.addEventListener('click',btnclicked);