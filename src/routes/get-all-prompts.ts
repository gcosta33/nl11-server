import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prima";

export async function getAllPrompstRoute(app: FastifyInstance) {
    app.get('/prompts', async () => {
        const prompts = await prisma.prompt.findMany()
        return prompts;
    })
}