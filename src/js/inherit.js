/**
 * Created by causecode on 17/1/17.
 */
function doSomething(){
/*
	var mammal=function(name){
		this.name=name;
	};

	mammal.prototype.saying=function(){
		return this.saying
	};

	mammal.prototype.add=function(){
		this.add=adder(this);
	};



	var Cat=function(name){
		this.name=name;
		this.saying='meow';
	}

	Cat.prototype=new mammal();

	Cat.prototype.purr=function(n){
		var i,s='';
		for(i=0;i<n;i++){
			if(s){
				s+='-';
			}
			s+='r';
		}
		return s;
	}

	var myCat=new Cat("madCat");
	document.writeln(''+myCat.purr(5));
	myCat.add();

	function adder(obj){
		var createDiv=document.createElement('div');
		createDiv.setAttribute('id',''+obj.name);
		createDiv.setAttribute('class','divs');
		createDiv.innerHTML=''+obj.name+'_'+obj.saying;
		document.body.appendChild(createDiv);
	}
*/
var mammal=function(spec){
	var mamm={};
	mamm.name=spec.name;
	mamm.saying=spec.saying||'nothing';
	mamm.add=adder(mamm);
	mamm.get_name=function(){
		return spec.name;
	}
	return mamm;
};

	var myMamm=mammal({name:'CrazyDavid'});

	var cat=function(spec){
		spec.saying=spec.saying||'Meow!!';
		var that = mammal(spec);
		/*that.purr = function(n){
			var i,s='';
			for(i=0;i<n;i++){
				if(s){
					s+='-';
				}
				s+='r';
			}
			return s;
		};*/
		that.get_name=function(){
			return that.saying+' '+that.name+' '+that.saying;
		};
		return that;
	};

	var myCat=cat({name:'Swatcat',saying:'Gonna save yall from monsters'});
	//myCat.purr(10);

	Object.prototype.superior = function(name){
		var that=this,method=that[name];
		return method.apply(that,arguments);
	};

	var coolcat=function(spec){
		var that=cat(spec);
		var super_get_name=that.superior('get_name');
		that.get_name=function(){
			return 'like'+super_get_name+'baby';
		};
		return that;
	}

	var myCoolCat=coolcat({name:'BIX'});
	var name=myCoolCat.get_name();
	myCoolCat.add();
	document.body.appendChild();

	function adder(obj){
		var createDiv=document.createElement('div');
		createDiv.setAttribute('id',''+obj.name);
		createDiv.setAttribute('class','divs');
		createDiv.innerHTML=''+obj.name+'_'+obj.saying;
		document.body.appendChild(createDiv);
	}
}
