const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

exports.create = async data => {
    const newabout = await prisma.about.create({
        data: data
    });
    return newabout;
}

exports.findAll = async () => {
    const abouts = await prisma.about.findMany();
    return abouts;
}

exports.findOne = async id => {
    return prisma.about.findUnique({
        where: {
            id: parseInt(id, 10)
        }
    });
}

exports.update = async (id, data) => {
    return prisma.about.update({
        where: {
            id: parseInt(id, 10),
            data
        }
    });
}

exports.delete = async id => {
    return prisma.about.delete({
        where: {
            id: parseInt(id, 10)
        }
    })
}