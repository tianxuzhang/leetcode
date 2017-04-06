
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 简单的单链表：追加，转换字符串，反序
function List(){
	this.head = null;
	this.length = 0;
	this.insert = insert;
	this.reverse = reverse; 
	this.toString = toString;
	this.append = append;
	this.appendArr = appendArr;
	this.print = print;
}

// 插入：构造新节点，查找插入点节点，交换next
function insert(newVal, item){
	var newNode = new ListNode(newVal);
	var currNode = this.find(item);
	if(!currNode){
		this.head = newNode;
	}else{
		newNode.next = currNode.next;
		currNode.next = newNode;
	}
	this.length++;
}

// 追加：找到最好一个元素往后加
function append(newVal){
	var newNode = new ListNode(newVal);
	if(!this.head){
		this.head = newNode;
	}else{
		var currNode = this.head;
		while(currNode.next){
			currNode = currNode.next;
		}
		currNode.next = newNode;
	}
	this.length++;
}

// 查找：从头往后找
function find(item){
	var currNode = this.head;
	while(currNode.val != item && currNode.next != null){
		currNode = currNode.next;
	}
	return currNode;
}

// 字符串化：循环输出链表的值
function toString(){
	var currNode = this.head;
	var str = currNode.val;
	while(currNode.next){
		currNode = currNode.next;
		str += ""+currNode.val;
	}
	return str;
}

// 输出：循环输出链表的值
function print(){
	console.log(this.toString());
}

// 从数组追加：按数组顺序反序
function appendArr(arr,reverse){
	for(var i=0; i<arr.length; i++){
		if(!reverse){
			this.append(arr[i]);
			continue;
		}
		var newNode = new ListNode(arr[i]);
		if(!this.head){
			this.head = newNode;
		}else{
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
	}
	return this;
}

// 反序：将当前节点的后继节点和第一个节点交换。
function reverse(){
	var P = this.head;
	var Q = null;
	while(P.next != null){
		Q = P.next;
		// 断链交换
		P.next = Q.next;// 断开Q的前链
		Q.next = this.head;// 断开Q的后链，放在最前面
		this.head = Q;// 更新头节点
	}
	return this;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
    // 相加，进位
    /**
     * 1. l1,l2非空就同时往后走；
     * 2. 求和以及进位数，l1,l2有才相加
     * 3. 进位部分l1,l2都完了时再循环结束处插入到头部，否则参与下一次和的计算；
    */

    var head = null;
    var mod = 0;
    while(l1 || l2){
    	var sum = mod;
    	l1 && (sum += l1.val);
    	l2 && (sum += l2.val);

    	mod = Math.floor(sum/10);
    	sum = sum%10;

    	var curr = new ListNode(sum);

    	if(!head){
    		head = curr;
    	} else {
    		curr.next = head;
    		head = curr;
    	}

    	if(mod>0 && !l1.next && !l2.next){
    		var modNode = new ListNode(mod);
    		modNode.next = head;
    		head = modNode;
    	} 

    	l1 && (l1 = l1.next);
    	l2 && (l2 = l2.next);
    }

    var List3 = new List();
    List3.head = head;
    return List3;
};

// test fun

function TestAdd(arr1, arr2){
	console.log('TestAdd...');
	var list1 = new List();
	var list2 = new List();
	list1.appendArr(arr1);
	list2.appendArr(arr2);
	var list3 = addTwoNumbers(list1.head, list2.head);
	console.log(list1.reverse().toString() +' + '+ list2.reverse().toString() +' = '+ list3.toString());
}

function TestReverse(arr, reverse){
	console.log('TestReverse...');
	var list1 = new List();
	list1.appendArr(arr, reverse);
	list1.print();
	list1.reverse();
	list1.print();
}

// test
TestReverse([3,2,1,6,6,3,7,8],true);
TestAdd([3,6,1],[6,5,4,2]);
TestAdd([3,6,1,9,9,4,6],[6,5,4,2]);
TestAdd([9,6,8],[6,5,7]);
TestAdd([9,9,9,9,9],[1,1,1,1,1]);