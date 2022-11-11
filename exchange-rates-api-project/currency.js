class Currency {
    constructor(firstCurrency, secondCurrency) {

        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "    ";

        this.amount = null;
    }
    exchange() {
        return new Promise((resolve, reject) => {

            fetch(this.url + this.firstCurrency)
                .then(response => response.json())
                .then(data => {
                    const parity = data["rates"][this.secondCurrency];
                    const amount2 = Number(this.amount);

                    let total = parity * amount2;
                    resolve(total);
                })
                .catch(err => reject(err));

        });

    }
    changeAmount(amount) {
        this.amount = amount;
    }
    changeFirstCurrecy(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrecy(newSecondCurrency) {
        this.SecondCurrency = newSecondCurrency;
    }
}