class StringRepository {

    constructor(app) {
        console.log("StringRepository constructor.");
        this._entityManager = app.repositories.EntityManager(app);
    }

    save(string) {
        return this._entityManager.getConnection().then((connection) => {
            console.log("Saving... " + string)
        });
    }

    get(id) {
        return this._entityManager.getConnection().then((connection) => {
            console.log("Getting... " + id);

            return id + "_result";
        });
    }
}

module.exports = (app) => (app) => new StringRepository(app);