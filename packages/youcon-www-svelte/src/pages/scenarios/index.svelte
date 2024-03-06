<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
    // 深色导航
	import { headerClass } from '../../js/store.js'
    headerClass.set("");

    import "../../assets/css/light.css"
    import "../../assets/css/scenarios.scss"
    import cover from "../../assets/img/scenarios/cover.png"
    import userPhoto from "../../assets/img/user.png"

    import {feedback,data} from "./data"

    let dataType:string = 'industry',dataNumber:number = 0
    // 切换时的过渡
    let isShow = true

    const changeText = (i) => {
        isShow = false
        setTimeout(() => {
            if( i == 1 ){
                dataNumber >= (data[dataType].length - 1) ? dataNumber = 0 : dataNumber ++
            }else{
                dataNumber == 0 ? dataNumber = (data[dataType].length - 1) : dataNumber --
            }
            isShow = true
        },500)
    }

    const changeType = (value:string) => {
        dataType = value
        dataNumber = 0
    }


    onMount(() => {
        const lineBox = new IntersectionObserver((entries) => {
			entries.forEach(item => {
                if(item.boundingClientRect.top < 300){
                    document.querySelector(".feed-top").className = "feed-top feed-show"
                    document.querySelector(".feed-right").className = "feed-main feed-right feed-showAndLeft"
                    document.querySelector(".feed-left").className = "feed-main feed-left feed-showAndRight"
                }
			});
        }, {
            threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
        });
        document.querySelectorAll('.feed-detail').forEach((box) => {
            lineBox.observe(box);
        })
    })
    

</script>
<svelte:head>
    <title>应用场景</title>
    <meta name="description" content="应用场景" />
</svelte:head>

<div class="scenarios-banner">
</div>
<div class="scenarios-name">
    应用场景
</div>
<div class="classify">
    <div class="left">
        <div class="title">
            <strong on:click="{()=>changeType('industry')}" class="{dataType == 'industry'?'actived':''}">工业</strong>
            <strong on:click="{()=>changeType('government')}" class="{dataType == 'government'?'actived':''}">市政</strong>
        </div>
        <dl>
            {#if isShow}
                <dt transition:fade="{{duration: 500}}" >{data[dataType][dataNumber].title}</dt>
                <dd transition:fade="{{duration: 500}}" >{data[dataType][dataNumber].desc}</dd>    
            {/if}
            
        </dl>
        <div class="line" style="--ac-num:{(dataNumber+1)/data[dataType].length}"></div>
        <div class="control">
            <div on:click="{()=>changeText(0)}" class="l"></div>
            <div on:click="{()=>changeText(1)}" class="r"></div>
        </div>
    </div>
    <div class="right">
        <img src="{cover}" alt="">
    </div>
</div>

<div class="feed-detail">
    <div class="feed-top">
        <p>“出现的报警它能告诉我是什么原因以及建议，我也会自己分析下，就像看病诊断一样。”</p>
        <div class="user">
            <img src="{userPhoto}" alt="">
            <div class="name">Name Surname</div>
            <div class="desc">环保科技企业信息部主任</div>
        </div>
    </div>
    <div class="feed-main feed-right">
        {#each feedback as  item,i }
            <div class="feed-box">
                <p>“{item.feedback}”</p>
                <div class="user">
                    <img src="{userPhoto}" alt="">
                    <div class="name">Name Surname</div>
                    <div class="desc">{item.position}</div>
                </div>
            </div>
        {/each}
    </div>
    <div class="feed-main feed-left">
        {#each feedback as  item,i }
            <div class="feed-box">
                <p>“{item.feedback}”</p>
                <div class="user">
                    <img src="{userPhoto}" alt="">
                    <div class="name">Name Surname</div>
                    <div class="desc">{item.position}</div>
                </div>
            </div>
        {/each}
    </div>
</div>
<div class="empty"></div>