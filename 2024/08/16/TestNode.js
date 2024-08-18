console.log("Hello World");
function say(word){
    console.log(word)
}
function execute(somefunction,word){
    somefunction(word);
}
execute(say,"word");
execute(function(word){console.log(word)},"hello");