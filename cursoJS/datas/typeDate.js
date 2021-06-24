var myDate = new Date();

console.log(myDate);

console.log('getDay() -> '+myDate.getDay());
console.log('getDate() -> '+myDate.getDate());
console.log('getMonth() -> '+myDate.getMonth());
console.log('getfullYear() -> '+myDate.getFullYear());

console.log('getHours() -> '+myDate.getHours());
console.log('getMinutes() -> '+myDate.getMinutes());
console.log('getSeconds() -> '+myDate.getSeconds());
console.log('getTime() -> '+myDate.getTime());

myDate.setTime(0);
console.log(myDate);

myDate.setDate(19);
console.log(myDate);

myDate.setYear(1971);
console.log(myDate);

console.log(new Date(2021,06,22,10,50,17));