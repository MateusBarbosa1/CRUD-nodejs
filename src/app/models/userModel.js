const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(data) {
    return await prisma.users.create({
        data: {
            username: data.username,
            email: data.email,
            password: data.password
        },
    });
}
async function getUsers() {
    return await prisma.users.findMany();
}
async function deleteUser(id) {
    return await prisma.users.delete({ where: {id: Number(id)} });
}

module.exports = {
    createUser,
    getUsers,
    deleteUser
}