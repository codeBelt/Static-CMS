/// <reference path="../typings/express/express.d.ts" />
/// <reference path="../typings/node/node.d.ts" />

import * as fs from "fs";
import * as express from "express";

/**
 * TODO: YUIDoc_comment
 *
 * @class Server
 * @constructor
 **/
class Server {

    constructor() {
        console.log("hey");

        //fs.writeFile("/tmp/test", "Hey there!", function(err) {
        //    if(err) {
        //        return console.log(err);
        //    }
        //
        //    console.log("The file was saved!");
        //});
//console.log("fs", fs);
console.log("express", express);
        fs.writeFile('message.txt', 'Hello Node.js', (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
        });
    }


}

export default new Server();
