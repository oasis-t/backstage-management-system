<template>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="user">
            <img width="75px" height="75px" :src="userImg" alt="userImage"/>
            <p>B19030409 Ivan Wong</p>
          </div>
        </el-card>
        <el-card shadow="hover" class="table">
          <el-table
              :data="tableData"
              style="width: 100%">
            <el-table-column
                prop="brand"
                label="品牌">
            </el-table-column>
            <el-table-column
                prop="price"
                label="价格（元）">
            </el-table-column>
            <el-table-column
                prop="sales"
                label="销量（台）">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
<!-- ********************************* -->
      <el-col :span="16">
        <el-card shadow="hover" class="chart">
          <div id="column" ref="bar-chart"></div>
        </el-card>

        <div class="graph">
          <el-card shadow="hover" class="pie">
            <div id="circle" ref="pie-chart"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "Home",
  data(){
    return {
      userImg:require('/src/assets/logo.png'),
      tableData:[
        {
          brand: 'Samsung',
          price: '4999',
          sales: '50'
        },
        {
          brand: 'iPhone',
          price: '6799',
          sales: '80'
        },
        {
          brand: 'Huawei',
          price: '2999',
          sales: '100'
        },
        {
          brand: 'Xiaomi',
          price: '1999',
          sales: '110'
        },
        {
          brand: 'Pixel',
          price: '9999',
          sales: '20'
        },
        {
          brand: 'Oppo',
          price: '999',
          sales: '70'
        },
        {
          brand: 'Honor',
          price: '999',
          sales: '50'
        }
      ],
      salesInfo:[
          {
            name:'交易成功订单',
            value:123,
            icon:'success',
            color:'#2ec7c9'
          },
        {
          name:'交易成功订单',
          value:123,
          icon:'success',
          color:'#2ec7c9'
        }
      ]
    }
  },
  mounted(){
    const that = this;
    const dataArr = that.tableData;
    const brandArr =[];
    const salesArr = [];
    const pieData = [];
    dataArr.forEach(item => {
      brandArr.push(item['brand']);
      salesArr.push(item['sales']);
      pieData.push({name:item['brand'],value:item['sales']});
    })
    const optionOfBar = {
      title: {
        text: '销量一览'
      },
      tooltip:{},
      xAxis: {
        data: brandArr,
      },
      yAxis: {},
      series:{
        type:'bar',
        data:salesArr,
      }
    }
    const optionOfPie = {
      radius:'100%',
      tooltip: {
      },
      series: [
        {
          type: 'pie',
          data: pieData,
        }
      ]
    }
    let chartOfBar = echarts.init(this.$refs["bar-chart"]);
    let chartOfPie = echarts.init((this.$refs["pie-chart"]));
    chartOfBar.setOption(optionOfBar);
    chartOfPie.setOption(optionOfPie);
  },
}
</script>

<style lang="less" scoped>
.table{
  margin-top: 20px;
}
.chart{
  height: 250px;
  margin-bottom: 20px;
}
.pie{
  height: 250px;
  vertical-align: center;
}
#column{
  height: 250px;
}
#circle{
  height: 250px;
}
</style>