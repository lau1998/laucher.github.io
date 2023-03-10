import { l as defineComponent, r as ref, t as reactive, o as onMounted, m as resolveComponent, O as resolveDirective, n as openBlock, M as createElementBlock, P as createCommentVNode, k as createVNode, q as withCtx, V as createTextVNode, W as toDisplayString, R as withDirectives, p as createBlock, a3 as normalizeClass, N as createBaseVNode, F as Fragment, U as renderList, K as ElMessage, a5 as pushScopeId, a6 as popScopeId } from './element-plus.2c54c765.js';
import { d as defineStore, e as setItem, g as getItem, _ as _export_sfc } from './index.bb22b372.js';
import './mockjs.5bb7b8f9.js';

// 下载loadLodop
// export function loadLodop() {
//   const lodopurl = '../lodop/CLodop_Setup_for_Win32NT.exe'
//   window.location.href = lodopurl
// }
/* eslint-disable */
// import { MessageBox } from 'element-plus'
var CreatedOKLodop7766 = null;

//====判断是否需要安装CLodop云打印服务器:====
function needCLodop() {
  try {
    var ua = navigator.userAgent;
    if (ua.match(/Windows\sPhone/i) != null) return true
    if (ua.match(/iPhone|iPod/i) != null) return true
    if (ua.match(/Android/i) != null) return true
    if (ua.match(/Edge\D?\d+/i) != null) return true

    var verTrident = ua.match(/Trident\D?\d+/i);
    var verIE = ua.match(/MSIE\D?\d+/i);
    var verOPR = ua.match(/OPR\D?\d+/i);
    var verFF = ua.match(/Firefox\D?\d+/i);
    var x64 = ua.match(/x64/i);
    if (verTrident == null && verIE == null && x64 !== null) return true
    else if (verFF !== null) {
      verFF = verFF[0].match(/\d+/);
      if (verFF[0] >= 42 || x64 !== null) return true
    } else if (verOPR !== null) {
      verOPR = verOPR[0].match(/\d+/);
      if (verOPR[0] >= 32) return true
    } else if (verTrident == null && verIE == null) {
      var verChrome = ua.match(/Chrome\D?\d+/i);
      if (verChrome !== null) {
        verChrome = verChrome[0].match(/\d+/);
        if (verChrome[0] >= 42) return true
      }
    }
    return false
  } catch (err) {
    return true
  }
}

//====页面引用CLodop云打印必须的JS文件：====
if (needCLodop()) {
  var head =
    document.head ||
    document.getElementsByTagName('head')[0] ||
    document.documentElement;
  var oscript = document.createElement('script');
  oscript.src = 'http://localhost:8000/CLodopfuncs.js?priority=1';
  head.insertBefore(oscript, head.firstChild);

  //引用双端口(8000和18000）避免其中某个被占用：
  oscript = document.createElement('script');
  oscript.src = 'http://localhost:18000/CLodopfuncs.js?priority=0';
  head.insertBefore(oscript, head.firstChild);
}

// 下载loadLodop
function loadLodop() {
  const lodopurl = '../lodop/CLodop_Setup_for_Win32NT.exe';
  window.location.href = lodopurl;
}

