import { ref, onMounted, computed } from 'vue'

export const useTableList = (apiInterface: any, params?: any, automatic = true) => {
    const loading = ref(false)
    const tableList = ref<Array<object>>([])
    const pageInfo = ref({
        size: 10,
        page: 0
    })
    const pagination = ref({})

    const tableParams = computed(() => {
        return { ...pageInfo.value, ...params.value }
    })

    const getList = async () => {
        loading.value = true
        try {
            const { data } = await apiInterface(tableParams.value)
            tableList.value = []
            if (data.content) {
                tableList.value = data.content
            } else {
                tableList.value = data
            }

            pagination.value = {
                pageSize: data.pageSize,
                page: data.pageNumber,
                total: data.totalElements,
                totalPages: data.totalPages
            }
            loading.value = false
        } catch (e) {
            loading.value = false
        }
    }
    onMounted(async () => {
        if (automatic) {
            await getList()
        }
    })

    return {
        loading,
        tableList,
        getList,
        pageInfo,
        pagination
    }
}
