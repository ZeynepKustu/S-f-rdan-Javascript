function translate(word, language) {
    this.apikey = "   "
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();
}
Translate.prototype.translateWord = function (callback) {

    const endpoint = `  `

    this.xhr.open("GET", endpoint);
    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0];

            callback(null, text);

            // console.log(JSON.parse(this.xhr.responseText).text[0]);
        } else {
            callback("bir hata oluştu", null);
        }
    }

    this.xhr.send();
};
Translate.prototype.changeParameters = function (newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}