var takeANumber = function(katzDeli, newCustomer) {
    
   if (katzDeli.length > 0);
     katzDeli.push(newCustomer);
     return ('Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.')
  }
  
  function nowServing(lineArr){
  if (lineArr.length === 0){
    return "There is nobody waiting to be served!"
  }
  var first = lineArr[0]
  lineArr.shift()
  return "Currently serving " + first + "."
}