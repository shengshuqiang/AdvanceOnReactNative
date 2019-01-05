function handleMsg(msg) {
	var result = '我服' + msg + ',一个牛逼💯的人';
	print('handleMsg:' + result);
	return result;
}

var name='hello js';
print(name);

var x = (function(a, b){
	return a + b;	
})(12, 7);

print(x);