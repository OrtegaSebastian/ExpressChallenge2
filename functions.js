
const fs = require ("fs")

module.exports = class Container {
    constructor(file) {
        this.file = file;
    }
    // save(Object): Number - Recibe un objeto, lo guarda en el file, devuelve el id asignado.
    async save(objProduct) {
        const data = await fs.promises.readFile(`${this.file}`,"utf-8")
        if(data){
        const products = JSON.parse(data);
        const id = products.length +1;
            objProduct.id = id;     
            products.push(objProduct);
                const productsString = JSON.stringify(products);
                await fs.promises.writeFile(`${this.file}`, productsString);
                return products;
            }
            else{
                objProduct.id = 1;
                this.product.push(objProduct);
                const productsString = JSON.stringify(this.product);
                await fs.promises.writeFile(`${this.file}`, productsString);
            }      
    }

    async getAll() {
        try {
            let products;
            if (await fs.stat(`${this.file}`, async () => {
                const fileData = await fs.readFileSync(`${this.file}`, 'utf-8');
                console.log(fileData);
            products = fileData.toString().split("\n");
            }))
            {
            return JSON.parse(products);
            } else {
            return `${this.file} not found`;
            }
        } catch (error) {
            return error;
        }
    }
        
    getRandomProduct(){
        const data = fs.readFileSync(`${this.archivo}`,"utf-8")
        const parse = JSON.parse(data)
        const random = parse[Math.floor(Math.random()* parse.length)]
        console.log(random)
        return random 
    }
}



