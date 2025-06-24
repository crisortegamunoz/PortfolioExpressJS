const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

exports.create = async data => {
    const newskill = await prisma.skill.create({
        data: data
    });
    return newskill;
}

exports.findAll = async () => {
    const skills = await prisma.skill.findMany();
    return skills;
}

exports.findOne = async id => {
    return prisma.skill.findUnique({
        where: {
            id: parseInt(id, 10)
        }
    });
}

exports.update = async (id, data) => {
    return prisma.skill.update({
        where: {
            id: parseInt(id, 10),
            data
        }
    });
}

exports.delete = async id => {
    return prisma.skill.delete({
        where: {
            id: parseInt(id, 10)
        }
    })
}