<script lang="ts">
	import Map from './index/map.svelte';

	export const prerender = true;
	import { onMount,onDestroy } from 'svelte';
	import "../assets/css/index.scss"
	//暗色调
	document.documentElement.setAttribute('data-theme','dark')
	// 深色导航
	import { headerClass } from '../js/store.js'
	import { keyWords,hotData,customerValue } from "./index/data.js"
	let keywords:Array<any>= keyWords
    headerClass.set("active");

	//导入资源
	import userPhoto from "../assets/img/user.png"
	import HomeCover from "./index/cover.svelte"
	//背景
	import circle from "../assets/img/circle.svg"
	import Silder from './index/silder.svelte';
	import Gallery from './index/gallery.svelte';

    onMount(()=>{
		const io = new IntersectionObserver((entries) => {
			entries.forEach(item => {
				// item.target.innerHTML = item.intersectionRatio.toString()
				// console.log(item.intersectionRatio)
				if(window.scrollY > 700 && window.scrollY < 2500){
					start(window.scrollY - 700)
				}
			});
			/*
			entries 对象
			time：监听器元素的持续时间
			target：被观察的目标元素，是一个 DOM 节点对象
			rootBounds：根元素的矩形区域的信息，可以用getBoundingClientRect()方法得到，如果没有根元素（即直接相对于视口滚动），则返回null
			boundingClientRect：目标元素的矩形区域的信息
			intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
			intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0
			*/
		}, {
			//threshold: [1]
			threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
			// root: 对比交叉的元素，默认是浏览器视窗
			// rootMargin: 配置虚拟视窗尺寸语法同margin，"10px 0 0 10px"
		});
		// io.observe(document.querySelector('.keywords'));
		document.querySelectorAll('.monitor').forEach((box) => {
			io.observe(box);
		})

		const keybox = new IntersectionObserver((entries) => {
			entries.forEach(item => {
				if( -800 < item.boundingClientRect.y && item.boundingClientRect.y < 800){
					// percentage = item.intersectionRatio*100/2
					percentage = ( 800 - item.boundingClientRect.y ) / 1600 * -50
				}
			});
		}, {
			threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
		});
		document.querySelectorAll('.key-container').forEach((box) => {
			keybox.observe(box);
		})
		
    })

	//客户价值切换
	let customerDefault = 'company'
	const changeCustomer = (i) => {
		customerDefault = i
	}

	//线条动画事件
	let x=0,y=4000
	const start = (value) => {
		x = value * 3
		y = 4000-x
	} 

	//关键词动画
	let percentage = 0
	const movePercentage = (value) => {
		percentage = value
	} 

	// 首页用了dark模式，离开销毁
	onDestroy(()=>{
		document.documentElement.removeAttribute('data-theme')
	})
</script>


<svelte:head>
	<title>首页</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="home-bg">
	<!-- svelte-ignore a11y-media-has-caption -->
	<!-- <video id="airpods-spatial-video" autoplay style="height: 830px;width: 100%;object-fit:cover;" loop muted data-inline-media="" data-inline-media-plugins="LoadTimeout,PlayPauseButton" data-inline-media-basepath="/105/media/us/home/2022/d30e1157-81fe-49f2-8711-e633b812887c/anim/airpods" data-load-timeout="5000" aria-hidden="true" preload="auto" src="../src/assets/home.mp4" ></video> -->

</div>
<div class="max-width">
<div class="banner">
	<div class="banner-left">
		<strong>极膜环境科技</strong>
		<strong class="c-green">精益水处理</strong>
		<p>基于物联网的智能化</p>
		<div class="more">
			discover more
		</div>
	</div>
	<HomeCover />
</div>

<div class="feedback monitor">
	{hotData[0].text}
	<div class="user">
		<img src="{userPhoto}" alt="">
		<div class="name">Name Surname</div>
		<div class="desc">环保科技企业信息部主任</div>
	</div>
</div>
</div>

