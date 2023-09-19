import { fastify } from 'fastify'

const port = 3333
const app = fastify()

app.get('/', () => {
    return 'Hello word'
})

app.listen({
    port: port,
}).then(() => {
    console.log(`Server is running on ${port}`)
})