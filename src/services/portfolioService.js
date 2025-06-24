const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

exports.create = async data => {
    const newportfolio = await prisma.portfolio.create({
        data: data
    });
    return newportfolio;
}

exports.findAll = async () => {
    const portfolios = await prisma.portfolio.findMany();
    return portfolios;
}

exports.findOne = async id => {
    return prisma.portfolio.findUnique({
        where: {
            id: parseInt(id, 10)
        }
    });
}

exports.update = async (id, data) => {
    return prisma.portfolio.update({
        where: {
            id: parseInt(id, 10),
            data
        }
    });
}

exports.delete = async id => {
    return prisma.portfolio.delete({
        where: {
            id: parseInt(id, 10)
        }
    })
}