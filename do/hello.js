handleMsg = (msg) => {
	var result = '我服' + msg + ',一个牛逼的人'
	console.log('handleMsg:' + result)
	return result
}

init = () => {
	RedArmy = '♤'
	BlackArmy = '♠︎'
	EmptyArmy = '♢'
	Board = [EmptyArmy, BlackArmy, BlackArmy, BlackArmy, EmptyArmy, EmptyArmy, EmptyArmy, RedArmy, RedArmy, RedArmy]
	Location = ['⑩','①','②','③','④','⑤','⑥','⑦','⑧','⑨']
	Left2Right = '一'
	Top2Bottom = '｜'
	LeftBottom2RightTop = '╱'
	LeftTop2RightBottom = '╲'
	Space = '\t'
	stepIndex = 0

	printBoard()
	printMsg("请");
}

buildChess = index => (Location[index] + Board[index])

printBoard = () => {
	let str = buildChess(1) + Space + Left2Right + Space + buildChess(2) + Space + Left2Right + Space + buildChess(3) + '\n'
	+ Top2Bottom + Space + LeftTop2RightBottom + Space + Top2Bottom + Space + LeftBottom2RightTop  + Space + Top2Bottom + '\n'
	+ buildChess(4) + Space+ Left2Right + Space + buildChess(5) + Space + Left2Right + Space + buildChess(6) + '\n'
	+ Top2Bottom + Space + LeftBottom2RightTop + Space + Top2Bottom + Space + LeftTop2RightBottom  + Space + Top2Bottom + '\n'
	+ buildChess(7) + Space + Left2Right + Space + buildChess(8) + Space + Left2Right + Space + buildChess(9) + '\n'
	printMsg(str)
}

printMsg = msg => {
	//process.stdout.write(msg)
	// console.log(msg)
	print(msg)
}

receiveOrderStr = orderStr => {
	if (orderStr && orderStr.length == 2) {
		const srcIndex = parseInt(orderStr.charAt(0))
		const destIndex = parseInt(orderStr.charAt(1))
		if (srcIndex >= 1 && srcIndex <= 9 && destIndex >= 1 && destIndex <= 9) {
			handleOrder(srcIndex, destIndex)
		} else {
			printMsg('犯规：️输入非法指令【'+ orderStr + '】错误，应该为两位1-9的数字，源位置目标位置')
		}
	} else {
		printMsg('犯规：输入非法指令【'+ orderStr + '】错误，应该为两位1-9的数字，源位置目标位置')
	}
}

handleOrder = (srcIndex, destIndex) => {
	printMsg('handleOrder源位置' + srcIndex + '棋子' + Board[srcIndex] + '移动到目标位置' + destIndex + '棋子' + Board[destIndex])
	if (Board[destIndex] === EmptyArmy) {
		const army = (stepIndex % 2 === 0 ? BlackArmy : RedArmy)
		if (Board[srcIndex] === army) {
			Board[destIndex] = army
			Board[srcIndex] = EmptyArmy
			printMsg('Step' + (stepIndex++) + ': ' + srcIndex + '➡️' + destIndex)
		} else {
			printMsg('犯规：️源位置' + srcIndex + '不是你的棋子' + Board[srcIndex])
		}
	} else {
		printMsg('犯规：️目标位置' + destIndex + '已有棋子' + Board[destIndex])
	}
	printBoard()
}

/*
exports.handleMsg = handleMsg
exports.init = init
exports.printBoard = printBoard
exports.handleOrder = handleOrder
*/
