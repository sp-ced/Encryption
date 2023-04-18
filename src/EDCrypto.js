import React from "react";
import { secretPassAdmin } from "./Constant";
import TestCrypto from "./TestCrypto";

const EDCrypto = () => {
  sessionStorage.clear();
  // const md5=require('md5')
  // const role = 'admin'
  // const hashedRole= md5(role)

  // sessionStorage.setItem(role,hashedRole)

  // console.log('Normal role : ', role)
  // console.log('Hashed role : ', md5(role))
  var CryptoJS = require("crypto-js");
  const secretPass = "admin";
  const secretPassRole = " keyRole";
  const value = CryptoJS.AES.encrypt(
    JSON.stringify("admin"),
    secretPassAdmin
  ).toString();
  const key = CryptoJS.MD5("admin").toString();

  sessionStorage.setItem(key, value);
  return (
    <>
      <div> Crypto.js </div>
      <TestCrypto />
    </>
  );
};

export default EDCrypto;
