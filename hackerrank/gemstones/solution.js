function processData(input) {
    var numberOfGems = 0, args = input.split('\n'), numberOfStrings = args[0], arrayOfStrings = args.slice(1);
    var dictionary = {}, array1 = arrayOfStrings.shift().split("");

    for (var i = 0; i < array1.length;i++){
        if (!dictionary[array1[i]]){
            dictionary[array1[i]] = 1;
        }
    }

    var gemCandidates = Object.keys(dictionary);

    arrayOfStrings.forEach(function(string){
        gemCandidates = gemCandidates.filter(function(gem){
            return string.includes(gem);
        });
    });

    numberOfGems = gemCandidates.length;

    console.log(numberOfGems);

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
