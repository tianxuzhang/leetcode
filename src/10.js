function isMatch(a, b){
	// 遍历a，依次取b中的规则进行判断
	
	var dot = '.';// 点
	var star = '*';// 星
	var chr = '';// 字符
	var reg = '';// 规则
	var curr = '';// 当前字符
	var i = 0,j = 0;
	
	var judge = function(a){// 匹配规则
		if(!a) return false;
		if(chr == dot) return true;// 任意字符
		return a == chr;// 当前字符必须与规则字符相等
	};
	
	while(i < a.length){// 待匹配字符串没有匹配结束
		curr = a[i],chr = b[j],reg = b[j+1];
		if(reg == undefined) break;// b已经走到尾
		if(i == a.length-1) break;// a已经走到尾，只需要判断b剩余的部分是否可以匹配空值（TODO）
		if(reg == star){// * 
			if(judge(curr)) i++;// 通过验证就往前走，但是不能越界
			else j+=2;// 不通过验证j+2
		}else{// 字符
			if(!judge(curr)) break;
			else i++,j++;
		}
	}
	return i == (a.length-1);// 判断条件为是否走完a
}

console.log(isMatch("aa","a"))
console.log(isMatch("aa","aa"))
console.log(isMatch("aaa","aa"))
console.log(isMatch("aa", "a*"))
console.log(isMatch("aa", ".*"))
console.log(isMatch("ab", ".*"))
// TODO j要走完
console.log(isMatch("aab", "c*d*a*bd*d"))

