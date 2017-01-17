/**
 * Created by causecode on 17/1/17.
 */
Function.prototype.method=function(name,func){
	this.prototype[name]=func;
	return this;
}
var eventuality= function(that){
	var registry={};

	that.fire=function(event){
		var array,
				func,
				handler,
				i,
				type=typeof event === 'String'? event : event.type;
		if(registry.hasOwnProperty(type)){
			array=registry[type];
			for(i=0;i<n;i++){
				handler=array[i];
				func=handler.method;
				if(typeof func === 'String'){
					func = this[func];
				}
				func.apply(this,handler.parameter || [event])
			}
		}
		return this;
	};

	that.on = function(type,method,parameters){
		var handler={
			method: method,
			parameter:parameter
		};
		if(registry.hasOwnProperty(type)){
			registry[type].push(handler);
		}else{
			registry[type]=[handler];
		}
		return this;
	}
	return that;
}

