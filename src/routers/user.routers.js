const express = require('express');
const Uroute = express.Router();

const controllersFunction = require('../controllers/usuario.controller');

/**
 * @swagger
 * /usuarios:
 *  get:
 *      summary: obtiene todos los usuarios 
 *      tags: ['Usuarios']
 *      responses:
 *          200:
 *              description: se ha obtenido los usuarios exitosamente
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/user'
 *          401: 
 *              description: no autorizado
 */
Uroute.get('/',controllersFunction.GetUser )

//? ****************  REGISTRO DE USUARIO LOGIN ************************
/**
 * @swagger
 * /usuarios:
 *  post:
 *      summary: Crea un producto nuevo en el sistema
 *      tags: [usuarios]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/user'
 *      responses:
 *          201:
 *              description: el usuario se ha creado
 *          400: 
 *              description: Entradas inválidas
 *          401:
 *              description: invalidado, no es administrador
 */
Uroute.post('/',controllersFunction.AddUser);
/**
 * @swagger
 * /usuarios/{id}:
 *  put:
 *      parameters:
 *      - in: path
 *        name: id
 *        description: id del producto que desea editarse
 *        required: true
 *        schema:
 *         type: integer
 *      
 * 
 *      summary: edita un usuario ya creado
 *      tags: [usuarios]              
 *      requestBody:
 *          description: El usuario con sus cambios
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                        id: 
 *                          type: integer
 *                        name:
 *                          type: string
 *                        lastname: 
 *                          type: string
 *                        phone: 
 *                          type: string
 *                        sex: 
 *                          type: string
 *                        password: 
 *                          type: string
 *      responses:
 *          200:
 *              description: usuario actualizado 
 *          400: 
 *              description: Entradas inválidas
 *          401: 
 *              description: no es administrador
 */
Uroute.put('/:id', controllersFunction.UpdateUser )
/**
 * @swagger
 * /usuarios/{id}:
 *  delete:
 *      parameters:
 *      - in: path
 *        name: id
 *        description: id del usuario que desea eliminar
 *        required: true
 *        schema:
 *           type: integer
 * 
 *      summary: eliminar un usuario (admin)
 *      tags: [usuario]  
 *         
 *      responses:
 *          200:
 *              description: usuario eliminado 
 *          400: 
 *              description: Entradas inválidas
 *          401: 
 *              description: administrador no autorizado
 */

Uroute.delete('/:id', controllersFunction.DeleteUser)

module.exports = Uroute;

/**
 * @swagger
 * tags:
 *  name: 'usuarios'
 *  descripcion: Relacionado con los usuarios del sistema
 * 
 * components:
 *  schemas:
 *      user:
 *          type: object
 *          required:
 *              -id
 *              -name
 *              -lastname
 *              -phone
 *              -sex
 *              -password
 *              -admin
 *          properties:
 *              id: 
 *                  type: integer
 *              name:
 *                  type: string
 *              lastname: 
 *                  type: string
 *              phone: 
 *                  type: string
 *              sex: 
 *                  type: string
 *              password: 
 *                  type: string

 *          example:
 *              id: 4
 *              name: tiburcio 
 *              lastname: casimiro
 *              phone : 3194566898
 *              sex : M
 *              password: 1234
 *
 */