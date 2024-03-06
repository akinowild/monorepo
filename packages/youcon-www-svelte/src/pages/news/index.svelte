<script lang="ts">
    import {link} from 'svelte-spa-router'
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
	<title>新闻动态</title>
	<meta name="description" content="新闻动态" />
</svelte:head>

<div class="news-banner">
</div>
<div class="news-name">
  新闻动态
</div>


<div class="news-list">
    {#each newsData as item}
        <div class="list">
            <img src="{item.cover}" alt="">
            <a class="title" href="/news/id/{item.id}" use:link >{item.title}</a>
            <div class="time">{item.time}</div>
            <div class="desc">
                {item.desc}
            </div>
        </div>
    {/each}
</div>

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