
import { createConnections } from "typeorm";
import environment from '../environment/environment';

class DBConnect {
    con: any;
    connections: any;
    constructor() {
        this.con = environment.getConnection();
        this.connections = createConnections(this.con);
    }
    connect() {
        //const connections = createConnections(this.con);
        return this.connections;
    }
    disconnect() {
        this.connections.close();
    }
}

export default new DBConnect();