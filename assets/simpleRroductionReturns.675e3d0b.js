import { r as ref, n as openBlock, M as createElementBlock, k as createVNode, u as unref, N as createBaseVNode } from './element-plus.2c54c765.js';
import { g as ge } from './vue3-puzzle-vcode.es.2134bfe3.js';

//图片滑块验证码

const _sfc_main = {
  __name: 'simpleRroductionReturns',
  setup(__props) {

const isShow = ref(false);
const submit = () => {
  isShow.value = true;
};

// 用户通过了验证
const success = msg => {
  isShow.value = false;
  console.log('验证通过' + msg);
};
// 用户点击遮罩层，应该关闭模态框
const close = () => {
  isShow.value = false;
};
// 用户验证失败
const fail = () => {
  console.log('验证失败');
};

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", null, [
    createVNode(unref(ge), {
      show: isShow.value,
      onSuccess: success,
      onClose: close,
      onFail: fail
    }, null, 8 /* PROPS */, ["show"]),
    createBaseVNode("button", { onClick: submit }, "登录")
  ]))
}
}

};

export { _sfc_main as default };
