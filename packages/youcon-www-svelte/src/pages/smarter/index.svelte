<script lang="ts">
  import "../../assets/css/light.css";
  import "../../assets/css/smarter.scss";
  // 深色导航
  import { headerClass } from "../../js/store.js";
  import liImg from "../../assets/img/smarter/hover.png";
  import sea from "./sea.mp4";
  headerClass.set("");

  let activeType: string = "mobile";

  const changeType = (type: string) => {
    if ((type = "cycle")) {
      activeType == "mobile"
        ? (activeType = "laptop")
        : (activeType = "mobile");
    } else {
      activeType = type;
    }
  };

  import mobile from "../../assets/img/smarter/mobile.png";
  import laptop from "../../assets/img/smarter/laptop.png";
  import pOne from "../../assets/img/smarter/p-1.svg";
  import pTwo from "../../assets/img/smarter/p-2.svg";
  import pThree from "../../assets/img/smarter/p-3.svg";
  import pFour from "../../assets/img/smarter/p-4.svg";
  import line from "../../assets/img/smarter/line.svg";
</script>

<svelte:head>
  <title>水务精灵</title>
  <meta name="description" content="水务精灵" />
</svelte:head>

<div class="smarter-banner" />
<div class="smarter-name">
  <div class="left">
    <div class="title">水务精灵</div>
    <div class="desc">
      水务精灵SmarTer是XCLOUD物联网云服务平台中将物联网与水处理设备相结合的智能化大数据管理系统。
    </div>
    <div class="control">
      <div on:click={() => changeType("cycle")} class="left" />
      <div on:click={() => changeType("cycle")} class="right" />
    </div>
  </div>
  <div class="right">
    <div
      on:click={() => changeType("mobile")}
      class="mobile {activeType == 'mobile' ? '' : 'disabled'}"
    >
      <img src={mobile} alt="" />
    </div>
    <div
      on:click={() => changeType("laptop")}
      class="laptop  {activeType == 'laptop' ? '' : 'disabled'}"
    >
      <img src={laptop} alt="" />
    </div>
  </div>
