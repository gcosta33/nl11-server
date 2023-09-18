import { fastify } from 'fastify'

const app = fastify()

app.get('/', () => {
    return 'Hello word'
})

app.listen({
    port:3333,
    
})