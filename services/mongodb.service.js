const { MongoClient } = require("mongodb");
const { mongoConfig } = require("../config");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4 // Use IPv4, skip trying IPv6
}

class MongoDB{
    static connectionToMongoDB=()=>{
        MongoClient.connect(mongoConfig.connectionUrl,options).then(
            (connection)=>{
                console.log("MongoDB connected");
                this.db=connection.db(mongoConfig.database)
            }
        ).catch((error) => console.log(`MongoDB not Connected : ${error}`));
    };
}
MongoDB.db=null;

// const connection = () => {
//     MongoClient.connect(url,options)
//         .then((connection) => console.log(connection))
//         .catch((err) => console.log("not connected"));
// }



module.exports=MongoDB;