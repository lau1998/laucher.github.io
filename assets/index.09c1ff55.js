import { l as defineComponent, r as ref, w as watch, t as reactive, d as computed, I as toRefs, m as resolveComponent, M as createElementBlock, N as createBaseVNode, k as createVNode, q as withCtx, P as createCommentVNode, F as Fragment, n as openBlock, V as createTextVNode, W as toDisplayString, a as getCurrentInstance, a5 as pushScopeId, a6 as popScopeId } from './element-plus.2c54c765.js';
import { _ as _export_sfc, u as useRouter, a as useRoute, i as useLang, L as Login, c as useApp } from './index.bb22b372.js';
import { C as ChangeLang } from './ChangeLang.bd1aeaca.js';
import { g as ge } from './vue3-puzzle-vcode.es.2134bfe3.js';
import './mockjs.5bb7b8f9.js';

var index_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main = defineComponent({
  components: { ChangeLang, Vcode: ge },
  name: 'login',
  setup() {
    const { proxy: ctx } = getCurrentInstance(); // 可以把ctx当成vue2中的this
    const router = useRouter();
    const route = useRoute();
    const { lang } = useLang();
    const isShow = ref(false);
    watch(lang, () => {
      state.rules = getRules();
    });
    const getRules = () => ({
      userName: [
        {
          required: true,
          message: ctx.$t('login.rules-username'),
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: ctx.$t('login.rules-password'),
          trigger: 'blur',
        },
        {
          min: 6,
          max: 12,
          message: ctx.$t('login.rules-regpassword'),
          trigger: 'blur',
        },
      ],
    });
    const gologin = () => {
      state.loginForm.validate(async valid => {
        if (valid) {
          state.loading = true;
          const { code, data, message } = await Login(state.model);
          if (+code === 200) {
            ctx.$message.success({
              message: ctx.$t('login.loginsuccess'),
              duration: 1000,
            });

            const targetPath = decodeURIComponent(route.query.redirect);
            if (targetPath.startsWith('http')) {
              // 如果是一个url地址
              window.location.href = targetPath;
            } else if (targetPath.startsWith('/')) {
              // 如果是内部路由地址
              router.push(targetPath);
            } else {
              router.push('/');
            }
            useApp().initToken(data);
          } else {
            ctx.$message.error(message);
          }
          state.loading = false;
        }
      });
    };
    // 验证码
    const success = msg => {
      isShow.value = false;
      console.log('验证通过' + msg);
      gologin();
    };
    // 用户点击遮罩层，应该关闭模态框
    const close = () => {
      isShow.value = false;
    };
    // 用户验证失败
    const fail = () => {
      console.log('验证失败');
    };
    const state = reactive({
      model: {
        userName: 'laucher',
        password: '123456',
      },
      rules: getRules(),
      loading: false,
      btnText: computed(() =>
        state.loading ? ctx.$t('login.logining') : ctx.$t('login.login')
      ),
      loginForm: ref(null),
      submit: () => {
        //图片滑块验证码
        isShow.value = true;
        if (state.loading) {
          return
        }
      },
    });

    return {
      ...toRefs(state),
      isShow,
      success,
      close,
      fail,
    }
  },
});

const _withScopeId = n => (pushScopeId("data-v-37dfd6fc"),n=n(),popScopeId(),n);
const _hoisted_1 = { class: "login" };
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("h1", { class: "title" }, "XXX公司仓储管理系统", -1 /* HOISTED */));
const _hoisted_3 = { class: "change-lang" };
const _hoisted_4 = { class: "verify" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_form = resolveComponent("el-form");
  const _component_change_lang = resolveComponent("change-lang");
  const _component_Vcode = resolveComponent("Vcode");

  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_el_form, {
        class: "form",
        model: _ctx.model,
        rules: _ctx.rules,
        ref: "loginForm"
      }, {
        default: withCtx(() => [
          _hoisted_2,
          createVNode(_component_el_form_item, { prop: "userName" }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                class: "text",
                modelValue: _ctx.model.userName,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.model.userName) = $event)),
                "prefix-icon": "User",
                clearable: "",
                placeholder: _ctx.$t('login.username')
              }, null, 8 /* PROPS */, ["modelValue", "placeholder"])
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_el_form_item, { prop: "password" }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                class: "text",
                modelValue: _ctx.model.password,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.model.password) = $event)),
                "prefix-icon": "Lock",
                "show-password": "",
                clearable: "",
                placeholder: _ctx.$t('login.password')
              }, null, 8 /* PROPS */, ["modelValue", "placeholder"])
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_el_form_item, null, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                loading: _ctx.loading,
                type: "primary",
                class: "btn",
                size: "large",
                onClick: _ctx.submit
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.btnText), 1 /* TEXT */)
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["loading", "onClick"])
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["model", "rules"])
    ]),
    createBaseVNode("div", _hoisted_3, [
      createVNode(_component_change_lang)
    ]),
    createBaseVNode("div", _hoisted_4, [
      createVNode(_component_Vcode, {
        show: _ctx.isShow,
        onSuccess: _ctx.success,
        onClose: _ctx.close,
        onFail: _ctx.fail,
        imgs: [
        'https://img9.51tietu.net/pic/20190921/4wb1oekxetj4wb1oekxetj.jpg',
        'https://img2.baidu.com/it/u=3446726283,3593099471&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500',
        'https://img1.baidu.com/it/u=2458542548,2061672331&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
        'https://img1.baidu.com/it/u=3798657885,3977761980&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      ]
      }, null, 8 /* PROPS */, ["show", "onSuccess", "onClose", "onFail", "imgs"]),
      createCommentVNode(" <button @click=\"submit\">登录</button> ")
    ])
  ], 64 /* STABLE_FRAGMENT */))
}
var index = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-37dfd6fc"]]);

export { index as default };
