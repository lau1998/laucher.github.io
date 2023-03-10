import { l as defineComponent, ae as onActivated, n as openBlock, M as createElementBlock, N as createBaseVNode } from './element-plus.2c54c765.js';
import { _ as _export_sfc } from './index.bb22b372.js';
import './mockjs.5bb7b8f9.js';

const _sfc_main = defineComponent({
  name: 'test-cache', // 该name必须跟路由配置的name一致
  setup() {
    console.log('cache');
    onActivated(() => {
      console.log('onActivated');
    });
  },
});

const _hoisted_1 = /*#__PURE__*/createBaseVNode("dt", null, "页面缓存必须满足以下条件：", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/createBaseVNode("dd", null, "1. 路由配置name属性", -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/createBaseVNode("dd", null, "2. 当前页面设置name属性，并且跟路由配置的name属性一致，否则无法缓存", -1 /* HOISTED */);
const _hoisted_4 = [
  _hoisted_1,
  _hoisted_2,
  _hoisted_3
];

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("dl", null, _hoisted_4))
}
var Cache = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { Cache as default };
