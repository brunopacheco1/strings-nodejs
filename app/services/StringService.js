class StringService {
    constructor(app) {
        console.log("StringService constructor.");
        this._stringRepository = app.repositories.StringRepository(app);
    }

    get(id) {
        return this._stringRepository.get(id);
    }

    reverse(id) {
        return this._stringRepository.get(id).then((stringResult) => {
            console.log("Reversing... " + stringResult);

            return stringResult.split("").reverse().join("");
        });
    }

    save(string) {
        return this._stringRepository.save(id);
    }
}

module.exports = (app) => (app) => new StringService(app);