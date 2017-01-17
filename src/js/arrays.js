/**
 * Created by causecode on 17/1/17.
 */
function doSomething(){
	var i,myArray=['zero','one','two','three','four'];
	myArray.splice(2,1,'middle-man');
	for(i=0;i<myArray.length;i++){
		document.writeln(myArray[i]);
	}

	document.write('<br/>');

	Array.dim=function(dimen,initial){
		var a=[],i;
		for(i=0;i<dimen;i++){
			a[i]=initial;
		}
		return a;
	};

	var arr=Array.dim(10,0);
	for(i=0;i<arr.length;i++){
		document.writeln(arr[i]);
	}

	document.write('<br/>');

	Array.matrix=function(m,n,initial){
		var a,i, j,mat=[];
		for(i=0;i<m;i++){
			a=[];
			for(j=0;j<n;j++){
				a[j]=initial;
			}
			mat[i]=a;
		}
		return mat;
	};

	var myMatrix=Array.matrix(3,3,0);
	var j;
	for(i=0;i<3;i++){
		document.writeln('[');
		for(j=0;j<3;j++){
			document.writeln(myMatrix[i][j]);
		}
		document.writeln(']');
	}


}