//====获取LODOP对象的主过程：====
function getLodop(oOBJECT, oEMBED) {
  var strHtmInstall =
    "<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop32.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
  var strHtmUpdate =
    "<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop32.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>";
  var strHtm64_Install =
    "<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop64.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
  var strHtm64_Update =
    "<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop64.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>";
  var strHtmFireFox =
    "<br><br><font color='#FF00FF'>（注意：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它）</font>";
  var strHtmChrome =
    "<br><br><font color='#FF00FF'>(如果此前正常，仅因浏览器升级或重安装而出问题，需重新执行以上安装）</font>";
  var strCLodopUpdate =
    "<br><font color='#FF00FF'>CLodop云打印服务需升级!点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>执行升级</a>,升级后请刷新页面。</font>";
  var LODOP;
  try {
    var isIE =
      navigator.userAgent.indexOf('MSIE') >= 0 ||
      navigator.userAgent.indexOf('Trident') >= 0;
    if (needCLodop()) {
      try {
        LODOP = getCLodop();
      } catch (err) {
        MessageBox({
          title: '温馨提示',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: '下载',
          cancelButtonText: '取消',
          message:
            '检测到您还未安装C-LODOP套打控件,请确认启用后再打印。或您可点击下载该套打控件，安装成功后刷新页面再进行打印',
          callback: res => {
            if (res === 'confirm') {
              loadLodop();
            }
          },
        });
      }
      if (!LODOP && document.readyState !== 'complete') {
        alert('C-Lodop没准备好，请稍后再试！');
        return
      }
      if (!LODOP) {
        // if (isIE) document.write(strCLodopInstall); else
        // document.documentElement.innerHTML=strCLodopInstall+document.documentElement.innerHTML;
        // return;
      } else {
        if (CLODOP.CVERSION < '3.0.0.2') {
          if (isIE) document.write(strCLodopUpdate);
          else
            document.documentElement.innerHTML =
              strCLodopUpdate + document.documentElement.innerHTML;
        }
        if (oEMBED && oEMBED.parentNode) oEMBED.parentNode.removeChild(oEMBED);
        if (oOBJECT && oOBJECT.parentNode)
          oOBJECT.parentNode.removeChild(oOBJECT);
      }
    } else {
      var is64IE = isIE && navigator.userAgent.indexOf('x64') >= 0;
      //=====如果页面有Lodop就直接使用，没有则新建:==========
      if (oOBJECT != undefined || oEMBED != undefined) {
        if (isIE) LODOP = oOBJECT;
        else LODOP = oEMBED;
      } else if (CreatedOKLodop7766 == null) {
        LODOP = document.createElement('object');
        LODOP.setAttribute('width', 0);
        LODOP.setAttribute('height', 0);
        LODOP.setAttribute(
          'style',
          'position:absolute;left:0px;top:-100px;width:0px;height:0px;'
        );
        if (isIE)
          LODOP.setAttribute(
            'classid',
            'clsid:2105C259-1E0C-4534-8141-A753534CB4CA'
          );
        else LODOP.setAttribute('type', 'application/x-print-lodop');
        document.documentElement.appendChild(LODOP);
        CreatedOKLodop7766 = LODOP;
      } else LODOP = CreatedOKLodop7766;
      //=====Lodop插件未安装时提示下载地址:==========
      if (LODOP == null || typeof LODOP.VERSION == 'undefined') {
        if (navigator.userAgent.indexOf('Chrome') >= 0)
          document.documentElement.innerHTML =
            strHtmChrome + document.documentElement.innerHTML;
        if (navigator.userAgent.indexOf('Firefox') >= 0)
          document.documentElement.innerHTML =
            strHtmFireFox + document.documentElement.innerHTML;
        if (is64IE) document.write(strHtm64_Install);
        else if (isIE) document.write(strHtmInstall);
        else
          document.documentElement.innerHTML =
            strHtmInstall + document.documentElement.innerHTML;
        return LODOP
      }
    }
    if (LODOP.VERSION < '6.0') {
      if (!needCLodop()) {
        if (is64IE) document.write(strHtm64_Update);
        else if (isIE) document.write(strHtmUpdate);
        else
          document.documentElement.innerHTML =
            strHtmUpdate + document.documentElement.innerHTML;
      }
      return LODOP
    }
    //===如下空白位置适合调用统一功能(如注册语句、语言选择等):===
    //LODOP.SET_LICENSES("北京XXXXX公司","8xxxxxxxxxxxxx5","","");

    //===========================================================
    return LODOP
  } catch (err) {
    // alert('getLodop出错:' + err)
    console.error('getLodop出错:' + err);
  }
}

const useWarehousingData = defineStore('warehousingData', {
  state: () => ({
    newData: null,
  }),
  actions: {
    // 清除信息
    clearWarehousingData() {
      this.newData = null;
    },
    //保存信息
    addWarehousingData(data) {
      this.newData = data;
      // 保存到localStorage
      setItem('warehousingData', this.newData);
    },
    //获取信息
    getWarehousingData() {
      // 保存到localStorage
      return getItem('warehousingData')
    },
  },
});

