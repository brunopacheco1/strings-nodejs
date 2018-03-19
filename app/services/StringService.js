class StringService {
    constructor(app) {
        console.log("StringService constructor.");
        this._stringRepository = app.repositories.StringRepository(app);
    }

    get(id) {
        let result = this._stringRepository.get(id);

        return result;
    }

    reverse(id) {
        let result = this._stringRepository.get(id);

        console.log("Reversing... " + id);

        return result.split("").reverse().join("");
    }

    save(string) {
        this._stringRepository.save(id);
    }
}

module.exports = (app) => (app) => new StringService(app);