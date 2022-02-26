const openAPI = {
    
    definition : {
        openapi : "3.0.0",
        info : {
            tittle : "CRUD-NODE-EXPRESS-SWAGGER-MIDLEWARES",
            version : "1.0.1",
            description : "CRUD-NODE-EXPRESS-SWAGGER-MIDLEWARES",
            contact : {
                name : "marlon yoel esteban valencia",
                email : "maryoe_95@hotmail.com"
            }
        },
        servers : [
            {
                url : "http://localhost:3000",
                description : "Servidor local de prueba"
            }
        ],
        components: {
            securitySchemes: {
                basicAuth: {
                    type: "http",
                    scheme: "basic"
                }
            }
        },
        security: [

        ]
        
    },
    apis: ["./src/routers/*.js"]

}

module.exports = openAPI;
