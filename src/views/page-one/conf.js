/**
 *  系统级配置
 */
import {mergeMock} from '../../public/utils/confUtils'
/**
 *  页面级 MOCK 开关
 */
const PAGEMOCK = true;
/**
 * 页面模块级 配置项
 * 注意，请求方式 默认是GET、其他特殊格式命名必须 如 PUT_STATUS '_' 链接 ，第一个字段为请求类型
 */
const MODULECONF = {
  part1: {
    NAME: '',
    MOCK: false,
    API: {
      GET: '/common/module/interval',
    }
  }
};

export default mergeMock(PAGEMOCK, MODULECONF);
