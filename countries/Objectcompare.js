var obj1={
    name:"person",
    age:"5"
};
var obj2={
    age:"5",
    name:"person",
};

let flag=true;
let obj
if(Object.keys(obj1).length >Object.keys(obj2).length)
{
obj=obj1;
}
else{
    obj=obj2;
}
for(var x in obj )
{
    if(obj1[x] !== obj2[x])
    {
        flag=false;
        break;
    }
}  

    console.log(flag);
