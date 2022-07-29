'use strict';
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === 'function' && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === 'number')
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(
      s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
    );
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.findParentArr =
  exports.findParentTree =
  exports.deepClone =
  exports.treeToArray =
  exports.arrayToTree =
    void 0;
/**
 * 数组转Tree
 * @param {*} items 数组
 * @param {*} options 字段指定与配置
 * @returns 返回值
 */
var arrayToTree = function (items, options) {
  var e_1, _a;
  if (options === void 0) {
    options = {};
  }
  if (!options.idField) options.idField = 'id';
  if (!options.pidField) options.pidField = 'pid';
  if (!options.childrenField) options.childrenField = 'children';
  var idField = options.idField,
    pidField = options.pidField,
    childrenField = options.childrenField;
  var findFun = function (parent, child) {
    return parent[idField] === child[pidField];
  };
  var tree = {};
  var _loop_1 = function (item) {
    var ptr = items.find(function (parent) {
      return findFun(parent, item);
    });
    if (ptr === undefined) ptr = tree;
    if (!ptr[childrenField]) {
      ptr[childrenField] = [];
    }
    delete item[pidField];
    ptr[childrenField].push(item);
  };
  try {
    for (
      var items_1 = __values(items), items_1_1 = items_1.next();
      !items_1_1.done;
      items_1_1 = items_1.next()
    ) {
      var item = items_1_1.value;
      _loop_1(item);
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a = items_1.return))
        _a.call(items_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return tree[childrenField] || [];
};
exports.arrayToTree = arrayToTree;
/**
 * 私有方法 - 拆分Tree的Children
 * @param {*} node 拆分节点
 * @param {*} items 容器
 * @param {*} options 配置数据
 * @param {*} parentId 顶级父级id
 */
var treeToArrayVisitNode = function (node, items, options, parentId) {
  var e_2, _a;
  var idField = options.idField,
    pidField = options.pidField,
    childrenField = options.childrenField;
  node[pidField] = parentId;
  items.push(node);
  if (node[childrenField]) {
    try {
      for (
        var _b = __values(node[childrenField]), _c = _b.next();
        !_c.done;
        _c = _b.next()
      ) {
        var child = _c.value;
        treeToArrayVisitNode(child, items, options, node[idField]);
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
  }
  delete node[childrenField];
};
/**
 * Tree转数组
 * @param {*} tree 原数据
 * @param {*} options 配置数据
 * @returns 返回值
 */
var treeToArray = function (tree, options) {
  var e_3, _a;
  if (options === void 0) {
    options = {};
  }
  if (!options.idField) options.idField = 'id';
  if (!options.pidField) options.pidField = 'pid';
  if (!options.childrenField) options.childrenField = 'children';
  var items = [];
  try {
    for (
      var tree_1 = __values(tree), tree_1_1 = tree_1.next();
      !tree_1_1.done;
      tree_1_1 = tree_1.next()
    ) {
      var node = tree_1_1.value;
      treeToArrayVisitNode(node, items, options, undefined);
    }
  } catch (e_3_1) {
    e_3 = { error: e_3_1 };
  } finally {
    try {
      if (tree_1_1 && !tree_1_1.done && (_a = tree_1.return)) _a.call(tree_1);
    } finally {
      if (e_3) throw e_3.error;
    }
  }
  return items;
};
exports.treeToArray = treeToArray;
/**
 * 数组（对象）深度克隆
 * @param {*} obj
 * @returns
 */
var deepClone = function (obj) {
  var objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
    for (var key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        objClone[key] = (0, exports.deepClone)(obj[key]);
      } else {
        objClone[key] = obj[key];
      }
    }
  }
  return objClone;
};
exports.deepClone = deepClone;
/**
 * 私有方法-通过子id 获取祖级
 * @param {*} arr 原数组
 * @param {*} id 子id
 * @param {*} items 容器
 * @param {*} options 配置数据
 */
var getParent = function (arr, id, items, options) {
  var idField = options.idField,
    pidField = options.pidField;
  var tmp = arr.filter(function (i) {
    return i[idField] === id;
  })[0];
  if (tmp && tmp[pidField]) {
    items.unshift(tmp);
    getParent(arr, tmp[pidField], items, options);
  } else {
    items.unshift(tmp);
  }
};
/**
 * 在 Tree 中获取指定子id的祖级数据
 * @param {*} tree 原数据-Tree
 * @param {*} sonId 子id
 * @param {*} options 配置数据
 * @returns
 */
var findParentTree = function (tree, sonId, options) {
  if (options === void 0) {
    options = {};
  }
  if (!options.idField) options.idField = 'id';
  if (!options.pidField) options.pidField = 'pid';
  if (!options.childrenField) options.childrenField = 'children';
  var idField = options.idField,
    pidField = options.pidField;
  var arr = (0, exports.treeToArray)(tree, options);
  var items = [];
  var tmp = arr.filter(function (i) {
    return i[idField] === sonId;
  })[0];
  if (tmp) {
    items.unshift(tmp);
    getParent(arr, tmp[pidField], items, options);
  }
  return items;
};
exports.findParentTree = findParentTree;
/**
 * 在数组中获取指定子id的祖级数据
 * @param {*} arr 原数据-数组
 * @param {*} sonId 子id
 * @param {*} options 配置数据
 * @returns
 */
var findParentArr = function (arr, sonId, options) {
  if (options === void 0) {
    options = {};
  }
  if (!options.idField) options.idField = 'id';
  if (!options.pidField) options.pidField = 'pid';
  var idField = options.idField,
    pidField = options.pidField;
  var items = [];
  var tmp = arr.filter(function (i) {
    return i[idField] === sonId;
  })[0];
  if (tmp) {
    items.unshift(tmp);
    getParent(arr, tmp[pidField], items, options);
  }
  return items;
};
exports.findParentArr = findParentArr;
