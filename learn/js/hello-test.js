const {handleMsg, init, printBoard, handleOrder} = require('./hello.js')

print = msg => {
	console.log(msg)
}

handleMsg("SSU")
init()

process.stdin.on('data',(input)=>{
	var orderStr = input.toString().trim()
	if (orderStr === 'quite') {
		process.exit(1)
	} else {
		receiveOrderStr(orderStr)
	}

	print("请🌴🐑");
});

setTimeout(() => {
	printMsg("⏳\t" + new Date().toLocaleString())
}, 10000);

