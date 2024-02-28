import { ref, Ref } from 'vue';

// 定义实体详情类型
interface EntityDetail {
    // 这里定义实体详情的具体结构
}

// 定义 API 响应状态类型
type ApiResponseStatus = 'success' | 'error';

// 定义 API 接口
interface ApiResponse {
    code: string;
    data: any;
    msg: string | null;
}

interface EntityApi {
    getEntityDetail: (id: string) => Promise<ApiResponse>;
    updateEntityDetail: (id: string, newData: any) => Promise<ApiResponse>;
    saveNewEntity: (newData: any) => Promise<ApiResponse>;
    deleteEntity: (id: string) => Promise<ApiResponse>;
}

export function useEntityHandler(api: EntityApi) {
    const entityDetail: Ref<EntityDetail | null> = ref({}); // 实体数据
    const loading: Ref<boolean> = ref(false); // 请求状态
    const status: Ref<ApiResponseStatus | null> = ref(null); // 请求返回状态
    const message: Ref<string | null> = ref(null); // 请求返回提示消息

    // 获取实体详情
    const getEntityDetail = async (id: string) => {
        loading.value = true;
        try {
            const response = await api.getEntityDetail(id);
            handleApiResponse(response);
        } catch (err) {
            handleApiError(err);
        }
    };

    // 更新实体详情
    const updateEntityDetail = async (id: string, newData: any) => {
        loading.value = true;
        try {
            const response = await api.updateEntityDetail(id, newData);
            handleApiResponse(response);
        } catch (err) {
            handleApiError(err);
        }
    };

    // 保存新实体
    const saveNewEntity = async (newData: any) => {
        loading.value = true;
        try {
            const response = await api.saveNewEntity(newData);
            handleApiResponse(response);
        } catch (err) {
            handleApiError(err);
        }
    };

    // 删除实体
    const deleteEntity = async (id: string) => {
        loading.value = true;
        try {
            const response = await api.deleteEntity(id);
            handleApiResponse(response);
        } catch (err) {
            handleApiError(err);
        }
    };

    // 处理 API 响应
    const handleApiResponse = (response: ApiResponse) => {
        loading.value = false;
        if (response.code === 'ok') {
            entityDetail.value = response.data; // 赋值
            status.value = 'success';
            message.value = response.msg || '操作成功！';
            return
        }
        status.value = 'error';
        message.value = response.msg || '操作失败！';
    };

    // 处理 API 错误
    const handleApiError = (error: any) => {
        loading.value = false;
        status.value = 'error';
        message.value = error.msg || '系统错误！';
    };

    return {
        entityDetail,
        loading,
        status,
        message,
        getEntityDetail,
        updateEntityDetail,
        saveNewEntity,
        deleteEntity,
    };
}
