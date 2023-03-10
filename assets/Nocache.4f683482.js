import { l as defineComponent, n as openBlock, M as createElementBlock, N as createBaseVNode } from './element-plus.2c54c765.js';
import { _ as _export_sfc } from './index.bb22b372.js';
import './mockjs.5bb7b8f9.js';

const _sfc_main = defineComponent({
  name: 'test-no-cache', // 该name必须跟路由配置的name一致，不一致或者不设置name则不缓存
  setup() {
    console.log('nocache');
  },
});

const _hoisted_1 = /*#__PURE__*/createBaseVNode("dt", null, "有以下两种方式设置页面不缓存：", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/createBaseVNode("dd", null, "- 当前页面不设置name属性", -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/createBaseVNode("dd", null, "- 或者路由配置的meta增加noCache: true", -1 /* HOISTED */);
const _hoisted_4 = [
  _hoisted_1,
  _hoisted_2,
  _hoisted_3
];

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("dl", null, _hoisted_4))
}
var Nocache = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { Nocache as default };
