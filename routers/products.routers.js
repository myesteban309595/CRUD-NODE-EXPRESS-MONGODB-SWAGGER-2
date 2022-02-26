
const express = require('express');
const Prouter = express.Router();

const funcionesControllers = require('../controllers/producto.controller'); // destructuro cada funcion

//todo obtener productos

/**
 * @swagger
 * /productos:
 *  get:
 *      summary: obtiene todos los productos 
 *      tags: ['Productos']
 *      responses:
 *          200:
 *              description: se ha obtenido los Productos exitosamente
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/product'
 *          401: 
 *              description: no autorizado
 */

Prouter.get('/', funcionesControllers.GetProducts);

//todo agregar un producto nuevo
/**
 * @swagger
 * /productos:
 *  post:
 *      summary: Crea un producto nuevo en el sistema
 *      tags: [Productos]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/product'
 *      responses:
 *          201:
 *              description: el Producto se ha creado
 *          400: 
 *              description: Entradas inválidas
 *          401:
 *              description: invalidado, no es administrador
 */
Prouter.post('/', funcionesControllers.PostProduct);

//todo editar un producto
/**
 * @swagger
 * /productos/{id}:
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
 *      summary: edita un producto ya creado
 *      tags: [Productos]              
 *      requestBody:
 *          description: El producto con sus cambios
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                         name:
 *                             type: string
 *                         price:
 *                             type: number
 *                         category:
 *                             type: string
 *      responses:
 *          200:
 *              description: Producto actualizado 
 *          400: 
 *              description: Entradas inválidas
 *          401: 
 *              description: no es administrador
 */
Prouter.put('/:id', funcionesControllers.EditProduct);

//todo eliminar un producto
/**
 * @swagger
 * /productos/{id}:
 *  delete:
 *      parameters:
 *      - in: path
 *        name: id
 *        description: id del producto que desea eliminar
 *        required: true
 *        schema:
 *           type: integer
 * 
 *      summary: eliminar un producto (admin)
 *      tags: [Productos]  
 *         
 *      responses:
 *          200:
 *              description: Producto eliminado 
 *          400: 
 *              description: Entradas inválidas
 *          401: 
 *              description: administrador no autorizado
 */

Prouter.delete('/:id', funcionesControllers.DeleteProduct);

module.exports = Prouter;  //* E X P O R T A M O S   L A S   R U T A S

/**
 * @swagger
 * tags:
 *  name: 'Productos'
 *  descripcion: Relacionado con los productos del sistema
 * 
 * components:
 *  schemas:
 *      product:
 *          type: object
 *          required:
 *              -id
 *              -name
 *              -price
 *              -category
 *          properties:
 *              id: 
 *                  type: integer
 *              name:
 *                  type: string
 *              price: 
 *                  type: number
 *              category: 
 *                  type: string
 *          example:
 *              id: 8
 *              name: arroz
 *              price: 2000
 *              category : grain
 *
 */