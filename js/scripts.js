// business logic
function breaking(binary){
  var result=0;
  var digits = binary.split("").reverse();
  for(var i=0; i<digits.length; i++){
    result += digits[i] * Math.pow(2, i);
  }
  return result;
}

function hexa(nums){
  var result=0;
  var digits = nums.split("").reverse();
  for(var i=0; i<digits.length; i++){
    if(digits[i]==="a"){digits[i]=10;}
    if(digits[i]==="b"){digits[i]=11;}
    if(digits[i]==="c"){digits[i]=12;}
    if(digits[i]==="d"){digits[i]=13;}
    if(digits[i]==="e"){digits[i]=14;}
    if(digits[i]==="f"){digits[i]=15;}
    result += digits[i] * Math.pow(16, i);
  }
  return result;
}
// user interface logic
$(document).ready(function() {
  $("form#Decimal").submit(function(event) {
    event.preventDefault();
    var words = $("input#words").val();
    var hex = $("input#hex").val();
    var biresult = breaking(words);
    var hexresult = hexa(hex);

    $(".bioutput").text(biresult);
    $(".hexoutput").text(hexresult);
    $("#result").show();
  });
});
