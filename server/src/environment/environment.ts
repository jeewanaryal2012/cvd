
import Users from '../entities/users.entity';
import Membership from '../entities/membership.entity';
import Account from '../entities/account.entity';
class Environment {
    db = [{
        name: "mysql",
        type: "mysql",
        host: "localhost",
        //port: 3306,
        username: "root",
        password: "",
        database: "test",
        entities: [Users, Membership, Account],
        synchronize: true,
        extra: { max: 10 }
    }];
    getConnection() {
        return this.db;
    }
}

export default new Environment();