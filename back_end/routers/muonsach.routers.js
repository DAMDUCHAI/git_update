const express = require("express");
const {    getListBorrowByReader} =require("../controllers/muonsach.controlles");
const {    getListBorrowByEmail} =require("../controllers/muonsach.controlles");

const muonsachRouter = express.Router();
muonsachRouter.get("/author/:id" ,getListBorrowByReader);
muonsachRouter.get("/author-email/:id" ,getListBorrowByEmail);

module.exports = {
    muonsachRouter,
    
  };