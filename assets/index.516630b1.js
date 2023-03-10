import { h } from './element-plus.2c54c765.js';
import { u as useRouter, a as useRoute } from './index.bb22b372.js';
import './mockjs.5bb7b8f9.js';

const _sfc_main = {
  setup() {
    const router = useRouter();
    const route = useRoute();
    router.replace(route.fullPath.replace(/^\/redirect/, ''));
  },
  render() {
    return h('div')
  },
};

export { _sfc_main as default };
