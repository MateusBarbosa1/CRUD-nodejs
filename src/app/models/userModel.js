const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(data) {
    return prisma.users.create({
        data: {
            username: data.username,
            email: data.email,
            password: data.password
        },
    });
}
async function getUsers() {
    return prisma.users.findMany();
}

module.exports = {
    createUser,
    getUsers
}