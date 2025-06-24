const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

exports.create = async data => {
    const newexperience = await prisma.experience.create({
        data: data
    });
    return newexperience;
}

exports.findAll = async () => {
    const experiences = await prisma.experience.findMany();
    return experiences;
}

exports.findOne = async id => {
    return prisma.experience.findUnique({
        where: {
            id: parseInt(id, 10)
        }
    });
}

exports.update = async (id, data) => {
    return prisma.experience.update({
        where: {
            id: parseInt(id, 10),
            data
        }
    });
}

exports.delete = async id => {
    return prisma.experience.delete({
        where: {
            id: parseInt(id, 10)
        }
    })
}