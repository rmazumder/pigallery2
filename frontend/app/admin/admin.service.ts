///<reference path="../../browser.d.ts"/>

import {Injectable} from 'angular2/core'; 
import {NetworkService} from "../model/network.service";
import {Http} from "angular2/http";
import {Message} from "../../../common/entities/Message";
import {Directory} from "../../../common/entities/Directory"; 

@Injectable()
export class GalleryService  extends NetworkService{
 

    constructor(_http:Http){
        super(_http);
    }

    public getDirectory(directoryName:string): Promise<Message<Directory>>{
        return this.getJson("/gallery/"+directoryName);
    }


 


}