const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    try{
    const data = await prisma.city.create(
        {data:
            {
        name:"Jaipur",
        population: 40000000
        }
    })
    }catch(err){
        console.log("Error",err)
    }
    
}

async function fun() {
    prisma.hero.create({
        data:{
            name
        }
    })
    
}

main()