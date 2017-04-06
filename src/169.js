// 多个均匀分布叠加得到正态分布
function getNumberInNormalDistribution(mean,std_dev){    
    return mean+(uniform2NormalDistribution()*std_dev);
}

function uniform2NormalDistribution(){
    var sum=0.0;
    for(var i=0; i<12; i++){
        sum=sum+Math.random();
    }
    return sum-6.0;
}

var arr = new Array(10).join(',').split(',').map(function (d) {
	return Math.floor(getNumberInNormalDistribution(10,2));
})

// o(n^2)
function findMajor(arr) {
	var result = {ele:'', num:0};
	for(var i=0; i<arr.length; i++){ 
		var search = {ele:arr[i], num:0};;
		for(var j=i; j<arr.length; j++){ 
			if(search.ele == arr[j]) search.num++;
		}
		if(search.num > result.num) result = search;
	}
	console.log(result);
}

findMajor(arr);