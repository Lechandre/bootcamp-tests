

module.exports = function countAllFromTown(regNoString, townFrom){

    //function countAllFromTown(regNoString, townFrom) {
        let counter = 0;
        const list = regNoString.split(',');
        
        
        for (var i=0;i<list.length;i++) {
          let currentList = list[i].trim();
          if (currentList.startsWith(townFrom)) {
          console.log(currentList.trim());
            counter++;
            } 
          }
        return counter;
        }
    //you functions logic here
//}