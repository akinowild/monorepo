<script lang="tsx" setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import {
    ArrowLeftUp,
    ArrowDown,
    ArrowRightDown,
    ArrowUp,
    ArrowRightUp,
    ArrowLeft,
    ArrowLeftDown,
    ArrowRight,
    Camera,
    ZoomIn,
    ZoomOut
  } from '@icon-park/vue-next'
  import { getCameraLiveUrl, cameraLiveControl, cameraCapture, cameraToCruise } from '@/api/iot/camera'
  import Player from 'xgplayer'
  import 'xgplayer/dist/index.min.css'
  import HlsPlugin from 'xgplayer-hls'
  import { Message } from '@arco-design/web-vue'

  const playerId = `player${new Date().getTime()}`
  // 接收两个参数，一个是监控ID，一个是获取流类型（EZOPEN, FLV, RTMP, HLS, WS）
  const props = defineProps({
    cameraId: {
      type: String,
      required: true
    },
    streamType: {
      type: String,
      default: 'HLS'
    },
    cameraStyle: {
      type: Object,
      default: () => {
        return {
          width: '100%',
          height: '100%'
        }
      }
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    control: {
      type: Boolean,
      default: true
    }
  })

  let liveUrl: string | null = null
  let player: any

  const getLiveUrl = async () => {
    const params = {
      encrypt: location.protocol === 'https:',
      protocol: props.streamType
    }
    const liveInfo = await getCameraLiveUrl(props.cameraId, params)
    liveUrl = liveInfo.data
  }
  // https://cmgw-vpc.lechange.com:8890/LCO/9B09F14PAGEF4D8/0/1/20230512T030655/a4fe6e8d06cfaf247f2bcf8609df0f49.m3u8?proto=https
  // https://cmgw-vpc.lechange.com:8890/LCO/9F02591PAND8C25/0/0/20230930T023522/960dcead98f7607fe2f3aa6d6fdac6db.m3u8?proto=https
  onMounted(async () => {
    await getLiveUrl()
    // 如果liveUrl有效，开始初始化
    if (liveUrl) {
      player = new Player({
        id: playerId,
        url: liveUrl,
        lang: 'zh',
        isLive: true,
        mini: true,
        controls: {
          mode: 'flex'
        },
        width: props.cameraStyle?.width,
        height: props.cameraStyle?.height,
        pip: true,
        autoplay: props.autoPlay,
        screenShot: true,
        rotate: true,
        plugins: [HlsPlugin],
        hls: {
          targetLatency: 10, // 直播目标延迟，默认 10 秒
          maxLatency: 20, // 直播允许的最大延迟，默认 20 秒
          disconnectTime: 0 // 直播断流时间，默认 0 秒，（独立使用时等于 maxLatency）
        }
      })
      const Events: any = Player.Events
      player.on(Events.LOADED_DATA, (e: any) => {
        player.play()
      })
    }
  })
  onUnmounted(() => {
    player?.destroy()
    player = null
  })
  const controlStatus = ref(false)
  const cameraControl = async (direction: number) => {
    controlStatus.value = true
    // 方向：0-上，1-下，2-左，3-右，4-左上，5-左下，6-右上，7-右下，8-放大，9-缩小
    const { code } = await cameraLiveControl(props.cameraId, { direction })
    if (code === 'ok') {
      Message.success('操作成功')
    } else {
      Message.error('操作失败')
    }
    controlStatus.value = false
  }
  // 抓拍
  const onCameraCapture = async () => {
    controlStatus.value = true
    // 方向：0-上，1-下，2-左，3-右，4-左上，5-左下，6-右上，7-右下，8-放大，9-缩小
    const { code } = (await cameraCapture(props.cameraId)) as any

    if (code === 'ok') {
      Message.success('操作成功')
    } else {
      Message.error('操作失败')
    }
    controlStatus.value = false
  }

  const onChangeCruise = async (cruiseId: string) => {
    Message.info('正在请求...')
    const { code } = (await cameraToCruise(props.cameraId, { presetId: cruiseId })) as any
    if (code === 'ok') {
      Message.success('操作成功')
    } else {
      Message.error('操作失败')
    }
    controlStatus.value = false
  }
  defineExpose({
    onChangeCruise
  })
</script>

<template>
  <div class="camera-live">
    <div :id="playerId"></div>
    <a-spin :loading="controlStatus" tip="正在请求...">
      <div class="camera-live-control" v-if="control">
        <a-button @click="cameraControl(4)">
          <template #icon>
            <arrow-left-up theme="outline" size="16" fill="#36464d" :strokeWidth="2" />
          </template>
          左上
        </a-button>
        <a-button @click="cameraControl(0)">
          <template #icon>
            <arrow-up theme="outline" size="16" fill="#36464d" :strokeWidth="2" />
          </template>
          上
        </a-button>
        <a-button @click="cameraControl(6)">
          <template #icon>
            <arrow-right-up theme="outline" size="16" fill="#36464d" :strokeWidth="2" />
          </template>
          右上
        </a-button>
        <a-button @click="cameraControl(2)">
          <template #icon>
            <arrow-left theme="outline" size="16" fill="#36464d" :strokeWidth="2" />
          </template>
          左
        </a-button>
        <a-button @click="onCameraCapture">
          <template #icon>
            <camera theme="outline" size="16" fill="#36464d" :strokeWidth="2" />
          </template>
          抓拍
        </a-button>
        <a-button @click="cameraControl(3)">
          <template #icon>
            <arrow-right theme="outline" size="16" fill="#36464d" :strokeWidth="2" />
          </template>
          右
        </a-button>
        <a-button @click="cameraControl(5)">
          <template #icon>
            <arrow-left-down theme="outline" size="16" fill="#36464d" :strokeWidth="2" />
          </template>
          左下
        </a-button>
        <a-button @click="cameraControl(1)">
          <template #icon>
            <arrow-down theme="outline" size="16" fill="#36464d" :strokeWidth="2" />
          </template>
          下
        </a-button>
        <a-button @click="cameraControl(7)">
          <template #icon>
            <arrow-right-down theme="outline" size="16" fill="#36464d" :strokeWidth="2" />
          </template>
          右下
        </a-button>
        <a-button @click="cameraControl(8)">
          <template #icon>
            <zoom-in theme="outline" size="16" fill="#36464d" :strokeWidth="2" />
          </template>
          放大
        </a-button>
        <div></div>
        <a-button @click="cameraControl(9)">
          <template #icon>
            <zoom-out theme="outline" size="16" fill="#36464d" :strokeWidth="2" />
          </template>
          缩小
        </a-button>
      </div>
    </a-spin>
  </div>
</template>

<style lang="less">
  .camera-live {
    display: flex;
    align-items: start;
    aspect-ratio: 16/9;
    width: 100%;
    height: 100%;

    .camera-live-control {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      width: 320px;
      padding: 0 20px;
    }
  }
</style>
