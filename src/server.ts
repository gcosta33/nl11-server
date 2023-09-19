import { fastify } from 'fastify'
import { prisma } from './lib/prima'
import { getAllPrompstRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/uplaod-video'

const port = 3333
const app = fastify()

app.register(getAllPrompstRoute)
app.register(uploadVideoRoute)

app.listen({
    port: port,
}).then(() => {
    console.log(`Server is running on ${port}`)
})