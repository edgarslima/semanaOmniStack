const connetion = require('../database/connection');

module.exports = {

    async create (request, response) {
        const { id } = request.body;

        console.log(id);

        const ong = await connetion('ongs')
            .where('id', id)
            .select('name')
            .first();

        console.log(ong);

        if (!ong){
            return response.status(400).json({ error: 'No ONG found with this ID'});
        }

        return response.json(ong);
    }
}