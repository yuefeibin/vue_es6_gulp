import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// 函数封装 获取8位数uuid
getUId = () => {
  return uuidv4().split('-')[0];  // ⇨ '9b1deb4d'
}   