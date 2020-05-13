import dbConnect from '../config/db-connect';
import Users from '../entities/users.entity';
import { json } from 'body-parser';
import * as bcrypt from 'bcryptjs';
import { Logger } from "tslog";
import * as jwt from 'jsonwebtoken';

class Login {
    log: any;
    constructor() {
        this.log = new Logger();
    }

    doLogin(req, res) {
        //console.log('test');
        dbConnect.connect().then(con => {
            let user = new Users();
            console.log('connected ....', process.env.FOO);
            user.firstName = 'Jeewan000';
            user.lastName = 'Aryal2';
            user.email = 'jeewan2@gmail.com';
            user.phone = '972-251-3155';
            user.password = 'pass';
            let userRepository = con[0].getRepository(Users);
            // userRepository.find({ email: 'jeewan@gmail.com' }).then(data => {
            //     console.log(data);
            // });

            userRepository.find({ email: 'jeewan@gmail.com' }).then(data => {
                this.log.info(data);
                if (data.length > 0) {
                    bcrypt.compare(req.body.password, data[0].password, (err, match) => {
                        if (match) {
                            let ts = Date.now();
                            const user = { username: req.body.username, password: req.body.password };
                            const accessToken = jwt.sign(user, process.env.AUTH_KEY);
                            res.json({
                                result: false,
                                message: 'password matches'
                            });
                        } else {
                            res.json([{
                                result: false,
                                message: 'password does not match'
                            }]);
                        }
                    });
                } else {
                    res.json([{
                        result: false,
                        message: 'no record found'
                    }]);
                }
            }, err => {
                res.json([{
                    result: false,
                    message: 'error 1'
                }]);
            });

        }, err => {
            res.json([{
                result: false,
                message: 'error 2'
            }]);
        });


    }
}

export default new Login();