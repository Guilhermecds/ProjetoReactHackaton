const server = jsonServer.create()

server.use(router)

server.listen(3333, () => {
    console.log('Servidor iniciado!')
})


