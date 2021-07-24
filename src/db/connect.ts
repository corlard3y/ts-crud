import mongoose from "mongoose";
import config from 'config';
import log from "../logger";

function connect(){
    const dbUrl = config.get("dbUrl") as string;

    return mongoose.
        connect(dbUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(()=>{
            log.info("Database connected");
        })
        .catch((error)=>{
            log.error("db error", error);
            process.exit(1);
        });
}

export default connect;