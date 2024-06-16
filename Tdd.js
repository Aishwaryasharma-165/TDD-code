function add(numbers)
{
  if(numbers.length === "")
    {
      return 0;
    }
    let delimiter="";
  if(numbers.startsWith("//")){
    const delimiterEndIndex=numbers.indexOf("\n");
    delimiter=new RegExp(numbers.substring(2,delimiterEndIndex));
    numbers=numbers.substring(delimiterEndIndex+1);
     numbers=numbers.split(delimiter).join(",");
  }
    delimiter=/,|\n/;
  const numberArray=numbers.split(delimiter);
  let sum=0;
  let negativeNumbers=[];
  for(let num of numberArray){
    if(num.trim() === ''){
      continue;
    }
    let number=parseInt(num);
    if(isNaN(number)){
      continue;
    }
    if(number<0){
      negativeNumbers.push(number);
    }
    else{
      sum+=number;
    }
  }
  if(negativeNumbers.length>0){
    throw new Error("negative numbers not allowed : "+ negativeNumbers.join(","));
  }
  return sum;
}

const numbers="//;\n1;2;3;4,7,9,8";
try{
    const result=add(numbers);
    console.log(result);
}catch(e){
    console.error(e.message);
}