<div class="keywords monitor">
	<!-- <img src="{lineSvg}" class="key-bg" alt=""> -->
	<svg width="1680" height="2810" viewBox="0 0 1680 2810" fill="none" xmlns="http://www.w3.org/2000/svg" style="stroke-dasharray: {x}px, {y}px;" >
		<g opacity="0.08" clip-path="url(#clip0_0_2795)">
		<path d="M2353.3 32.0378C2092.56 283.64 1552.54 262.758 1430.13 367.682C1199.43 565.669 1370.94 832.554 1060.55 1108.92C737.964 1396.24 -74.7749 1302.63 -371.432 1364.3C-509.054 1392.83 -638.675 1447.23 -742.371 1525.31" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M2362.44 56.0543C2115.27 298.391 1608.06 287.562 1486.51 391.544C1263.67 582.316 1410.52 832.557 1122.62 1095.23C1017.66 1190.94 895.464 1259.04 728.937 1310.82C583.455 1356.06 423.853 1354.2 273.268 1367.83C149.665 1379.09 53.3412 1399.08 -49.8094 1415.29C-150.816 1431.18 -244.615 1440.42 -316.716 1457.07C-415.722 1479.5 -512.406 1511.18 -605.496 1551.68C-641.897 1567.7 -677.335 1585.82 -711.632 1605.96" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M2371.55 80.0194C2137.92 313.164 1663.44 312.664 1542.87 415.481C1328.08 599.266 1450.62 833.409 1184.67 1081.48C1074.36 1184.37 976.196 1268.62 806.56 1339.77C654.426 1403.77 486.586 1387.34 330.89 1407.51C199.786 1424.5 120.288 1461.17 12.5642 1490.34C-84.7831 1516.65 -182.886 1530.03 -261.969 1550.07C-367.739 1576.96 -473.806 1608.07 -567.366 1641.76C-607.09 1655.89 -645.107 1670.97 -680.855 1687.02" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M2380.69 104.036C2160.56 327.883 1718.78 337.475 1599.25 439.343C1392.37 616.021 1491.64 834.764 1246.75 1067.78C1131.08 1177.86 1056.93 1278.69 884.236 1368.7C725.29 1451.52 549.308 1420.61 388.473 1447.08C250.068 1469.85 187.539 1522.29 74.8969 1565.27C-18.675 1600.87 -121.231 1619.61 -207.243 1643.03C-317.679 1672.79 -430.256 1703.37 -529.118 1731.19C-571.3 1742.89 -611.938 1755.1 -650.101 1767.54" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M2389.83 128.058C2183.43 342.578 1774.22 362.251 1655.64 463.209C1456.77 633.101 1532.9 836.767 1308.75 1054.06C1187.92 1171.36 1137.79 1289.08 961.859 1397.65C796.391 1499.73 612.017 1454.01 446.055 1486.66C299.942 1515.42 254.826 1582.55 137.23 1640.21C47.4167 1684.23 -59.603 1708.96 -152.483 1735.91C-267.361 1769.14 -386.624 1798.9 -491.303 1821.09C-535.942 1830.35 -578.813 1839.43 -619.479 1848.35" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M2398.96 152.071C2205.87 357.427 1829.4 387.119 1711.9 486.927C1521.13 649.885 1574.58 839.213 1370.87 1040.16C1244.62 1164.79 1218.84 1299.51 1039.79 1426.29C867.796 1547.94 674.97 1487.25 503.934 1526.05C350.315 1560.85 322.139 1641.75 199.942 1715.18C113.602 1766.88 2.48425 1798.56 -97.3785 1828.9C-213.798 1864.55 -332.588 1891.94 -452.862 1910.86C-499.885 1917.73 -545.203 1923.76 -588.371 1929.16" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M2408.1 176.09C2228.58 372.18 1884.68 411.953 1768.35 510.951C1585.53 666.963 1616.62 841.959 1432.89 1026.67C1301.44 1158.73 1300 1310.53 1117.15 1455.52C938.906 1596.81 737.64 1521.03 561.289 1565.83C400.056 1606.72 388.354 1700.63 261.852 1789.97C178.654 1848.8 63.7088 1887.82 -43.0422 1921.63C-167.129 1960.94 -299.488 1989.61 -415.224 2000.45C-464.684 2004.94 -512.427 2007.98 -558.066 2009.79" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M2417.24 200.113C2251.21 386.904 1939.96 436.791 1824.74 534.819C1649.95 683.917 1658.99 845.075 1494.95 1012.92C1358.16 1152.71 1381.31 1321.48 1194.83 1484.46C1010.39 1645.55 800.298 1554.94 618.933 1605.57C450.234 1652.6 454.38 1758.86 324.288 1865.17C243.896 1930.9 125.48 1977.54 11.7257 2014.7C-116.932 2056.97 -255.621 2085.11 -377.12 2090.31C-428.984 2092.34 -479.208 2092.4 -527.295 2090.67" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M2426.35 224.074C2273.87 401.673 1995.28 461.547 1881.07 558.699C1714.5 700.748 1701.63 848.443 1557.02 999.226C1415.59 1146.6 1462.77 1332.49 1272.43 1513.35C1082.09 1694.2 863.013 1588.52 676.453 1644.98C500.328 1698.26 519.629 1816.33 386.558 1939.94C308.677 2012.44 187.003 2066.62 66.4297 2107.59C-66.8531 2152.85 -212.193 2180.58 -339.04 2180.1C-393.361 2179.7 -445.871 2176.81 -496.568 2171.44" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M2435.49 248.087C2296.52 416.441 2050.56 486.374 1937.69 582.528C1778.92 717.692 1744.68 851.9 1619.11 985.399C1473.06 1140.77 1544.4 1343.44 1350.14 1542.2C1153.84 1743.14 925.951 1622.19 734.203 1684.67C550.673 1744.26 584.444 1873.78 449.274 2014.91C373.513 2093.94 249.013 2156 121.674 2200.77C-16.2544 2248.96 -168.245 2276.28 -300.514 2270.08C-355.765 2267.42 -410.813 2261.54 -465.376 2252.46" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M2444.63 272.113C2319.23 431.202 2105.85 511.216 1993.86 606.481C1843.05 734.699 1787.59 855.976 1681.09 971.807C1530.71 1135.44 1625.97 1354.61 1427.73 1571.23C1225.6 1792.15 988.682 1656.14 791.617 1724.13C600.682 1790.03 648.405 1930.78 511.225 2089.82C437.371 2175.47 310.238 2245.27 175.916 2293.43C33.396 2344.52 -125.361 2371.3 -262.916 2359.58C-320.812 2354.62 -378.31 2345.81 -435.029 2333.21" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M2453.77 296.129C2341.87 445.918 2161.18 536.026 2050.19 630.361C1907.39 751.612 1831.11 859.87 1743.15 958.056C1589 1130.47 1707.69 1365.65 1505.35 1600.18C1297.53 1841.08 1051.57 1690.02 849.198 1763.7C650.879 1835.96 711.95 1987.79 573.557 2164.75C501.375 2257.05 371.823 2334.51 230.674 2386.31C83.4555 2440.35 -81.4756 2466.85 -224.834 2449.37C-285.5 2441.85 -345.531 2429.9 -404.444 2413.6" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M2462.9 320.144C2364.52 460.688 2216.47 560.857 2106.57 654.222C1971.81 768.559 1874.42 864.026 1805.22 944.36C1648.34 1126.51 1789.54 1376.7 1582.99 1628.99C1369.71 1889.85 1114.55 1724.11 906.759 1803.22C701.251 1882.19 774.998 2044.64 635.849 2239.57C565.145 2338.67 433.254 2423.5 285.359 2479.15C133.467 2535.89 -37.9061 2562.2 -186.76 2538.98C-250.152 2529.08 -312.659 2514.18 -373.696 2494.43" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		<path d="M-342.925 2575.31C-279.78 2598.54 -214.796 2616.44 -148.656 2628.83C158.446 2686.27 558.7 2527.57 698.224 2314.61C837.748 2101.65 751.389 1927.97 964.383 1842.9C1177.38 1757.83 1441.64 1938.97 1660.65 1658.05C1871.48 1388.02 1709.68 1123.93 1867.19 930.398C1961.77 814.325 2288.3 628.073 2471.94 343.894" stroke="#111D40" stroke-width="3" stroke-miterlimit="10"/>
		</g>
		<defs>
		<clipPath id="clip0_0_2795">
		<rect width="3435.04" height="1699.22" fill="white" transform="translate(-864 1221.38) rotate(-20.8281)"/>
		</clipPath>
		</defs>
		</svg>
	<div class="key-container">
		<div class="key-outbox monitor" style="transform:translateX({percentage}%);">
			{#each keywords[0] as item,i }
					<span class="size-{Math.floor(Math.random()*3)} {i == Math.floor(Math.random()*4)?'active':''} ">{item}</span>
			{/each}
		</div>
		<div class="key-outbox monitor" style="transform:translateX({percentage*-1-50}%);">
			{#each keywords[1] as item,i }
					<span class="size-{Math.floor(Math.random()*3)} {i == Math.floor(Math.random()*4)?'active':''}">{item}</span>
			{/each}
		</div>
		<div class="key-outbox monitor" style="transform:translateX({percentage}%);">
			{#each keywords[2] as item,i }
					<span class="size-{Math.floor(Math.random()*3)} {i == Math.floor(Math.random()*4)?'active':''}">{item}</span>
			{/each}
		</div>
	</div>
	<Silder />

	<div class="customer-value">
		<div class="title">客户价值 <span>降本增效</span><span>便捷管理</span><span>稳定达标</span><span>安全运行</span> </div>
		<div class="tab">
			<div on:click="{() => changeCustomer('company')}" class="tab-li {customerDefault=='company'?'actived':''}">专业公司</div>
			<div on:click="{() => changeCustomer('unit')}" class="tab-li {customerDefault=='unit'?'actived':''}">企业单位</div>
			<div on:click="{() => changeCustomer('organ')}" class="tab-li {customerDefault=='organ'?'actived':''}">政府机关</div>
		</div>
		<div class="tab-context">
			{#each customerValue[customerDefault] as item }
			<div class="li">
				<strong>{item.title}<br><small>{item.desc}</small></strong>
				<div class="percentage">{item.percentage}</div>
			</div>
			{/each}

		</div>
	</div>
</div>

<Gallery />

<Map />

<div class="about-box">
	<div class="about">
		<div class="title">优控云科技</div>
		<div class="info">
			<dl>
				<dt>关于我们 <span>01</span> </dt>
				<dd>优控云科技是拥有丰富的水处理经验的物联网服务商，在水处理工艺、水务管理运维、自控及互联网行业拥有专家支持团队，专注物联感知、数据挖掘及智慧运维，打造基于物联网大数据的水务</dd>
			</dl>
			<dl>
				<dt>关于产品 <span>02</span> </dt>
				<dd>精灵SmarTer物联网云服务平台，为环保水处理系统用户提供远程实时呈现、过程数据统计分析、运维动态寻优及后台专家诊断等服务支持。</dd>
			</dl>
		</div>
	</div>
	<img src="{circle}" alt="">
</div>


