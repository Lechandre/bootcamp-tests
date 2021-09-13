



const parameter1 = 'CJ 345 123, CK 345, CJ 123';
const parameter = 'CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123';

module.exports = function countAllPaarl(itemString){
//function countAllPaarl(itemString) {
  let counter = 0;
  const list = itemString.split(',');
  
  for (var i=0;i<list.length;i++) {
    let currentList = list[i].trim();
    if (currentList.startsWith('CJ')) {
    console.log(currentList.trim());
      counter++;
      
  } 
    } 
  return counter;
}
const result1 = countAllPaarl(parameter1);
const result = countAllPaarl(parameter);
console.log(result1);
console.log(result);
    //you functions logic here
//}