var simpleProductionReceipt_vue_vue_type_style_index_0_scoped_true_lang = '';

const WarehousingData = useWarehousingData();
const _sfc_main = defineComponent({
  setup() {
    const tableData = ref([
      {
        encoded: "",
        name: "",
        unit: "\u4EF6",
        receivable: "0",
        netReceipts: "0",
        farm: "",
        storehouse: ""
      }
    ]);
    const columnConfig = [
      { prop: "encoded", label: "\u4EA7\u54C1\u7F16\u7801" },
      { prop: "name", label: "\u4EA7\u54C1\u540D\u79F0" },
      { prop: "unit", label: "\u5355\u4F4D", width: "100" },
      { prop: "receivable", label: "\u5E94\u6536", width: "140" },
      { prop: "netReceipts", label: "\u5B9E\u6536", width: "140" },
      { prop: "farm", label: "\u751F\u6210\u8F66\u95F4" },
      { prop: "storehouse", label: "\u4ED3\u5E93" }
    ];
    const onAddItem = () => {
      tableData.value.push({
        encoded: "",
        name: "",
        unit: "\u4EF6",
        receivable: "0",
        netReceipts: "0",
        farm: "",
        storehouse: ""
      });
      console.log("tableData", tableData.value);
    };
    const formData = reactive({
      user: "",
      region: "",
      time: ""
    });
    const date = () => {
      let date2 = new Date();
      const year = date2.getFullYear();
      const month = date2.getMonth() + 1;
      const strDate = date2.getDate();
      formData.time = year + "-" + month + "-" + strDate;
    };
    const SubmitDisabled = ref(true);
    const staging = ref(true);
    const No = ref(null);
    const isReadonly = ref(false);
    const isDisplay = ref(false);
    const newData = ref([]);
    const onStaging = () => {
      No.value = 20230889;
      staging.value = !staging.value;
      setTimeout(function() {
        ElMessage({
          message: staging.value === true ? "\u64A4\u9500\u6210\u529F" : "\u6682\u5B58\u6210\u529F",
          type: "success"
        });
        isReadonly.value = !isReadonly.value;
        isDisplay.value = !isDisplay.value;
      }, 1e3);
      SubmitDisabled.value = !SubmitDisabled.value;
      console.log("onStaging!");
      newData.value = tableData.value.map((item, index) => {
        return {
          encoded: item.encoded,
          farm: item.farm,
          name: ProductName.value[index],
          netReceipts: item.netReceipts,
          receivable: item.receivable,
          storehouse: item.storehouse,
          unit: item.unit
        };
      });
      WarehousingData.addWarehousingData(newData.value);
    };
    const loading = ref(false);
    const onSubmit = () => {
      loading.value = true;
      setTimeout(function() {
        ElMessage({
          message: "\u63D0\u4EA4\u6210\u529F\uFF01",
          type: "success"
        });
        loading.value = false;
        SubmitDisabled.value = true;
      }, 2500);
      console.log("submit!");
    };
    const deleteRow = (index) => {
      tableData.value.splice(index, 1);
    };
    const print = ref({
      id: "printBox",
      popTitle: "\u914D\u7F6E\u9875\u7709\u6807\u9898",
      extraHead: "",
      preview: false,
      previewTitle: "\u9884\u89C8\u7684\u6807\u9898",
      previewPrintBtnLabel: "\u9884\u89C8\u7ED3\u675F\uFF0C\u5F00\u59CB\u6253\u5370",
      zIndex: 20002,
      previewBeforeOpenCallback() {
        console.log("\u6B63\u5728\u52A0\u8F7D\u9884\u89C8\u7A97\u53E3\uFF01");
      },
      previewOpenCallback() {
        console.log("\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u9884\u89C8\u7A97\u53E3\uFF0C\u9884\u89C8\u6253\u5F00\u4E86\uFF01");
      },
      beforeOpenCallback() {
        console.log("\u5F00\u59CB\u6253\u5370\u4E4B\u524D\uFF01");
      },
      openCallback() {
        console.log("\u6267\u884C\u6253\u5370\u4E86\uFF01");
      },
      closeCallback() {
        console.log("\u5173\u95ED\u4E86\u6253\u5370\u5DE5\u5177\uFF01");
      },
      clickMounted() {
        console.log("\u70B9\u51FBv-print\u7ED1\u5B9A\u7684\u6309\u94AE\u4E86\uFF01");
      }
    });
    const links = ref([]);
    const loadAll = [
      { value: "8112351821894", link: "\u53F3\u524D\u8F66\u95E8\u9632\u649E\u6881\u652F\u67B6\u6599\u7247" },
      { value: "8212351821895", link: "\u53F3\u524D\u8F66\u95E8\u9632\u649E\u6881\u524D\u56FA\u5B9A\u677F\u6599\u7247" },
      { value: "8212351821897", link: "\u52A0\u6CB9\u7BA1\u7EBF\u56FA\u5B9A\u677F" },
      { value: "8312351851818", link: "\u6B63\u9A7E\u5DE6\u540E\u652F\u67B6\u7EC4\u4EF6" },
      { value: "8312351814852", link: "\u540E\u56F4\u5185\u677F\u8FDE\u63A5\u677F" },
      { value: "8812351811485", link: "\u53F3\u524D\u7EB5\u6881\u4E2D\u6BB5\u4FA7\u677F" },
      { value: "8412351811758", link: "\u79BB\u5408\u5668\u7BA1\u8DEF\u56FA\u5B9A\u652F\u67B6\uFF081.4T\uFF09" },
      { value: "8812351811478", link: "\u540E\u56F4\u5DE6\u4E0B\u5185\u677F" },
      { value: "8812351811455", link: "\u53F3\u540E\u8F66\u95E8\u5916\u677F\u4E0B\u52A0\u5F3A\u677F" },
      { value: "8712351817258", link: "\u5DE6\u7EB5\u6881\u4FA7\u56F4\u9650\u4F4D\u677F\u52A0\u5F3A\u677F" },
      { value: "8123456789008", link: "\u5DE6\u7EB5\u6881\u4FA7\u56F4\u9650\u4F4D\u677F\u52A0\u5F3A\u677F" }
    ];
    let timeout = "";
    const querySearchAsync = (queryString, cb) => {
      const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(results);
      }, 3e3 * Math.random());
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    };
    let ProductName = ref([]);
    const handleSelect = (item) => {
      ProductName.value.push(item.link || "");
    };
    const bindName = (item) => {
      let obj = loadAll.find((v) => v.value === item);
      ProductName.value.push(obj.link);
    };
    var LODOP;
    const PrintMytable = () => {
      console.log("newData", newData.value);
      let div1 = document.getElementById("div1");
      LODOP = getLodop();
      LODOP.PRINT_INIT("\u6253\u5370\u8868\u683C");
      LODOP.ADD_PRINT_TABLE(100, 1, "99.8%", 250, div1.innerHTML);
      LODOP.PREVIEW();
    };
    const initData = () => {
      const dataList = WarehousingData.getWarehousingData();
      console.log("dataList", dataList);
      if (localStorage.getItem("warehousingData")) {
        tableData.value = dataList;
        ProductName.value = dataList.map((item) => {
          return item.name;
        });
        console.log(" ProductName.value", ProductName.value);
      }
    };
    onMounted(() => {
      date();
      links.value = loadAll;
      initData();
    });
    return {
      tableData,
      columnConfig,
      onAddItem,
      formData,
      onStaging,
      onSubmit,
      querySearchAsync,
      handleSelect,
      bindName,
      ProductName,
      deleteRow,
      SubmitDisabled,
      loading,
      staging,
      No,
      print,
      isReadonly,
      isDisplay,
      PrintMytable,
      newData
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-347c80cd"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  id: "div1",
  style: { "display": "none" }
};
const _hoisted_2 = {
  border: "1",
  width: "100%",
  cellspacing: "0",
  cellpadding: "0",
  style: { "border-collapse": "collapse" },
  bordercolor: "#000000"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("caption", { style: { "letter-spacing": "6px" } }, [
  /* @__PURE__ */ createBaseVNode("h2", null, "\u4EA7\u54C1\u5165\u5E93\u5355")
], -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("caption", null, [
  /* @__PURE__ */ createBaseVNode("div", { style: { "display": "flex", "justify-content": "space-between", "margin": "4px 20px", "font-weight": "700" } }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u5165\u5E93\u90E8\u95E8\uFF1A\u51B2\u538B\u8F66\u95F4"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u5355\u636E\u7F16\u53F7\uFF1A20230889")
  ])
], -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("caption", null, [
  /* @__PURE__ */ createBaseVNode("div", { style: { "display": "flex", "justify-content": "space-between", "margin": "4px 20px", "font-weight": "700" } }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u6536\u8D27\u4ED3\u5E93\uFF1A\u6210\u54C1\u5E93"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u2003\u5355\u636E\u65E5\u671F\uFF1A2023/3/10")
  ])
], -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { width: "5%" }, "\u5E8F\u53F7"),
    /* @__PURE__ */ createBaseVNode("th", { width: "20%" }, "\u7269\u6599\u7F16\u7801"),
    /* @__PURE__ */ createBaseVNode("th", { width: "20%" }, "\u7269\u6599\u540D\u79F0"),
    /* @__PURE__ */ createBaseVNode("th", { width: "5%" }, "\u5355\u4F4D"),
    /* @__PURE__ */ createBaseVNode("th", { width: "10%" }, "\u6570\u91CF"),
    /* @__PURE__ */ createBaseVNode("th", { width: "10%" }, "\u6536\u8D27\u4ED3\u5E93"),
    /* @__PURE__ */ createBaseVNode("th", null, "\u5907\u6CE8")
  ])
], -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("td", null, null, -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("tfoot", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { colspan: "4" }, " \u5408\u8BA1\uFF1A "),
    /* @__PURE__ */ createBaseVNode("th", {
      colspan: "2",
      tdata: "SubSum",
      format: "#"
    }, "######"),
    /* @__PURE__ */ createBaseVNode("th")
  ])
], -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_date_picker = resolveComponent("el-date-picker");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_autocomplete = resolveComponent("el-autocomplete");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_el_table = resolveComponent("el-table");
  const _directive_print = resolveDirective("print");
  return openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" \u4FE1\u606F\u8868\u5355 "),
    createVNode(_component_el_form, {
      inline: true,
      model: _ctx.formData,
      class: "demo-form-inline"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form_item, { label: "\u5355\u636E\u7F16\u53F7" }, {
          default: withCtx(() => [
            createVNode(_component_el_input, {
              modelValue: _ctx.formData.user,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.formData.user = $event),
              placeholder: "\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210",
              value: _ctx.No,
              readonly: ""
            }, null, 8, ["modelValue", "value"])
          ]),
          _: 1
        }),
        createCommentVNode(' <el-form-item label="Activity zone">\r\n      <el-select v-model="formData.region" placeholder="Activity zone">\r\n        <el-option label="Zone one" value="shanghai" />\r\n        <el-option label="Zone two" value="beijing" />\r\n      </el-select>\r\n    </el-form-item> '),
        createVNode(_component_el_form_item, { label: "\u65E5\u671F" }, {
          default: withCtx(() => [
            createVNode(_component_el_date_picker, {
              modelValue: _ctx.formData.time,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.formData.time = $event),
              type: "date",
              placeholder: "\u8BF7\u8F93\u5165\u65F6\u95F4",
              style: { "width": "100%" },
              readonly: _ctx.isReadonly
            }, null, 8, ["modelValue", "readonly"])
          ]),
          _: 1
        }),
        createVNode(_component_el_form_item, null, {
          default: withCtx(() => [
            createVNode(_component_el_button, {
              type: "primary",
              onClick: _ctx.onStaging
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.staging ? "\u6682\u5B58" : "\u7F16\u8F91"), 1)
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(_component_el_button, {
              disabled: _ctx.SubmitDisabled,
              loading: _ctx.loading,
              type: "success",
              onClick: _ctx.onSubmit
            }, {
              default: withCtx(() => [
                createTextVNode(" \u63D0\u4EA4 ")
              ]),
              _: 1
            }, 8, ["disabled", "loading", "onClick"]),
            withDirectives((openBlock(), createBlock(_component_el_button, { type: "primary" }, {
              default: withCtx(() => [
                createTextVNode(" \u7B80\u5355\u6253\u5370\u5355\u636E ")
              ]),
              _: 1
            })), [
              [_directive_print, _ctx.print]
            ]),
            createVNode(_component_el_button, {
              type: "primary",
              onClick: _ctx.PrintMytable
            }, {
              default: withCtx(() => [
                createTextVNode(" \u9AD8\u7EA7\u6253\u5370\u5355\u636E ")
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model"]),
    createCommentVNode("  \u4FE1\u606F\u5199\u5165 "),
    createVNode(_component_el_table, {
      data: _ctx.tableData,
      style: { "width": "100%" },
      "max-height": "60vh",
      stripe: "",
      id: "printBox"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_table_column, {
          fixed: "",
          prop: "encoded",
          label: "\u7269\u6599\u7F16\u7801"
        }, {
          default: withCtx((scope) => [
            createCommentVNode(' <el-input\r\n          v-model="tableData[scope.$index].encoded"\r\n          placeholder="\u7269\u6599\u7F16\u7801"\r\n        /> '),
            createVNode(_component_el_autocomplete, {
              modelValue: _ctx.tableData[scope.$index].encoded,
              "onUpdate:modelValue": ($event) => _ctx.tableData[scope.$index].encoded = $event,
              "fetch-suggestions": _ctx.querySearchAsync,
              placeholder: "\u7269\u6599\u7F16\u7801",
              onSelect: _ctx.handleSelect,
              onChange: _ctx.bindName,
              readonly: _ctx.isReadonly
            }, null, 8, ["modelValue", "onUpdate:modelValue", "fetch-suggestions", "onSelect", "onChange", "readonly"])
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          prop: "name",
          label: "\u7269\u6599\u540D\u79F0"
        }, {
          default: withCtx((scope) => [
            createVNode(_component_el_input, {
              "fetch-suggestions": _ctx.querySearchAsync,
              modelValue: _ctx.tableData[scope.$index].name,
              "onUpdate:modelValue": ($event) => _ctx.tableData[scope.$index].name = $event,
              placeholder: "\u7269\u6599\u540D\u79F0",
              value: _ctx.ProductName[scope.$index],
              readonly: _ctx.isReadonly
            }, null, 8, ["fetch-suggestions", "modelValue", "onUpdate:modelValue", "value", "readonly"])
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          prop: "unit",
          label: "\u5355\u4F4D",
          width: "100"
        }, {
          default: withCtx((scope) => [
            createVNode(_component_el_input, {
              modelValue: _ctx.tableData[scope.$index].unit,
              "onUpdate:modelValue": ($event) => _ctx.tableData[scope.$index].unit = $event,
              placeholder: "\u5355\u4F4D",
              readonly: _ctx.isReadonly
            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          prop: "receivable",
          label: "\u5E94\u6536",
          width: "140"
        }, {
          default: withCtx((scope) => [
            createVNode(_component_el_input, {
              modelValue: _ctx.tableData[scope.$index].receivable,
              "onUpdate:modelValue": ($event) => _ctx.tableData[scope.$index].receivable = $event,
              placeholder: "\u5E94\u6536",
              readonly: _ctx.isReadonly
            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          prop: "netReceipts",
          label: "\u5B9E\u6536",
          width: "140"
        }, {
          default: withCtx((scope) => [
            createVNode(_component_el_input, {
              modelValue: _ctx.tableData[scope.$index].netReceipts,
              "onUpdate:modelValue": ($event) => _ctx.tableData[scope.$index].netReceipts = $event,
              placeholder: "\u5B9E\u6536",
              readonly: _ctx.isReadonly
            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          prop: "farm",
          label: "\u751F\u7522\u8ECA\u9593"
        }, {
          default: withCtx((scope) => [
            createVNode(_component_el_select, {
              modelValue: _ctx.tableData[scope.$index].farm,
              "onUpdate:modelValue": ($event) => _ctx.tableData[scope.$index].farm = $event,
              placeholder: "\u751F\u4EA7\u8F66\u95F4",
              disabled: _ctx.isReadonly
            }, {
              default: withCtx(() => [
                createVNode(_component_el_option, {
                  label: "\u51B2\u538B\u8F66\u95F4",
                  value: "\u51B2\u538B\u8F66\u95F4"
                }),
                createVNode(_component_el_option, {
                  label: "\u710A\u88C5\u8F66\u95F4",
                  value: "\u710A\u88C5\u8F66\u95F4"
                })
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          prop: "storehouse",
          label: "\u4ED3\u5E93"
        }, {
          default: withCtx((scope) => [
            createVNode(_component_el_select, {
              modelValue: _ctx.tableData[scope.$index].storehouse,
              "onUpdate:modelValue": ($event) => _ctx.tableData[scope.$index].storehouse = $event,
              placeholder: "\u4ED3\u5E93",
              disabled: _ctx.isReadonly
            }, {
              default: withCtx(() => [
                createVNode(_component_el_option, {
                  label: "\u6210\u54C1\u5E93",
                  value: "\u6210\u54C1\u5E93"
                }),
                createVNode(_component_el_option, {
                  label: "\u534A\u6210\u54C1\u5E93",
                  value: "\u534A\u6210\u54C1\u5E93"
                })
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
          ]),
          _: 1
        }),
        createVNode(_component_el_table_column, {
          fixed: "right",
          label: _ctx.isReadonly ? "" : "\u64CD\u4F5C",
          width: "120",
          class: normalizeClass({ display: _ctx.isDisplay })
        }, {
          default: withCtx((scope) => [
            createVNode(_component_el_button, {
              disabled: _ctx.isReadonly,
              size: "small",
              type: "danger",
              onClick: ($event) => _ctx.deleteRow(scope.$index),
              class: normalizeClass({ display: _ctx.isDisplay })
            }, {
              default: withCtx(() => [
                createTextVNode(" \u5220\u9664 ")
              ]),
              _: 2
            }, 1032, ["disabled", "onClick", "class"])
          ]),
          _: 1
        }, 8, ["label", "class"]),
        createCommentVNode(' <el-table-column\r\n      v-for="(item, index) in columnConfig"\r\n      :key="index"\r\n      :prop="item.prop"\r\n      :label="item.label"\r\n      :width="item.width"\r\n    >\r\n      <template #default="scope">\r\n        <el-input v-model="scope.$index" placeholder="Please Input" />\r\n        {{ scope.$index }}\r\n        {{ scope.$index }}\r\n      </template>\r\n    </el-table-column> ')
      ]),
      _: 1
    }, 8, ["data"]),
    createVNode(_component_el_button, {
      class: normalizeClass(["mt-4", { display: _ctx.isDisplay }]),
      style: { "width": "100%" },
      onClick: _ctx.onAddItem
    }, {
      default: withCtx(() => [
        createTextVNode(" \u6DFB\u52A0\u4E00\u9805 ")
      ]),
      _: 1
    }, 8, ["onClick", "class"]),
    createBaseVNode("div", _hoisted_1, [
      createTextVNode(toDisplayString(_ctx.newData) + " ", 1),
      createBaseVNode("table", _hoisted_2, [
        _hoisted_3,
        _hoisted_4,
        _hoisted_5,
        _hoisted_6,
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.newData, (item, index) => {
          return openBlock(), createElementBlock("tr", { key: index }, [
            createBaseVNode("td", null, toDisplayString(index + 1), 1),
            createBaseVNode("td", null, toDisplayString(item.encoded), 1),
            createBaseVNode("td", null, toDisplayString(item.name), 1),
            createBaseVNode("td", null, toDisplayString(item.unit), 1),
            createBaseVNode("td", null, toDisplayString(item.netReceipts), 1),
            createBaseVNode("td", null, toDisplayString(item.storehouse), 1),
            _hoisted_7
          ]);
        }), 128)),
        _hoisted_8
      ])
    ])
  ], 64);
}
var simpleProductionReceipt = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-347c80cd"]]);

export { simpleProductionReceipt as default };
