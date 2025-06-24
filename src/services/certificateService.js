const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

exports.create = async data => {
    const newCertificate = await prisma.certificate.create({
        data: data
    });
    return newCertificate;
}

exports.findAll = async () => {
    const certificates = await prisma.certificate.findMany();
    return certificates;
}

exports.findOne = async id => {
    return prisma.certificate.findUnique({
        where: {
            id: parseInt(id, 10)
        }
    });
}

exports.update = async (id, data) => {
    return prisma.certificate.update({
        where: {
            id: parseInt(id, 10),
            data
        }
    });
}

exports.delete = async id => {
    return prisma.certificate.delete({
        where: {
            id: parseInt(id, 10)
        }
    })
}