</div>
<div class="desc-bg">
  <div class="synopsis">
    <div class="left">
      <div class="title">平台简介</div>
      <div class="system">
        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/ngcezuqf.json"
          trigger="loop"
          colors="primary:#010101,secondary:#7de140"
          style="width:140px;height:140px"
        />
        <!-- <img src="{iconSystem}" alt=""> -->
        <!-- <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M128.142 69.9999C128.142 59.3879 114.023 50.4874 93.3804 46.6199C89.5129 25.9769 80.6124 11.8579 70.0004 11.8579C59.3884 11.8579 50.4879 25.9769 46.6204 46.6199C25.9774 50.4874 11.8584 59.3879 11.8584 69.9999C11.8584 80.6119 25.9774 89.5124 46.6204 93.3799C50.4879 114.023 59.3884 128.142 70.0004 128.142C80.6124 128.142 89.5129 114.023 93.3804 93.3799C114.023 89.5124 128.142 80.6119 128.142 69.9999ZM55.4264 31.1814C59.4304 21.5704 64.7434 16.0579 70.0004 16.0579C75.2574 16.0579 80.5704 21.5704 84.5744 31.1814C86.3874 35.5319 87.8574 40.4984 88.9494 45.8849C83.0344 45.0204 76.6644 44.5514 70.0004 44.5514C63.3364 44.5514 56.9664 45.0204 51.0514 45.8849C52.1469 40.4949 53.6134 35.5319 55.4264 31.1814ZM91.2524 69.9999C91.2524 76.8669 90.7344 83.5344 89.7439 89.7434C83.5349 90.7339 76.8674 91.2519 70.0004 91.2519C63.1334 91.2519 56.4659 90.7339 50.2569 89.7434C49.2664 83.5344 48.7484 76.8669 48.7484 69.9999C48.7484 63.1329 49.2664 56.4654 50.2569 50.2564C56.4659 49.2659 63.1334 48.7479 70.0004 48.7479C76.8674 48.7479 83.5349 49.2659 89.7439 50.2564C90.7344 56.4654 91.2524 63.1329 91.2524 69.9999ZM31.1819 84.5739C21.5709 80.5699 16.0584 75.2569 16.0584 69.9999C16.0584 64.7429 21.5709 59.4299 31.1819 55.4259C35.5324 53.6129 40.4989 52.1429 45.8854 51.0509C45.0209 56.9659 44.5519 63.3359 44.5519 69.9999C44.5519 76.6639 45.0209 83.0339 45.8854 88.9489C40.4954 87.8534 35.5324 86.3869 31.1819 84.5739ZM84.5744 108.818C80.5704 118.429 75.2574 123.942 70.0004 123.942C64.7434 123.942 59.4304 118.429 55.4264 108.818C53.6134 104.468 52.1434 99.5014 51.0514 94.1149C56.9664 94.9794 63.3364 95.4484 70.0004 95.4484C76.6644 95.4484 83.0344 94.9794 88.9494 94.1149C87.8539 99.5049 86.3874 104.468 84.5744 108.818ZM108.819 84.5739C104.468 86.3869 99.5019 87.8569 94.1154 88.9489C94.9799 83.0339 95.4489 76.6639 95.4489 69.9999C95.4489 63.3359 94.9799 56.9659 94.1154 51.0509C99.5019 52.1464 104.465 53.6129 108.819 55.4259C118.43 59.4299 123.942 64.7429 123.942 69.9999C123.942 75.2569 118.43 80.5699 108.819 84.5739Z" fill="#7DE140"/>
                    <path d="M70.0004 128.142C37.9404 128.142 11.8584 102.06 11.8584 69.9999C11.8584 37.9399 37.9404 11.8579 70.0004 11.8579C102.06 11.8579 128.142 37.9399 128.142 69.9999C128.142 102.06 102.06 128.142 70.0004 128.142ZM70.0004 16.0579C40.2574 16.0579 16.0584 40.2569 16.0584 69.9999C16.0584 99.7429 40.2574 123.942 70.0004 123.942C99.7434 123.942 123.942 99.7429 123.942 69.9999C123.942 40.2569 99.7434 16.0579 70.0004 16.0579Z" fill="#111D40"/>
                    </svg>                    
                     -->
        <dl>
          <dt>系统 <sup>01</sup></dt>
          <dd>
            水务精灵SmarTer是XCLOUD物联网云服务平台中将物联网与水处理设备相结合的智能化大数据管理系统。通过非侵入式工业智能网关，灵活部署，帮助用户建立统一数据平台，对水处理过程实现动态寻优和智能化的运营管理，满足用户在自主可控、安全可靠、快速响应等方面的需求。
          </dd>
        </dl>
      </div>
      <div class="system">
        <!-- <img src="{iconData}" alt=""> -->
        <!-- <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M127.785 56.3481C124.334 51.3816 119.609 47.5351 114.079 45.1831C107.072 29.6431 91.6579 19.6506 74.5604 19.6506C58.9059 19.6506 44.6372 27.9867 36.9194 41.5197C35.9834 41.3351 35.0215 41.2386 34.0444 41.2386C33.9983 41.2386 33.9533 41.2427 33.9079 41.2455C25.7197 41.3176 19.0784 47.9997 19.0784 56.2046C19.0784 56.7436 19.1099 57.2861 19.1694 57.8321C11.3434 62.5571 6.54492 70.9886 6.54492 80.1901C6.54492 94.5996 18.2664 106.321 32.6759 106.321H39.9804C41.1634 106.321 42.1364 105.366 42.1364 104.179C42.1364 102.993 41.1739 102.034 39.9909 102.034H32.6864C20.6429 102.034 10.8429 92.2336 10.8429 80.1901C10.8429 72.0631 15.3229 64.6571 22.5329 60.8596C23.3869 60.4116 23.8349 59.4456 23.6284 58.5041C23.4604 57.7306 23.373 56.9571 23.373 56.2046C23.373 50.3184 28.1598 45.5309 34.0458 45.5297C34.1538 45.5297 34.2602 45.5391 34.3677 45.5424C34.5395 45.5476 34.7116 45.5493 34.8828 45.5629C34.9005 45.5643 34.9178 45.5677 34.9356 45.5692C35.1953 45.5912 35.4545 45.6209 35.7122 45.662C35.7346 45.6656 35.7563 45.6715 35.7786 45.6752C36.0275 45.7165 36.2755 45.7649 36.5216 45.8238C36.7249 45.8726 36.9246 45.9318 37.1238 45.9923C37.1814 46.0096 37.2398 46.0229 37.2971 46.0412C40.3959 47.0396 42.9524 49.4308 44.0964 52.6031C44.4114 53.4781 45.2339 54.0206 46.1124 54.0206C46.3539 54.0206 46.6024 53.9786 46.8404 53.8876C47.9534 53.4851 48.5309 52.2566 48.1284 51.1436C46.8373 47.566 44.2614 44.6997 41.0402 42.9884C48.0807 31.1815 60.7208 23.9381 74.5674 23.9381C90.2439 23.9381 104.345 33.2586 110.498 47.6821C110.512 47.7147 110.534 47.7426 110.549 47.7743C112.588 52.5904 113.624 57.7054 113.624 62.9946C113.624 63.0366 113.62 67.1036 112.21 72.0946C111.888 73.2356 112.549 74.4186 113.69 74.7406C113.886 74.7931 114.082 74.8211 114.275 74.8211C115.213 74.8211 116.07 74.2016 116.336 73.2601C117.908 67.6951 117.911 63.1697 117.911 62.9876C117.911 58.9373 117.362 54.9734 116.275 51.1454C124.242 56.1154 129.171 64.8165 129.171 74.4816C129.171 86.5391 121.114 97.3891 109.581 100.865C108.447 101.204 107.803 102.401 108.146 103.535C108.486 104.669 109.683 105.313 110.817 104.97C117.229 103.038 122.993 99.0131 127.046 93.6406C131.239 88.0861 133.455 81.4606 133.455 74.4816C133.455 67.9576 131.495 61.6856 127.785 56.3481Z" fill="#111D40"/>
                    <path d="M81.0252 120.349H70.2452C69.1077 120.349 68.1872 119.429 68.1872 118.291V113.643C66.6367 113.171 65.1352 112.548 63.7107 111.792L60.4242 115.078C59.6192 115.883 58.3172 115.883 57.5122 115.078L49.8892 107.455C49.0842 106.65 49.0842 105.348 49.8892 104.543L53.1757 101.257C52.4197 99.8322 51.7967 98.3307 51.3242 96.7802H46.6762C45.5387 96.7802 44.6182 95.8597 44.6182 94.7222V83.9422C44.6182 82.8047 45.5387 81.8842 46.6762 81.8842H51.3242C51.7967 80.3372 52.4197 78.8322 53.1792 77.4077L49.8927 74.1212C49.5077 73.7362 49.2907 73.2112 49.2907 72.6652C49.2907 72.1192 49.5077 71.5942 49.8927 71.2092L57.5157 63.5862C58.3207 62.7812 59.6227 62.7812 60.4242 63.5862L63.7107 66.8727C65.1352 66.1167 66.6367 65.4937 68.1872 65.0212V60.3732C68.1872 59.2357 69.1077 58.3152 70.2452 58.3152H81.0252C82.1627 58.3152 83.0832 59.2357 83.0832 60.3732V65.0212C84.6337 65.4937 86.1352 66.1167 87.5597 66.8727L90.8462 63.5862C91.6512 62.7812 92.9532 62.7812 93.7582 63.5862L101.381 71.2092C101.766 71.5942 101.983 72.1192 101.983 72.6652C101.983 73.2112 101.766 73.7362 101.381 74.1212L98.0947 77.4077C98.8507 78.8322 99.4737 80.3337 99.9497 81.8842H104.598C105.735 81.8842 106.656 82.8047 106.656 83.9422V94.7222C106.656 95.8597 105.735 96.7802 104.598 96.7802H99.9497C99.4772 98.3307 98.8542 99.8322 98.0982 101.257L101.385 104.543C102.19 105.348 102.19 106.65 101.385 107.455L93.7617 115.078C93.3767 115.463 92.8517 115.68 92.3057 115.68C91.7597 115.68 91.2347 115.463 90.8497 115.078L87.5632 111.792C86.1387 112.548 84.6372 113.171 83.0867 113.647V118.295C83.0832 119.429 82.1627 120.349 81.0252 120.349ZM72.3032 116.233H78.9672V113.262C78.9672 111.669 80.0347 110.245 81.5677 109.804C83.0797 109.366 84.5427 108.761 85.9147 108.005C87.3112 107.235 89.0752 107.483 90.2022 108.614L92.3022 110.714L97.0167 105.999L94.9167 103.899C93.7897 102.772 93.5377 101.008 94.3077 99.6117C95.0637 98.2397 95.6692 96.7767 96.1067 95.2647C96.5477 93.7352 97.9722 92.6642 99.5682 92.6642H102.54V86.0002H99.5682C97.9722 86.0002 96.5512 84.9292 96.1067 83.3997C95.6692 81.8877 95.0637 80.4247 94.3077 79.0527C93.5377 77.6562 93.7862 75.8922 94.9167 74.7652L97.0167 72.6652L92.3022 67.9507L90.2022 70.0507C89.0752 71.1777 87.3112 71.4297 85.9147 70.6597C84.5427 69.9037 83.0797 69.2982 81.5677 68.8607C80.0382 68.4162 78.9672 66.9952 78.9672 65.3992V62.4277H72.3032V65.3992C72.3032 66.9952 71.2357 68.4162 69.7027 68.8607C68.1872 69.2982 66.7277 69.9037 65.3557 70.6597C63.9592 71.4297 62.1987 71.1777 61.0682 70.0507L58.9682 67.9507L54.2537 72.6652L56.3537 74.7652C57.4807 75.8922 57.7327 77.6562 56.9627 79.0527C56.2067 80.4247 55.6012 81.8877 55.1637 83.3997C54.7192 84.9327 53.2982 86.0002 51.7022 86.0002H48.7307V92.6642H51.7022C53.2982 92.6642 54.7192 93.7317 55.1637 95.2647C55.6012 96.7767 56.2067 98.2397 56.9627 99.6117C57.7327 101.008 57.4842 102.772 56.3537 103.899L54.2537 105.999L58.9682 110.714L61.0682 108.614C62.1952 107.487 63.9557 107.235 65.3522 108.005C66.7242 108.761 68.1872 109.366 69.6992 109.804C71.2287 110.248 72.2997 111.669 72.2997 113.265V116.233H72.3032Z" fill="#7DE140"/>
                    <path d="M75.6352 100.665C72.6077 100.665 69.7622 99.4857 67.6237 97.3472C65.4852 95.2087 64.3057 92.3597 64.3057 89.3357C64.3057 86.3082 65.4852 83.4627 67.6237 81.3242C72.0407 76.9072 79.2297 76.9072 83.6502 81.3242C85.7922 83.4662 86.9682 86.3117 86.9682 89.3357C86.9682 92.3632 85.7887 95.2087 83.6502 97.3472C81.5117 99.4857 78.6627 100.665 75.6352 100.665ZM75.6352 82.1187C73.7872 82.1187 71.9392 82.8222 70.5322 84.2292C69.1707 85.5907 68.4182 87.4037 68.4182 89.3322C68.4182 91.2607 69.1707 93.0702 70.5322 94.4352C71.8937 95.8002 73.7067 96.5492 75.6352 96.5492C77.5637 96.5492 79.3732 95.7967 80.7382 94.4352C82.1032 93.0737 82.8522 91.2607 82.8522 89.3322C82.8522 87.4037 82.0997 85.5942 80.7382 84.2292C79.3312 82.8222 77.4832 82.1187 75.6352 82.1187Z" fill="#7DE140"/>
                    </svg>                     -->
        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/kwbxfnke.json"
          trigger="loop"
          colors="primary:#111d40,secondary:#7de140"
          style="width:140px;height:140px"
        />
        <dl>
          <dt>数据 <sup>01</sup></dt>
          <dd>
            通过[移动中控]、[云图可视]、[专家服务]、[智能判定]、[全景巡航]等模块对现场设备进行数据采集、传输、云端分析后，将信息呈现至中控大屏、PC端、移动端等智能终端。
          </dd>
        </dl>
      </div>
    </div>
    <div class="right">
      <div class="list">
        <img src={liImg} alt="" />
        <div class="title">节时</div>
        <div class="desc">提升效率</div>
        <div class="percentage">26-60%</div>
      </div>
      <div class="list">
        <img src={liImg} alt="" />
        <div class="title">节时</div>
        <div class="desc">提升效率</div>
        <div class="percentage">26-60%</div>
      </div>
      <div class="list">
        <img src={liImg} alt="" />
        <div class="title">节时</div>
        <div class="desc">提升效率</div>
        <div class="percentage">26-60%</div>
      </div>
      <div class="list">
        <img src={liImg} alt="" />
        <div class="title">节时</div>
        <div class="desc">提升效率</div>
        <div class="percentage">26-60%</div>
      </div>
      <div class="list">
        <img src={liImg} alt="" />
        <div class="title">节时</div>
        <div class="desc">提升效率</div>
        <div class="percentage">26-60%</div>
      </div>
      <div class="list">
        <img src={liImg} alt="" />
        <div class="title">节时</div>
        <div class="desc">提升效率</div>
        <div class="percentage">26-60%</div>
      </div>
    </div>
  </div>
