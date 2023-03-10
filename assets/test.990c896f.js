import { k as service } from './index.bb22b372.js';

/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 16:35:04
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-25 11:50:39
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

// 测试
const TestError = () => {
  return service({
    url: '/api/500',
    method: 'get',
  })
};

// 用户列表
const getUsers = data => {
  return service({
    url: '/api/test/users',
    method: 'post',
    data,
  })
};

export { TestError as T, getUsers as g };
