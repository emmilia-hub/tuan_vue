<template>
  <div ref="echart"></div>
</template>
<script>
export default {
  props: [{
    isAxisChart: {
      type: Boolean,
      default: true,
    },
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series,
        };
      },
    },
  }],
  data() {
    return {
      axisOption: {
        textStyle: {
          color: "#fff",
        },

        grid: {
          left: "10%",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: [],
          axisLine: {
            lineStyle: {
              color: "#173ba3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#fff",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#173ba3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80"],
        series: [],
      },
      normalOption: {
        tooltip: {
          trigger: "item",
        },
        color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80"],
        series: [],
      },
      echart: null
    };
  },
  computed: {
    options() {
        return this.isAxisChart?this.axisOption:normalOption
    },
  },
  watch:{
    chartData:{
        handler:function(){
            this.initEchart()
        },
        deep:true,
    }
  },
  methods:{
    initEchart(){
        this.initEchartData()
        if(this.echart){
            this.echart.setOption(this.options)
        }else{
            this.echart = echarts.init(this.$refs.echart)
            this.echart.setOption(this.options)
        }

    },
    initEchartData(){
        if(this.isAxisChart){
            this.axisOption.xAxis.data = this.chartData.xData
            this.axisOption.series = this.chartData.series
        }else{
            this.normalOption.series = this.chartData.series
        }
    }
  }
};
</script>