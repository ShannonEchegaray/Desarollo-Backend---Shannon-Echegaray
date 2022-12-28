import ContMongoDB from "../../contenedores/contMongo.js"
import {NotFoundError} from "../../utils/errors.js";

class Producto extends ContMongoDB{
     constructor(schema){
        super(schema);
    }

    async listarProductos(){
        let data;
        try {
            data = await super.read()
        } catch (error) {
            throw error;
        }
        return data;
    }

    async listarProductosId(id){
        let data;
        try {
            data = await super.read({id}) 
        } catch (error) {
            throw error;
        }
        return data;
    }

    async agregarProducto(product){
        product = {...product}

        const savedProduct = await super.saveItem(product);

        return savedProduct._id;
    }

    async actualizarProducto(id, properties){
        let data;
        try {
            data = await super.read({id})
            data = {
                    ...data,
                    ...properties
                    }; 
            const updatedData = await super.updateItem(data._id, data);
            return updatedData;
    } catch (error) {
            throw error;
        }
        return data;

    }

    async eliminarProducto(id){
        try {
            const data = await super.read({id});
            await super.deleteItem(data[productToDelete]._id);
            
        } catch (error) {
            throw error;
        }
    }
}

export default Producto;