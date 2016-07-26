function pattern(n){
 var output="";

 for(var i = 1;i <= n;i++){
   if (i === 1){
     output += "1\n";
   } else {

     output += "1"
   var e = 1;

   while(e < i){
     output += "*";
     e++;
   }
   output +=  i.toString() + "\n";
   }
 }

  //being coder
 return output.trim();
}
