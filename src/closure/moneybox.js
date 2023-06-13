function moneyBox() {
    let saveCoins=0

   return function countCoins(coins) {
        saveCoins+=coins
        console.log(saveCoins);
    }
}

const money=moneyBox()

money(4)
money(4)


const moneyBox2=moneyBox()
moneyBox2(10)
moneyBox2(10)