</div>
<div class="peculiarity">
  <!-- <video
    id="airpods-spatial-video"
    autoplay
    loop
    muted
    data-inline-media=""
    data-inline-media-plugins="LoadTimeout,PlayPauseButton"
    data-inline-media-basepath="/105/media/us/home/2022/d30e1157-81fe-49f2-8711-e633b812887c/anim/airpods"
    data-load-timeout="5000"
    aria-hidden="true"
    preload="auto"
    src={sea}
  /> -->
  <div class="project">
    <div class="title">产品特点</div>
    <div class="box-out">
      <div class="box-in">
        <!-- <img src="{pOne}" alt=""> -->
        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/bgwzirmj.json"
          trigger="hover"
          colors="primary:#979dbd,secondary:#7de140"
          style="width:140px;height:140px"
        />
        <h3>便捷</h3>
        <p>简洁的移动端服务，高效的云端支持</p>
      </div>
      <div class="box-in">
        <!-- <img src="{pTwo}" alt=""> -->
        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/gaqzgxto.json"
          trigger="loop"
          colors="primary:#979dbd,secondary:#7de140"
          style="width:140px;height:140px"
        />
        <h3>专业</h3>
        <p>专家诊断，行业智库，多维定制服务</p>
      </div>
      <div class="box-in">
        <!-- <img src="{pThree}" alt=""> -->
        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/hbjlznlo.json"
          trigger="hover"
          colors="primary:#979dbd,secondary:#7de140"
          style="width:140px;height:140px"
        />
        <h3>精准</h3>
        <p>云图数据可视化管理，预警推送，智能判定</p>
      </div>
      <div class="box-in">
        <!-- <img src="{pFour}" alt=""> -->
        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/vlupvdhl.json"
          trigger="loop"
          colors="primary:#979dbd,secondary:#7de140"
          style="width:140px;height:140px"
        />
        <h3>效率</h3>
        <p>数据实时传输，指令精准，减少人为判断成本</p>
      </div>
    </div>
    <div class="control">
      <div class="left" />
      <div class="right" />
    </div>
  </div>
</div>

<div class="detail">
  <img src={line} class="bg-line" alt="" />
  <div class="project">
    <div class="left">
      <div class="title">实时数据</div>
      <div class="desc">智能终端秒级同步精准显示</div>
    </div>
    <div class="right" />
  </div>
</div>
