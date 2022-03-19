const obj = {key1 : "value1", key2 : "value2", key3 : "value3"};


const {key1:v1, key2,  ...myarr}=obj;
console.log(myarr,v1,key2)