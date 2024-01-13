'use server'
import prisma from "@/utils/prisma"
const get = async () => {
    const user= await prisma.user.findMany();
    return user;
}

export default get