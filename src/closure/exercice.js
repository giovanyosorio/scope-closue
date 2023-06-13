function sumWithClosure(firstNum) {
    return function (secNum) {
      return firstNum + (secNum ?? 0);
    }
  }
  
 console.log(sumWithClosure(2)(3)); 