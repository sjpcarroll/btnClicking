howLong('Hello World');

function howLong(foo){
  var timeStart = performance.now();
  hello();
  var timeEnd = performance.now();
  console.info('%cReturned in ' + (timeEnd - timeStart) + ' ms.',"color:blue");
}

function hello(){
  console.log("Hello World");
}
