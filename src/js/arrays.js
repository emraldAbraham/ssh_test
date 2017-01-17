/**
 * Created by causecode on 17/1/17.
 */
function doSomething(){
	var i,myArray=['zero','one','two','three','four'];
	myArray.splice(2,1,'middle-man');
	for(i=0;i<myArray.length;i++){
		document.writeln(myArray[i]);
	}
}