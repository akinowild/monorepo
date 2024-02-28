# useTableList 的使用
useTableList是一个基于 Vue 3 的钩子函数，旨在简化数据表格列表的管理和展示。其设计思想包括：
- 加载数据：能够从后端或其他数据源异步加载数据，并在加载完成后自动更新表格。
- 分页：支持对数据进行分页展示，用户可以通过分页器切换不同的页面。
- 排序：允许用户根据列头点击对表格数据进行排序，包括升序和降序。
- 搜索：提供搜索功能，可以根据用户输入的关键词过滤表格数据。
- 刷新：允许用户手动刷新表格数据，以便及时获取最新数据。
- 自定义参数：支持传入自定义参数，以便根据不同需求定制数据请求的逻辑。
## 如何安装
```
pnpm add @xmem/hooks
```

## 如何使用
使用 useTableList 钩子函数来管理数据表格列表。以下是一个简单的示例：
```
import { useTableList } from '@xmem/hooks'

const params = ref({}) // 可选的参数
const { loading, tableList, getList, pageInfo, pagination } = useTableList(fetchTableData, params)

```
## 参数说明
### 输入参数
- api:必填，分页列表的api地址
- params:非必填，列表的查询参数 默认{page:0,size:10}
- automatic:非必填，是否自动请求数据 默认true
### 钩子函数返回值
- loading: 用于表示数据加载状态的布尔值。
- tableList: 表示数据表格的列表数据。
- getList: 用于手动触发数据请求的函数。
- pageInfo: 表示分页信息的对象，包括每页条目数和当前页码。
- pagination: 表示分页器的配置信息，包括每页条目数、当前页码、总条目数和总页数。


# useEntityHandler 的使用
`@xmem/hooks` 提供了一个名为 `useEntityHandler` 的自定义 Vue 3 hook，用于处理实体的相关操作，例如获取实体详情、更新实体、保存新实体和删除实体。本文档将介绍该 hook 的设计思想、用法以及相关注意事项。

## 设计思想
实体的操作无非就是增删改查，在不同的项目里面正常就是增删改查的API不一样。
所以我们尽可能地封装实体操作的复杂性，并提供简洁的接口供开发者使用。其主要设计思想包括：
- 封装异步操作： useEntityHandler 封装了异步操作，使得开发者可以轻松地进行实体的 CRUD 操作，而无需关心异步操作的具体细节。
- 提供状态和消息： hook 提供了实体操作的状态以及相关的提示消息，开发者可以根据这些信息进行 UI 界面的渲染和交互。
- 灵活性和可定制性： hook 提供了灵活的配置选项，使得开发者可以根据具体需求进行定制和扩展。
## 如何安装
你可以通过 npm 来安装 @xmem/hooks 包：
```
npm install @xmem/hooks
```
## 如何使用
在 Vue 组件中使用 useEntityHandler hook：

```
import { useEntityHandler } from '@xmem/hooks';

const api = {
  // 定义你的 API 函数，注意类型和结构
  getEntityDetail: (id: string);  
  updateEntityDetail: (id: string, newData: any);
  saveNewEntity: (newData: any);
  deleteEntity: (id: string);
};
const { entityDetail, loading, status, message, getEntityDetail, updateEntityDetail, saveNewEntity, deleteEntity } = useEntityHandler(api);

const saveNew = async () => {
  await saveNewEntity(/* 新实体的数据 */);
};

const updateDetail = async () => {
  await updateEntityDetail(/* 实体ID */, /* 更新的数据 */);
};

const deleteDetail = async () => {
  await deleteEntity(/* 实体ID */);
};

// 在组件初始化时加载实体详情
getEntityDetail(/* 实体ID */);
```
### 属性和方法
- entityDetail: 当前实体详情的引用。
- loading: 表示请求是否正在进行中的布尔值。
- status: 表示当前操作的状态，可能的值为 'success' 或 'error'。
- message: 当前操作的提示消息。
- getEntityDetail(id: string): 获取指定 ID 的实体详情。
- updateEntityDetail(id: string, newData: any): 更新指定 ID 的实体详情。
- saveNewEntity(newData: any): 保存新的实体。
- deleteEntity(id: string): 删除指定 ID 的实体。

### 注意事项
请确保传入的 API 对象中包含了对应的 API 函数，并且这些函数的功能与预期一致。

在使用时，请注意处理异步操作的返回结果，包括状态和提示消息。

根据具体需求进行界面的渲染和交互，可以根据状态和消息来定制不同的 UI 效果。

若有需要，可以根据业务需求进行进一步定制和扩展，以满足特定的功能要求。