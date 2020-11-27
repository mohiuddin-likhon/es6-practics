const person ={ name:'Jack william',age:17,job:'facebooer',gfName:'komola',address:'kochukhet',phone:'0171313131'};
const {phone,gfName,address} = person;
// console.log(person.gfName);
// console.log(person.gfName);
// console.log(person.gfName);

// const gfName = person.gfName;
// const phone = person.phone;
//kono object/arry theke,er propertiy ke , variable er vale hishebe declear korar short cut way
//Destructure, Object, array, destructure complex object


const friends = ['Mojammel','shojib','shomik','maruf',];
const [goodFriend,luchifriend,...restFriend] = friends;
console.log(restFriend)

// console.log(gfName,phone,address);
// console.log(gfName);
// console.log(gfName);
// console.log(gfName);