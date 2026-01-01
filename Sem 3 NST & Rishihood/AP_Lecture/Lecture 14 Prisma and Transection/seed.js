const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    try{
    const data = await prisma.user.create(
        {data:
            {
        university : "Rishihood University"
        }
    })
    }catch(err){
        console.log("Error",err)
    }
    
}


main()