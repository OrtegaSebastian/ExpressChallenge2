
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


    getAll(){
        if (fs.existsSync(this.file)){
            const data = fs.readFileSync(`${this.file}`, 'utf-8');
            if (data) {
                return data;
            }else{
                return 'Not data Found';
            }
        }
        return 'File not Found'; 
    }
        
    getRandomProduct(){
        let data;
        if (fs.existsSync(this.file)){
            data = fs.readFileSync(`${this.file}`, 'utf-8');
        }
        const parse = JSON.parse(data)
        const random = parse[Math.floor(Math.random()* parse.length)]
        return JSON.stringify(random) 
    }
        

}



