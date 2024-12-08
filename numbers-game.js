playGame = () => {
	const originalNumber = Math.ceil(Math.random()*100)
	let max = 100
	let min = 1
	console.log(`Компьютер 1 загадал число: ${originalNumber}\n`)
	let number = Math.round((min + max)/2)
	console.log(`Компьютер 2: Пробуем число ${number}`)
	if (number != originalNumber) {
		while (number != originalNumber) { 
			if (number > originalNumber) {
				console.log ('Компьютер 1: Меньше.\n')
				max = number
				number = Math.round((min + max)/2)
			} else {
				console.log ('Компьютер 1: Больше.\n')
				min = number
				number = Math.round((min + max)/2)
			}
			console.log(`Компьютер 2: Пробуем число ${number}`)
		}
		console.log ('Компьютер 1: Угадал!\n')
	}
}

playGame()