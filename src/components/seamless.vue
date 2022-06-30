<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-body"> 
        <div class="wrap-container">

          <div class="table">
            <table border="0" cellpadding="0" cellspacing="0" class="table-header">
              <tbody>
                <tr>
                  <td width="60%">
                    <span>新闻标题</span>
                  </td>
                  <td width="20%">
                    <span>日 期</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="optionSetting" >
              <table border="0" cellpadding="0" cellspacing="0" class="item">
                <tbody>
                  <tr v-for="(item, index) in listData" :key="index">
                    <td width="100%" class="title">
                      <span @click="toNews()">{{ item.title }}</span>
                    </td>
                    <td width="10%"></td>
                    <td width="20%">
                      <span>{{ item.date }}</span>
                    </td>
                  </tr>
                </tbody>
            </table>
            </vue-seamless-scroll>
          </div>

        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: "seamless",
  components: {
    vueSeamlessScroll
  },
  data() {
    return {
     listData: [{
        title: '乌镇时间开启 2021“互联网之光”博览会展示领先“黑科技”',
        date: '2021-09-26',
        hot: 'https://www.chinanews.com.cn/cj/2021/09-26/9574073.shtml'
     }, {
        title: '对抗样本无法被重建！CMU提出通用的无监督对抗攻击检测方法',
        date: '2021-09-03',
        hot: 'https://ishare.ifeng.com/c/s/v0022jQjUnsECvxcXGwbaIce2SlMJpSKl8PPR5HIoDdLwDk__'
     }, {
        title: '2030年北京建成全球数字经济标杆城市 率先实施一批标杆工程',
        date: '2021-08-03',
        hot: 'http://bj.people.com.cn/n2/2021/0803/c82839-34849642.html'
     },  {
        title: '“人脸识别破解术”成黑产业 护“脸”亟须查缺补漏?',
        date: '2021-03-30',
        hot: 'https://www.chinanews.com.cn/sh/2021/03-30/9443250.shtml'
     }, {
        title: '增强内生动力 AI还需突破三大关卡',
        date: '2020-12-16',
        hot: 'http://5gcenter.people.cn/n1/2020/1216/c430159-31967854.html'
     }, {
        title: 'AI换脸越来越溜儿 谁能阻止它走向堕落',
        date: '2020-12-09',
        hot: 'https://www.chinanews.com.cn/it/2020/12-09/9357587.shtml'
     },{
        title: '数字经济下的 “安全基建”从何做起',
        date: '2020-10-30',
        hot: 'http://5gcenter.people.cn/n1/2020/1030/c430159-31912191.html'
     }, {
        title: 'AI被一件T恤蒙蔽“双眼” 见识不够是根本原因',
        date: '2020-08-13',
        hot: 'https://www.chinanews.com.cn/cul/2020/08-13/9263480.shtml'
     }, {
        title: '杨强：应对对抗攻击、结合AutoML，是联邦学习接下来的研究重点 2020年8月11日',
        date: '2020-08-11',
        hot: 'https://ishare.ifeng.com/c/s/v002ll4szcsWOT5hQCy5tjUo3am1UavpPNK26pSr0bSqr5g__'
     }, {
        title: '对抗样本攻击与防御，MindSpore是怎么做的',
        date: '2020-05-08',
        hot: 'https://ishare.ifeng.com/c/s/v002LM7-_1rRmC-_DIZfN5VdKJtLe6LNtZ6rtGVmTm9rc1GAQ__'
     }, {
        title: '高被引Top1团队综述：图像、图形及文本领域的对抗攻击及防御',
        date: '2020-04-02',
        hot: 'https://ishare.ifeng.com/c/s/v002eOgI6HINxmwS--j2xeAPOWENWU2ZIKcXlDw7BkFDqsV8__'
     }, {
        title: 'AI又当医生了，这次是通过血液识别癌症"崩了"：狂跌近1000点！',
        date: '2020-03-25',
        hot: 'http://gx.people.com.cn/n2/2020/0325/c179462-33902531.html'
     }, {
        title: '人工智能对抗样本攻击：男变女，标识牌“停止”变“限速”%两名管理合伙人离职',
        date: '2019-12-05',
        hot: 'https://ishare.ifeng.com/c/s/v002NHDL55B8RSOXrPiyzsbf2frRvV22OKtEGZVuJjBgLoA__'
     }, {
        title: '对抗样本的反思：仅仅设置更小的扰动阈值 ε ，或许并不够',
        date: '2019-09-15',
        hot: 'https://ishare.ifeng.com/c/s/v002mhUCfaMXOwGKQj4x4DG8c5Vr3v4xXCUYmEzliOX--nnQ__'
     }, {
        title: 'CVPR 2019 | 图像压缩重建也能抵御对抗样本，这是一种新的防守策略 ε ，或许并不够',
        date: '2019-04-02',
        hot: 'https://ishare.ifeng.com/c/s/v002m4LqQikphwXlHCJ7rTU-_z3Xb6OLnlyHpAPSAu5ZN7gs__'
     }, {
        title: '对抗样本的反思：仅仅设置更小的扰动阈值 ε IBM亚马逊研发对抗攻击模型，撕破有害信息的伪装！',
        date: '2019-04-02',
        hot: 'https://ishare.ifeng.com/c/s/v0028Q9ITrVUzIn0QbtD1D3mzbfm2lh6ZoOdLTPeTGOMa6Y__'
     }, {
        title: '对抗攻击的12种攻击方法和15种防御方法 ε ，或许并不够',
        date: '2018-03-05',
        hot: 'https://ishare.ifeng.com/c/s/v002W3gt9iPim5ggxZ--sNi7USHJ7FMQm7A-_blkbEzo5xLZ4__'
     }]
    }
  },
  computed: {
    optionSetting () {
      return {
        step: 0.3, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },  
  mounted() {
    
  },
  methods: {
    toNews(){
      
    }
    
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 1370px;
  top: 110px;
  %table-style {
    width: 100%;
    height: 35px;
    table-layout: fixed;
    tr {
      td {
        padding: 10px 5px;
        text-align: center;
        background-color: transparent;
        white-space: nowrap;
        overflow: hidden;
        color: #E2E5FF;
        font-size: 14px;
      }
    }
  }
  .table {
    .table-header {
      @extend %table-style;
    }
    .seamless-warp {
      height: 490px;
      overflow: hidden;
      visibility: visible;
      .colorRed {
        color: #FF4669;
      }
      .colorOrange {
        color: #FFC956;
      }
      .item {
        height: auto;
        @extend %table-style;
        tr {
          td {
            &.title {
              text-overflow: ellipsis;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>
