import { m as resolveComponent, n as openBlock, p as createBlock, q as withCtx, k as createVNode, M as createElementBlock, U as renderList, F as Fragment, N as createBaseVNode, u as unref, V as createTextVNode, W as toDisplayString } from './element-plus.2c54c765.js';
import { _ as _export_sfc, i as useLang } from './index.bb22b372.js';

var ChangeLang_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1 = { class: "change-lang" };

const _sfc_main = {
  __name: 'ChangeLang',
  setup(__props) {

const langlist = [
  {
    name: '简体中文',
    value: 'zh-cn',
  },
  {
    name: 'English',
    value: 'en',
  },
];
const { changeLang } = useLang();

return (_ctx, _cache) => {
  const _component_svg_icon = resolveComponent("svg-icon");
  const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
  const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
  const _component_el_dropdown = resolveComponent("el-dropdown");

  return (openBlock(), createBlock(_component_el_dropdown, { trigger: "hover" }, {
    dropdown: withCtx(() => [
      createVNode(_component_el_dropdown_menu, null, {
        default: withCtx(() => [
          (openBlock(), createElementBlock(Fragment, null, renderList(langlist, (item) => {
            return createVNode(_component_el_dropdown_item, {
              onClick: $event => (unref(changeLang)(item.value)),
              key: item.value
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.name), 1 /* TEXT */)
              ]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])
          }), 64 /* STABLE_FRAGMENT */))
        ]),
        _: 1 /* STABLE */
      })
    ]),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_svg_icon, {
          name: "language",
          class: "icon"
        })
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

};
var ChangeLang = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-857553dc"]]);

export { ChangeLang as C };
