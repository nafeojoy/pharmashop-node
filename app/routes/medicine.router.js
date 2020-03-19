import { client } from "../../server.conf";
import { DEFAULT_MAX_VERSION } from "tls";

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


    router.route("/new-medicine")
        .post((req, res) => {
            let sp_insert_medicine =
                "CALL insert_medicine('" + req.body.name + "','" + req.body.m_code + "')";

            client.query(sp_insert_medicine, (err, response) => {
                if (!err) {
                    res.json(response)
                } else {
                    res.send(err)
                }
                client.end();
            })
        })

}
