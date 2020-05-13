import dbConnect from '../config/db-connect';
import { Request, Response } from "express";
//import Profile from '../entities/profile';
import users from '../entities/users.entity';
import { json } from 'body-parser';
import * as bcrypt from 'bcryptjs';
import { Logger } from "tslog";
import * as jwt from 'jsonwebtoken';
import UsersEntity from '../entities/users.entity';
import account from './account';

class Register {
    log: any;
    //account: Account;
    constructor() {
        this.log = new Logger();
    }

    doRegister(req: Request, res: Response) {
        dbConnect.connect().then(con => {
            let users = new UsersEntity();
            users.firstName = req.body.firstName;
            users.lastName = req.body.lastName;
            users.email = req.body.email;
            users.phone = req.body.phone;
            users.password = bcrypt.hashSync(req.body.password, 10);
            let userRepository = con[0].getRepository(UsersEntity);
            userRepository.find({ email: req.body.email }).then(data => {
                if (data.length <= 0) {
                    con[0].manager.save(users).then(rs => {
                        this.createAccount(rs);
                        res.json([{
                            result: true,
                            message: 'Registration success'
                        }]);
                    });
                } else {
                    res.json([{
                        result: false,
                        message: 'Registration unsuccess'
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

    createAccount(rs) {
        let accountData = {
            userId: rs.userId,
            headline: 'dummy',
            description: '',
            regionStates: '',
            regionCities: '',
            imageProfile: '',
            imageSlider: '',
            contactEmail: '',
            contactPhone: '',
            contactWebsite: ''
        };

        account.setAccount(accountData);
        /*
        accountEntity.headline = req.body.headline;
            accountEntity.description = req.body.description;
            accountEntity.regionStates = req.body.regionStates;
            accountEntity.regionCities = req.body.regionCities;
            accountEntity.imageProfile = req.body.;
            accountEntity.imageSlider = req.body.;
            accountEntity.contactEmail = req.body.;
            accountEntity.contactPhone = req.body.;
            accountEntity.contactWebsite = req.body.;
        */
    }
}

export default new Register();