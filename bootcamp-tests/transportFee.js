

module.exports = function transportFee(shift){

    //function transportFee(shift) {
        if (shift.startsWith('morning')) {
          return 'R20';
        } else if (shift.startsWith('afternoon')) {
          return 'R10';
        } else if (shift.startsWith('nightshift')) {
          return 'free';
        }
      }
    //you functions logic here
//}