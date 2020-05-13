import * as express from "express";
import { Request, Response } from "express";
import { Logger } from "tslog";
import config from '../config/config';
import "reflect-metadata";

import { createConnections } from "typeorm";
//import { Users } from '../entities/users';
// import { Membership } from '../entities/membership';
// import { Profile } from '../entities/profile';

// APIs
import login from '../api/login';
import account from "../api/account";
import register from '../api/register';

class JRoutes {
    public app;
    router = express.Router();
    log: Logger;
    constructor() {
        this.app = config.app;
        this.routes();
        config.configApp();
    }

    private routes(): void {
        this.router.get('/', (req: Request, res: Response) => {
            console.log(process.env.PWD);
            res.sendFile(process.env.PWD + '/dist/uicomponent/index.html');
            // res.json({
            //     message: 'Home page'
            // });
        });
        this.router.get('/login', (req: Request, res: Response) => {
            login.doLogin(req, res);
        });
        this.router.post('/register', (req: Request, res: Response) => {
            //console.log(req.body);
            register.doRegister(req, res);
        });
        this.router.get('/account', (req: Request, res: Response) => {
            account.saveAccount(req, res);
        });
        this.app.use('/', this.router);
    }


}

export default new JRoutes().app;

/*
connect(res) {
        // console.log(__dirname);
        console.log(process.env.PWD + '/entities/users.ts');
        const connections = createConnections([{
            name: "mysql",
            type: "mysql",
            host: "localhost",
            //port: 3306,
            username: "root",
            password: "",
            database: "test",
            entities: [Users, Membership, Profile], //[`${process.env.PWD}/entities/user.ts`],
            //entities: [`${process.env.PWD}/entities/users.ts`],
            synchronize: true
        }]);
        connections.then(ct => {
            //console.log(ct);
        });
        res.json({});

        const connections = createConnections([{
            name: "mysql",
            type: "mysql",
            host: "localhost",
            //port: 3306,
            username: "root",
            password: "",
            database: "test",
            //entities: [Users],
            synchronize: true
        }]);

        // connections.then(ct => {
        //     let photo = new Users();
        //     photo.firstName = "Me and Bears";
        //     photo.lastName = "I am near polar bears";
        //     photo.email = "photo-with-bears.jpg";
        //     photo.password = '';
        //     ct[0].getCustomRepository(Users).find().then
        // }).catch(error => console.log(error));


        connections
            .then(connection => {
                let photo = new Users();
                photo.firstName = "Me and Bears";
                photo.lastName = "I am near polar bears";
                photo.email = "photo-with-bears.jpg";
                photo.password = '';
                console.log('here ------------------------- ');
                //console.log(connection[0].manager);

                // let photoRepository = connection[0].getRepository(Users);
                // photoRepository.find().then(data => {
                //     console.log(data);
                //     res.json({
                //         data: data
                //     });
                // }, err => { });
                return connection[0].manager
                    .save(photo)
                    .then(photo => {
                        console.log("Photo has been saved. Photo id is", photo.id);
                    });
            })
            .catch(error => {

            });



        }
*/