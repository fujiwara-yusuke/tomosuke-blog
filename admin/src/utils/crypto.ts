import * as crypto from "crypto-js";

export const descryptedPassWord = (password: string) => {
  var key = "12345678901234567890123456789012";
  const decrypted = crypto.AES.decrypt(password, key);
  return decrypted.toString();
}