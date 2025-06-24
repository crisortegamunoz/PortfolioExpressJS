const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

exports.create = async data => {
    const newtechnology = await prisma.technology.create({
        data: data
    });
    return newtechnology;
}

exports.findAll = async () => {
    const technologys = await prisma.technology.findMany();
    return technologys;
}

exports.findOne = async id => {
    return prisma.technology.findUnique({
        where: {
            id: parseInt(id, 10)
        }
    });
}

exports.update = async (id, data) => {
    return prisma.technology.update({
        where: {
            id: parseInt(id, 10),
            data
        }
    });
}

exports.delete = async id => {
    return prisma.technology.delete({
        where: {
            id: parseInt(id, 10)
        }
    })
}