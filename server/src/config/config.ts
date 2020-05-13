
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { Logger } from "tslog";
import corsConfig from '../config/config';

export class CorsConfig {
    options: cors.CorsOptions;
    public app: express.Application;
    router = express.Router();
    constructor() {
        this.configApp();
    }

    configApp() {
        this.options = {
            allowedHeaders: ["*"],
            credentials: false,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: true
        };
        dotenv.config();
        this.app = express();
        this.app.use(cors(this.options));
        this.router.use(cors(this.options));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/uploads', express.static(process.env.PWD + '/uploads'));
        this.app.use('/', express.static(process.env.PWD + '/dist'));
        this.app.use('/', this.router);
    }
}

export default new CorsConfig();