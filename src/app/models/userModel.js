const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// CREATE
async function createUser(data) {
    return await prisma.users.create({
        data: {
            username: data.username,
            email: data.email,
            password: data.password
        },
    });
}
// READ
async function getUsers() {
    return await prisma.users.findMany();
}
// UPDATE
async function updateUser(id, data) {
    return await prisma.users.update({
        where: {id: Number(id)},
        data: data
    });
}
// DELETE
async function deleteUser(id) {
    return await prisma.users.delete({ where: {id: Number(id)} });
}


module.exports = {
    createUser,
    getUsers,
    deleteUser,
    updateUser
}