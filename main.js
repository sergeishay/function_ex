//ex 1 
const calcAge = function(top , bottom){
    console.log(top - bottom);   
}
const age = calcAge(2017, 1989)
//ex 2
const ageTest = function(num){
      const Year = 2020;
      const newLocal = Year - num;
      const newLocal1 = newLocal+1;
      console.log("your age is " + newLocal + " or " + newLocal1)
    }
    const old = ageTest(2016);
    
//ex 3 
const isEven = function(num){
    if(num%2 === 0){
        return true;
    }else{
        return false
    };
};
// const nums = isEven(4)

// ex 4 
const oddArr = function(arr){
      for(let i in arr){
         if(isEven(arr[i])){
            console.log(arr[i])  
         }
      }
}
const array = oddArr([1,4,7,8,3,12,51,44,42,36]);

//ex 5
const checkExists = function(arr , num ){
      for(let i in arr){
         if(arr[i]===num){
            return true
         }
        }
        return false
    }
const tr = checkExists([4, 5, 6], 8);
console.log(tr)

//ex 6
let calculator = {
    add : function(num1 , num2){
         const  addTo = num1+num2 ;
         return addTo
    }, 
    subtract : function(num1 , num2){
         const  subOf = num1-num2 ; 
         return subOf
    }
};
const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);
console.log(calculator.add(result1, result2)) //should print 42

//ex 7 
const increaseByNameLength = function(money,name){
    money = money*name.length
    return money
}
const makeRegal = function(name){
    name = "His Royal Highness," + name
    return  name
};
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name);
    console.log(name + " has " + money + " gold coins")
};
turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

// ex 8
