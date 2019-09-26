module.exports = {
    getGames(req, res) {
        const db = req.app.get('db')
        const games = db.getGames()
        res.status(200).send(games)
    }
}