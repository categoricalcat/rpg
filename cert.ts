import { readFileSync } from 'fs';

export default {
  key: readFileSync('./.cert/key.pem'),
  cert: readFileSync('./.cert/crt.pem')
}
