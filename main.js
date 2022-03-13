var a=[true, 123, "olma", null, false, "anor ", true, null,null];

for(i=0; i<a.length; i++){
    if(typeof a[i]==="string"){
        delete a[i];
    }
}

console.log(a);