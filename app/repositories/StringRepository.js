class StringRepository {

    constructor(app) {
        console.log("StringRepository constructor.");
        this._entityManager = app.repositories.EntityManager(app);
    }

    save(string) {
        console.log("Saving... " + string);
    }

    get(id) {
        this._entityManager.getConnection();

        console.log("Getting... " + id);

        return id + "_result";
    }
}

module.exports = (app) => (app) => new StringRepository(app);