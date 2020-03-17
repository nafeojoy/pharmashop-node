import { client } from "../../server.conf";

export default (app, router, logger) => {

    router.route("/get-medicines")
        .get((req, res) => {
            client.query('SELECT * FROM medicine', (err, response) => {
                if (!err) {
                    res.json(response.rows)
                } else {
                    res.send(err)
                }
                client.end();
            })
        })

}
