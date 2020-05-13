import dbConnect from '../config/db-connect';
//import accountEntity from '../entities/account.entity';
import { json } from 'body-parser';
import * as bcrypt from 'bcryptjs';
import { Logger } from "tslog";
import * as jwt from 'jsonwebtoken';
import AccountEntity from '../entities/account.entity';

class Account {
    log: any;
    constructor() {
        this.log = new Logger();
    }

    setAccount(accountData) {
        dbConnect.connect().then(con => {
            let accountEntity = new AccountEntity();
            accountEntity.userId = accountData.userId;
            accountEntity.headline = accountData.headline;
            accountEntity.description = accountData.description;
            accountEntity.regionStates = accountData.regionStates;
            accountEntity.regionCities = accountData.regionCities;
            accountEntity.imageProfile = accountData.imageProfile;
            accountEntity.imageSlider = accountData.imageSlider;
            accountEntity.contactEmail = accountData.contactEmail;
            accountEntity.contactPhone = accountData.contactPhone;
            accountEntity.contactWebsite = accountData.contactWebsite;

            let userRepository = con[0].getRepository(AccountEntity);
            userRepository.find().then(data => {
                con[0].manager.save(accountEntity).then(rs => {
                    this.log.info(rs);
                });

            }, err => {

            });
        }, err => {

        });
    }

    saveAccount(req, res) {
        //console.log('test');
        dbConnect.connect().then(con => {
            let accountEntity = new AccountEntity();
            accountEntity.userId = req.body.userId;
            accountEntity.headline = req.body.headline;
            accountEntity.description = req.body.description;
            accountEntity.regionStates = req.body.regionStates;
            accountEntity.regionCities = req.body.regionCities;
            accountEntity.imageProfile = req.body.imageProfile;
            accountEntity.imageSlider = req.body.imageSlider;
            accountEntity.contactEmail = req.body.contactEmail;
            accountEntity.contactPhone = req.body.contactPhone;
            accountEntity.contactWebsite = req.body.contactWebsite;

            let userRepository = con[0].getRepository(AccountEntity);
            userRepository.find().then(data => {
                if (data.length <= 0) {
                    con[0].manager.save(accountEntity).then(rs => {
                        this.log.info(rs);
                    });
                    res.json([{
                        result: true,
                        message: 'Registration success'
                    }]);
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
}

export default new Account();