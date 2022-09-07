const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(request, response){
        const ongs =  await connection('ongs').select('*');
     
        return response.json(ongs);
    },

    async create(request, response) {
    const { name, email, whatsApp, city, uf } = request.body;

    console.log(request.body)

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsApp,
        city,
        uf,
    })

    return response.json({ id });   

    console.log(ongs)

    }
};
