const MODE = 'devlopment'   //开发环境
// const MODE = 'production'   //上线环境

const DEVELOPMENT_PREFIX = 'http://localhost:3000/api';
const PRODUCTION_PREFIX = 'https://www.production.com/api';

const VERSION = 'V0.0.1';  //版本型号
const PREFIX =  ( MODE === 'production' ) ? PRODUCTION_PREFIX : DEVELOPMENT_PREFIX;

export default{
  MODE: MODE,
  version: VERSION,
  login: `${PREFIX}/login`,
  todo: `${PREFIX}/todo`,
  honor: `${PREFIX}/honor`,
  okr: `${PREFIX}/okr`,
  okrSingle: `${PREFIX}/okrSingle`,
  todoKeyresult: `${PREFIX}/todoKeyresult`,
  okrTodo: `${PREFIX}/okrTodo`,
  kr: `${PREFIX}/kr`
}