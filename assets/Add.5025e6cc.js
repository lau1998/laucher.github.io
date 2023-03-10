import { n as openBlock, M as createElementBlock, F as Fragment, N as createBaseVNode, V as createTextVNode } from './element-plus.2c54c765.js';
import { _ as _export_sfc } from './index.bb22b372.js';
import './mockjs.5bb7b8f9.js';

const _sfc_main = {};

const _hoisted_1 = /*#__PURE__*/createBaseVNode("h2", null, "该页面入口不在菜单中显示", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/createBaseVNode("div", null, [
  /*#__PURE__*/createTextVNode(" 如果不需要在菜单中显示： "),
  /*#__PURE__*/createBaseVNode("br"),
  /*#__PURE__*/createTextVNode(" 需要配置路由增加属性hidden: true，注意不是在meta中增加该属性，而是跟meta同级 ")
], -1 /* HOISTED */);

function _sfc_render(_ctx, _cache) {
  return (openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2
  ], 64 /* STABLE_FRAGMENT */))
}
var Add = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { Add as default };
