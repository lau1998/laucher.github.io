import { t as reactive, I as toRefs, a as getCurrentInstance, l as defineComponent, m as resolveComponent, n as openBlock, M as createElementBlock, N as createBaseVNode, W as toDisplayString, k as createVNode, q as withCtx, V as createTextVNode, F as Fragment } from './element-plus.2c54c765.js';
import { u as useRouter, a as useRoute, h as useTags, _ as _export_sfc } from './index.bb22b372.js';
import './mockjs.5bb7b8f9.js';

// 关闭当前标签
var useCloseTag = () => {
  const instance = getCurrentInstance();
  const router = useRouter();
  const route = useRoute();
  const { delTag } = useTags();
  const state = reactive({
    /**
     * @param {String} fullPath 要跳转到那个页面的地址
     * @param {Boolean} reload 是否在跳转后重新渲染页面组件
     * @param {Boolean} f5 是否在跳转后刷新页面
     * @return {*}
     */
    closeTag({ fullPath, reload, f5 } = {}) {
      delTag(route);
      fullPath ? router.push(fullPath) : router.back();
      reload &&
        setTimeout(() => {
          instance.appContext.config.globalProperties.$tagsbar.refreshSelectedTag(
            route
          );
        }, 500);

      f5 && setTimeout(() => window.location.reload(), 500);
    },
  });

  return toRefs(state)
};

const _sfc_main = defineComponent({
  setup() {
    const { closeTag } = useCloseTag();
    return {
      closeTag,
    }
  },
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");

  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("h2", null, "编辑页面 id:" + toDisplayString(_ctx.$route.params.id), 1 /* TEXT */),
    createVNode(_component_el_button, {
      type: "primary",
      onClick: _ctx.closeTag
    }, {
      default: withCtx(() => [
        createTextVNode("关闭")
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick"]),
    createVNode(_component_el_button, {
      type: "success",
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.closeTag({ reload: true })))
    }, {
      default: withCtx(() => [
        createTextVNode(" 关闭当前页面，更新上级页面（组件重新渲染） ")
      ]),
      _: 1 /* STABLE */
    }),
    createVNode(_component_el_button, {
      type: "warning",
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.closeTag({ f5: true })))
    }, {
      default: withCtx(() => [
        createTextVNode(" 关闭当前页面，刷新上级页面（浏览器刷新） ")
      ]),
      _: 1 /* STABLE */
    })
  ], 64 /* STABLE_FRAGMENT */))
}
var Edit = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { Edit as default };
