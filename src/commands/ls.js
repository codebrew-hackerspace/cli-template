// @flow
// const path = require("path");
// const chalk = require("chalk");
// const fs = require("fs");
// const util = require("util");
// const net = require("net");
// const process = require("process");
// var request = require("request");

const handleErrors = require("../utils/handleErrors");


module.exports.command = "hello [name]";
module.exports.describe = "Lists all the VMs that currently store sdfsfilename.";
module.exports.builder = (yargs: any) => yargs;

module.exports.handler = handleErrors(async (argv: {}) => {

    console.log("Hello " + argv.name)
    
});
