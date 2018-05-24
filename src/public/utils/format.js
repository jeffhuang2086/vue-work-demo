/**
 * 格式化后台返回数字类型,
 */
const formatFloat = function(src, pos) {
  try {
    //如果是空值或是null则返回--,
    if (src == null || src == "NULL" || src.length == 0) {
      return "-";
    }
    src += "";
    //如果是0直接返回0,
    if (src == "0")
      return "0";
    if (src.indexOf('E') != -1) src = new Number(src);
    //如果是数字包括负数则根据条件保留指定位数小数并添加千分符号,默认不保留小数
    var re = /^[-]?[0-9]+.?[0-9]*$/;
    if (!re.test(src)) {
      return src;
    } else {
      if (pos) {
        return ((parseFloat(src).toFixed(pos)).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,'));
      } else {
        return ((parseFloat(src).toFixed(0)).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,'));
      }
    }
  } catch (e) {
    //如果出错返回原值
    return src;
  }
}
/**
 *
 * 格式化 金额数值  value=123456789 isFixed=2 格式为 1.23亿
 * isInt true 时 ，当时 万以下的不需要格式化的会自动取整
 */
const formatMoney = function(value, isFixed, isInt) {
  if ((!value) && (value != 0) || (value === '-')) {
    return "-";
  }

  function isFixedX(num) {
    if (isFixed || (isFixed == 0) || (isFixed == '0')) {
      return parseFloat(num).toFixed(Number(isFixed));
    }
    return num;
  }

  if (Math.abs(value) >= 100000000) {
    return ((value / 100000000) > 100) ? (formatFloat(value / 100000000, isFixed) + ' 亿') : (isFixedX(value / 100000000) + ' 亿');
  } else if (Math.abs(value) >= 10000) {
    return ((value / 10000) > 100) ? (formatFloat(value / 10000, isFixed) + ' 万') : (isFixedX(value / 10000) + ' 万');
  } else if (Math.abs(value) < 10000) {
    if (isInt) {
      return formatFloat(isFixedX(value), 0);
    } else {
      return (Math.abs(value) >= 100) ? formatFloat(isFixedX(value), isFixed) : isFixedX(value);
    }
  } else return (value, isFixed);
}
/**
 * 格式化 y轴数值
 */
const formatY = function(value, isFixed) {

  function isInt(number) {
    return parseInt(number) == number;
  }

  function isFixedX(num) {
    if (isFixed || (isFixed == 0) || (isFixed == '0')) {
      return Number(num).toFixed(Number(isFixed));
    }
    return num;
  }

  function formatNumToY(num, flag) {

    function isFixedX(num) {
      if (flag || (flag == 0) || (flag == '0')) {
        try {
          return num.toFixed(Number(flag));
        } catch (e) {
          return num;
        }
      }
      return num;
    }
    /**
     *  十、百 不做格式化处理
     */

    if (Math.abs(num) >= 1000) {
      // return isFixedX(num);
      return isInt(num / 1000) ? num / 1000 + "千" : isFixedX(num);
    } else if (Math.abs(num) >= 100) {
      // return isInt(num / 100) ? num / 100 + " 百" : isFixedX(num);
      return isFixedX(num);
    } else if (Math.abs(num) >= 10) {
      // return isInt(num / 10) ? num / 10 + " 十" : isFixedX(num);
      return isFixedX(num);
    } else {
      return isFixedX(num);
    }
  }

  if (Math.abs(value) >= 100000000) {
    return ((value / 100000000) > 100) ? (formatNumToY(value / 100000000, isFixed) + '亿') : (isFixedX(value / 100000000) + '亿');
  } else if (Math.abs(value) >= 10000) {
    return ((value / 10000) > 100) ? (formatNumToY(value / 10000, isFixed) + '万') : (isFixedX(value / 10000) + '万');
  } else if (Math.abs(value) < 10000) {
    return (Math.abs(value) >= 100) ? formatNumToY(value, isFixed) : isFixedX(value);
  } else return formatNumToY(value, isFixed);
}
/**
 * [格式化百分比 需要total 值]
 */
const formatPerc = function(value, total, pos) {
  if (!total || isNaN(Number(total))) {
    return '-';
  }
  pos = pos || 2;
  return parseFloat(value / total * 100).toFixed(pos) + '%';
}
/**
 * [格式化百分比 0.2313=> 23.23%]
 */
const formatRadio = function(value, pos) {
  if (!value || isNaN(Number(value))) {
    return '-';
  }
  pos = pos || 2;
  return parseFloat(value * 100).toFixed(pos) + '%';
}
/**
 * 格式化字符串
 */
const formatString = function(val) {
  if (!val || val === "null" || val === "undefined") {
    return '-'
  }
  return val;
}
/**
 * 字符串排序
 */
const sortStringX = function(a, b, type) {
  //默认降序
  if (type == undefined) {
    type = 1;
  } else {
    type = (type === 'desc') ? 1 : -1;
  }
  a = a ? a + "" : "";
  b = b ? b + "" : "";

  let temp = '';
  if (a.length > b.length) {
    temp = -1;
  } else if (a.length < b.length) {
    temp = 1;
  } else {
    if (a < b) {
      temp = 1;
    } else if (a > b) {
      temp = -1;
    } else {
      temp = 0;
    }
  }
  return temp * type;
}
/**
 * 字符串排序
 */
const compare = function(property, type) {

  //默认降序
  if (type == undefined) {
    type = 1;
  } else {
    type = (type === 'desc') ? 1 : -1;
  }

  return function(obj1, obj2) {
    let a = obj1[property];
    let b = obj2[property];

    a = a ? a + "" : "";
    b = b ? b + "" : "";

    let temp = '';
    if (a.length > b.length) {
      temp = -1;
    } else if (a.length < b.length) {
      temp = 1;
    } else {
      if (a < b) {
        temp = 1;
      } else if (a > b) {
        temp = -1;
      } else {
        temp = 0;
      }
    }
    return temp * type;
  }
}
/**
 * 将千分位格式的数字字符串转换为浮点数
 * @public
 * @param string sVal 数值字符串
 * @return float
 */
function unformatMoney(sVal) {
  let fTmp = parseFloat(sVal.toString().replace(/,/g, ''));
  return (isNaN(fTmp) ? 0 : fTmp);

}
/**
 * 数字千分位格式化
 * @public
 * @param mixed mVal 数值
 * @param int iAccuracy 小数位精度(默认为2)
 * @return string
 */
function formatMoney2(mVal, iAccuracy) {
  var fTmp = 0.00; //临时变量
  var iFra = 0; //小数部分
  var iInt = 0; //整数部分
  var aBuf = new Array(); //输出缓存
  var bPositive = true; //保存正负值标记(true:正数)
  /**
   * 输出定长字符串，不够补0
   * <li>闭包函数</li>
   * @param int iVal 值
   * @param int iLen 输出的长度
   */
  function funZero(iVal, iLen) {
    var sTmp = iVal.toString();
    var sBuf = new Array();
    for (var i = 0, iLoop = iLen - sTmp.length; i < iLoop; i++)
      sBuf.push('0');
    sBuf.push(sTmp);
    return sBuf.join('');
  };

  iAccuracy = iAccuracy || 2;

  bPositive = (mVal >= 0); //取出正负号
  fTmp = (isNaN(fTmp = parseFloat(mVal))) ? 0 : Math.abs(fTmp); //强制转换为绝对值数浮点
  //所有内容用正数规则处理
  iInt = parseInt(fTmp, 10); //分离整数部分
  iFra = parseInt((fTmp - iInt) * Math.pow(10, iAccuracy) + 0.5, 10); //分离小数部分(四舍五入)

  do {
    aBuf.unshift(funZero(iInt % 1000, 3));
  } while ((iInt = parseInt(iInt / 1000, 10)));
  aBuf[0] = parseInt(aBuf[0], 10).toString(); //最高段区去掉前导0

  return (((bPositive) ? '' : '-') + aBuf.join(',') + ((0 === iFra) ? '' : '.' + funZero(iFra, iAccuracy)));

}
/**
 * 保留n位小数
 */
function nDecimal(num, n) {
  var f_x = parseFloat(num);
  if (isNaN(f_x)) {
    alert('function:changeTwoDecimal->parameter error');
    return false;
  }

  if (!n) return parseInt(f_x);

  // var f_x = Math.round(num * 10 * n) / 10 * n;
  var f_x = Math.round(num * 100) / 100;
  var s_x = f_x.toString();
  var pos_decimal = s_x.indexOf('.');
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += '.';
  }
  while (s_x.length <= pos_decimal + n) {
    s_x += '0';
  }
  return s_x;
}
/**
 * 格式化处理函数
 * #,###.0000%
 */
const decimalformat = function(str, rules) {

  if (str === '-') return

  /**
   * 判断是否包含.
   * 包含则把数字做左右分割
   */
  let leftV = '';
  let rightV = '';
  let bu = '';
  let rLen;
  let ruspLen;
  let rusp;
  let eName = '';

  str = String(str);

  if (rules.includes('%')) {
    str = str * 100;
  }

  /**
   * 科学计数法格式判断
   */
  if (rules.includes('E')) {
    str = String(str);
    let num = rules.split('E')[1].replace('%', '');
    switch (num) {
      case '4':
        eName = '万';
        break;
      case '5':
        eName = '十万';
        break;
      case '6':
        eName = '百万';
        break;
      case '7':
        eName = '千万';
        break;
      case '8':
        eName = '亿';
        break;
    }
    //如果传过来是E4但数据超过亿,按照亿显示
    if (Math.abs(str) > 99999999) {
      str = new Number(str + 'E-8');
      eName = '亿';
    } else {
      str = new Number(str + 'E-' + num);
    }
    if (rules.includes('%')) {
      rules = rules.split('E')[0] + '%';
    } else {
      rules = rules.split('E')[0];
    }

  }
  if (rules.includes('.')) {
    let sp = String(str).split('.');
    // let rLen;
    leftV = sp[0];
    if (sp[1]) {
      rightV = sp[1];
    } else {
      rightV = '';
    }
    rLen = rightV.length;

    rusp = rules.split('.')[1];

    rusp = rusp.split('%')[0];

    ruspLen = rusp.length;

    /**
     * 小数位数  ===   >  <
     */
    for (let i = 0; i < (ruspLen); i++) {
      bu = bu + '0';
    }
  }

  // if(rules.includes(',')){
  //   if(ruspLen){
  //     str = formatMoney(str,ruspLen)
  //   }else{
  //     str = formatMoney(str);
  //     str = str.split('.')[0];
  //   }
  // }

  ruspLen = ruspLen ? ruspLen : 0;
  /**
   * 不包含‘.’就需要做取整操作
   * 统一为四舍五入
   */
  if (!rules.includes('.')) {
    str = Math.round(str);
  }


  if (rules.includes('%')) {
    if (!String(str).includes('.')) {
      return (bu === '') ? str + '%' : str + '.' + bu + '%' + eName
    } else if (rules.includes('.') && !rules.includes(',')) {
      return nDecimal(Number(str), ruspLen) + '%' + eName
    } else if (rules.includes('.') && rules.includes(',')) {
      str = nDecimal(Number(str), ruspLen);
      if (ruspLen) {
        str = formatMoney2(str, ruspLen)
      } else {
        str = formatMoney2(str);
        str = str.split('.')[0];
      }
      return str + '%' + eName;
    } else {
      return nDecimal(Number(str), ruspLen) + '%' + eName;
    }
  } else {
    if (rules.includes('.') && !rules.includes(',')) {
      return nDecimal(Number(str), ruspLen) + eName;
    } else if (rules.includes('.') && rules.includes(',')) {
      str = nDecimal(Number(str), ruspLen);
      if (ruspLen) {
        str = formatMoney2(str, ruspLen)
      } else {
        str = formatMoney2(str);
        str = str.split('.')[0];
      }

      /**
       * 如果str不包含小数，但是格式化规则包含小数，则需要补小数位
       */
      str = String(str).includes('.') ? str : (str + '.' + bu);

      return str + eName;

    } else if (!rules.includes('.') && rules.includes(',')) {
      return formatMoney2(str, ruspLen) + eName;
    } else {
      return str + eName

    }

  }
}

/**
 * 对象数组按照指定变量排序
 */
const compareSort = function(prop) {
  return function(obj1, obj2) {
    var val1 = obj1[prop];
    var val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 < val2) {
      return 1;
    } else if (val1 > val2) {
      return -1;
    } else {
      return 0;
    }
  }
}

const fullscreen = function() {
  var docElm = document.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  }
}

// 退出全屏
const exitFullscreen = function() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

/**
 * 定义去除字符前后空格
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
const trim = function(str) {
  return str.replace(/\s+/g, "");
}



export {
  formatFloat,
  formatMoney,
  formatY,
  formatPerc,
  formatString,
  formatRadio,
  decimalformat,
  compareSort,
  formatMoney2,
  unformatMoney,
  fullscreen,
  exitFullscreen,
  trim
};
