import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
 
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  //配置跨域反向代理
  proxy:{
    "/api":{
      target:"https://i.maoyan.com",
      changeOrigin:true
    }
  },
  mfsu: { production: { output: '.mfsu-production' } },
  antd:{
 mobile:false
  }
});
