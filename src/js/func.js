/**
 * Created by causecode on 17/1/17.
 */
if(typeof Object.beget !== 'function'){
	Object.beget = function(o){
		var F=function(){};
		F.prototype=o;
		return new F();
	}
}

var myObject1={
	value: 0,
	increment:function(inc) {
		this.value += typeof inc === 'number' ? inc : 1;
		adder(this);
	},
	add:function(){
		this.increment();
	}
}

function adder(obj){
	//document.writeln(obj.name);
	var createDiv=document.createElement('div');
	//createDiv.innerHTML=obj.name;
	//var value=obj.increment();
	//document.writeln(""+obj.value);
	createDiv.setAttribute('id','object'+obj.value);
	createDiv.setAttribute('class','divs');
	createDiv.innerHTML="blah blah blah";
	document.getElementById('content').appendChild(createDiv);
}

myObject1.add();
var myObject2=Object.beget(myObject1);
myObject2.add();
