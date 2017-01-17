/*********************************************
        Object creation and retrieval
 ********************************************/

//The reference book might show property names with '-'. Change it to '_' or Camel case the names.

var stooge={
	"first_name": "David",
	"last_name": "Miller",
	"address":{
		"line1":"abc",
		"line2":"def",
		"line3":"23123123",
		"line4":{
			"innerProp":"success"
		}
	},
	"age":21
};

document.writeln("||");
var test= stooge.first_name;//stooge["first_name"];
document.writeln(test);
document.writeln(""+stooge.age);
document.writeln(stooge.address.line4.innerProp);
document.writeln(stooge.line3);                         //this property exists in object 'address', not 'stooge'

/*********************************************
          Object Update and reference
 ********************************************/

//if the property already exists, then just assign a different value to it.
//else just create a new property

document.writeln("||");
stooge.first_name='Kim';        //exists
stooge.middle_name='Hall';      //new property

document.writeln(stooge.first_name);
document.writeln(stooge.middle_name);

//objects are passed by reference, not copied

var refer=stooge;

refer.email="ref@gmail.com";
refer.email="ref@gmail.com"

document.writeln(stooge.email);
document.writeln(refer.first_name);

/*********************************************
		 Object prototype
 ********************************************/

if(typeof Object.beget !== "function"){
	Object.beget=function(o){
		var f=function(){};
		f.prototype=o;
		return new f();
	}
}

var newStooge=Object.beget(stooge);
newStooge.first_name="Stan";
document.writeln("||");
document.writeln(newStooge.first_name);
document.writeln(newStooge.middle_name);

/*********************************************
<<<<<<< HEAD
        Enumeration and Deletion
=======
			 Enumeration
>>>>>>> testBranch
 ********************************************/

/*
var name;
for(name in newStooge){
	if(typeof newStooge[name] !== 'function'){
		document.writeln(name+ ':' + newStooge[name]);
	}
}*/

var i;
var props=['first_name','middle_name','last_name'];
document.writeln("||");
for(i=0;i<props.length;i++){
	document.writeln(props[i]+ ':' + stooge[props[i]]);
 }


