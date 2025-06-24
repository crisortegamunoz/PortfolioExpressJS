const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

exports.create = async data => {
    const newcategory = await prisma.category.create({
        data: data
    });
    return newcategory;
}

exports.findAll = async () => {
    const categorys = await prisma.category.findMany();
    return categorys;
}

exports.findOne = async id => {
    return prisma.category.findUnique({
        where: {
            id: parseInt(id, 10)
        }
    });
}

exports.update = async (id, data) => {
    return prisma.category.update({
        where: {
            id: parseInt(id, 10),
            data
        }
    });
}

exports.delete = async id => {
    return prisma.category.delete({
        where: {
            id: parseInt(id, 10)
        }
    })
}