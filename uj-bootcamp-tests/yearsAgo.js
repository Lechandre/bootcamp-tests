function yearsAgo(year) {
    var todayDate = new Date();
    var currentYear = todayDate.getFullYear();
    var theMath = currentYear - year;
    return theMath;
  
  //console.log(todayDate.getFullYear());
  }