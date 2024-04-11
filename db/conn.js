const mongoose = require('mongoose')

async function main(){

    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PWD}@pedrinn.h8b0dqt.mongodb.net/?retryWrites=true&w=majority&appName=Pedrinn`)
        console.log('Banco OK');
    } catch (error) {
        console.log('Erro: ' + error);
    }

}

module.exports = main