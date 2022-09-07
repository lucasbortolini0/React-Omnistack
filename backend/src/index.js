const express = require('express');
const cors =  require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * rota e recursos
 */

/** Metodos HTTP 
 * 
 * GET: Buscar/Listar uma informação do back-end.
 * POST: Criar uma informação no back-end.
 * PUT: Alterar uam informação no back-end.
 * DELETE: Deletar uma informação no back-end.
*/

/**
 * Tipos de parametros
 * 
 * Query Params: Parametros nomeado enviados na rota apos "?" (Filtros, paginação)
 * Route Params: Parametros utilizado para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB e etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builders: table('users').select('*').where()
 */


