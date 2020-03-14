export default (app, router, logger) => {

    router.route("/test-api")
        .get((req, res) => {
            let medicines = [
                {
                    id: Math.random(),
                    text: 'MilkNode1',
                },
                {
                    id: Math.random(),
                    text: 'Eggs',
                },
                {
                    id: Math.random(),
                    text: 'Bread',
                },
                {
                    id: Math.random(),
                    text: 'Juice',
                }
            ]
            res.json(medicines);
        })

}
