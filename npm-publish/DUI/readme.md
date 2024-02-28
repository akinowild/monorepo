# 使用说明
## 安装
```
pnpm add @xmem/hooks
```
## 引用
```
import { useTableList } from '@xmem/hooks'
```
## 参数说明
```
const { tableList, loading, getList, pagination, pageInfo } = useTableList(getProjects, searchForm)
```
三个参数

api:必填，分页列表的api地址

params:非必填，列表的查询参数 默认{page:0,size:10}

automatic:非必填，是否自动请求数据 默认true

### 出参
tableList 列表数据

loading 列表请求状态

getList 重新请求列表事件

pagination 查询结果返回的分页信息

pageInfo 传入的分页信息



