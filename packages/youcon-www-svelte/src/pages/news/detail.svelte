<script lang="ts">
	import { newsData } from './data.js';
    // 深色导航
	import { headerClass } from '../../js/store.js'
    headerClass.set("active");
    import "../../assets/css/light.css"
    import "../../assets/css/news.scss"
    
    import qrcode from "../../assets/img/qrcode.png"
    import minicode from "../../assets/img/minicode-light.png"

</script>
<svelte:head>
	<title>详情</title>
	<meta name="description" content="新闻动态" />
</svelte:head>

<div class="news-banner">
</div>

<article>
    <img class="cover" src="../../src/assets/img/news/news-cover.png" alt="">
    <h1>新闻动态</h1>
    <div class="time">2022 年 5 月 17 日</div>
    <div class="desc">
        厂区自动化基础上部署了水务精灵物联网，人员成本降低75%，智慧运维将系统运行故障率降低30%，工艺及药耗等优化降低整体发电...
    </div>
    <div class="text">
        <p>优控云科技是拥有丰富的水处理经验的物联网服务商，在水处理工艺、水务管理运维、自控及互联网行业拥有专家支持团队，专注物联感知、数据挖掘及智慧运维，打造基于物联网大数据的水务 优控云科技是拥有丰富的水处理经验的物联网服务商，在水处理工艺、水务管理运维、自控及互联网行业拥有专家支持团队，专注物联感知、数据挖掘及智慧运维，打造基于物联网大数</p>
        <p>据的水务优控云科技是拥有丰富的水处理经验的物联网服务商，在水处理工艺、水务管理运维、自控及互联网行业拥有专家支持团队，专注物联感知、数据挖掘及智慧运维，打造基于物联网大数据的水务优控云科技是拥有丰富的水处理经验的物联网服务商，在水处理工艺、水务管理运维、</p>
        <p>自控及互联网行业拥有专家支持团队，专注物联感知、数据挖掘及智慧运维，打造基于物联网大数据的水务优控云科技是拥有丰富的水处理经验的物联网服务商，在水处理工艺、水务管理运维、自控及互联网行业拥有专家支持团队，专注物联感知、数据挖掘及智慧运维，打造基于物联网大数据的水务</p>                
    </div>
</article>

<div class="footer-cover">
    <div class="f-code">
        <dl>
            <dd>
                <img src="{qrcode}" alt="">
            </dd>
            <dt>
                微信公众号
            </dt>
        </dl>
        <dl>
            <dd>
                <img src="{minicode}" alt="">
            </dd>
            <dt>
                微信小程序
            </dt>
        </dl>
    </div>
    <div class="f-title">
        关注我们，了解更多新闻动态
    </div>
</div>

<style lang="scss">
    // .news-banner{
    //     height: 480px;
    // }
    article{
        width: 840px;
        margin: 180px auto 0;
        padding: 0 0 200px;
        .cover{
            display: block;
            height: 463px;
        }
        h1,.time,.text,.desc{
            text-align: left;
            color: var(--black);
        }
        h1{
            font-size: 32px;
            padding: 60px 80px 0;
        }
        .time,.desc{
            padding: 20px 80px 0;
            font-size: 16px;
        }
        .text{
            padding: 0 80px;
            line-height: 20px;
            font-size: 14px;
            p{
                margin:40px 0 0;
                color: var(--black);
            }
        }
    }
</style>