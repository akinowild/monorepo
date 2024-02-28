# monorepo 仓库管理

目录说明

- packages 项目目录
- components 公众组件目录
- hooks 公共hooks 目录
- npm-publish npm组件打包发布目录
- test-vue vue组件函数hooks测试目录

# 操作说明
## 根目录安装包的时候加参数 w
```
pnpm install eslint typescript --save-dev -w
```
不想加-w则修改配置
```
pnpm config set ignore-workspace-root-check true
```

## 指定工作区安装包
-r表示在workspace工作区执行命令，--filter xxx 表示指定在哪个包下执行。
```
pnpm install lodash -r --filter @MyVue/shared
```