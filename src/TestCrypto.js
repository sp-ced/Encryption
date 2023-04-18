import { secretPassAdmin } from './Constant';

const TestCrypto = () => {
    const CryptoJS = require("crypto-js");          
    const sessionData=sessionStorage.getItem('21232f297a57a5a743894a0e4a801fc3')
    console.log("encrypted value",sessionData);
    const bytes = CryptoJS.AES.decrypt(sessionData, secretPassAdmin);
    const data1 = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log("decrypted value", data1);
  return (
    <div>TestCrypto</div>
  )
}

export default TestCrypto