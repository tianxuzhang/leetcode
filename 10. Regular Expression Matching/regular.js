function isMatch(a, b){
	// ����a������ȡb�еĹ�������ж�
	
	var dot = '.';// ��
	var star = '*';// ��
	var chr = '';// �ַ�
	var reg = '';// ����
	var curr = '';// ��ǰ�ַ�
	var i = 0,j = 0;
	
	var judge = function(a){// ƥ�����
		if(!a) return false;
		if(chr == dot) return true;// �����ַ�
		return a == chr;// ��ǰ�ַ�����������ַ����
	};
	
	while(i < a.length){// ��ƥ���ַ���û��ƥ�����
		curr = a[i],chr = b[j],reg = b[j+1];
		if(reg == undefined) break;// b�Ѿ��ߵ�β
		if(i == a.length-1) break;// a�Ѿ��ߵ�β��ֻ��Ҫ�ж�bʣ��Ĳ����Ƿ����ƥ���ֵ��TODO��
		if(reg == star){// * 
			if(judge(curr)) i++;// ͨ����֤����ǰ�ߣ����ǲ���Խ��
			else j+=2;// ��ͨ����֤j+2
		}else{// �ַ�
			if(!judge(curr)) break;
			else i++,j++;
		}
	}
	return i == (a.length-1);// �ж�����Ϊ�Ƿ�����a
}

console.log(isMatch("aa","a"))
console.log(isMatch("aa","aa"))
console.log(isMatch("aaa","aa"))
console.log(isMatch("aa", "a*"))
console.log(isMatch("aa", ".*"))
console.log(isMatch("ab", ".*"))
// TODO jҪ����
console.log(isMatch("aab", "c*d*a*bd*d"))

