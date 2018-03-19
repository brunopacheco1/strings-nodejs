class StringRepository {

    constructor(app) {
        this._entityManager = app.repositories.EntityManager(app);
    }

    save(string) {
        return this._entityManager.getConnection().then((connection) => {
            console.log("Saving... " + string)
        });
    }

    get(id) {
        return this._entityManager.getConnection().then((connection) => {
            return id;
        });
    }
}

module.exports = (app) => (app) => new StringRepository(app);