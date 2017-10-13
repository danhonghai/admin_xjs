
function optionConfig(optionObj){
     // 基于准备好的dom，初始化echarts实例
    var echart = echarts.init(document.getElementById(optionObj.id));
    // 指定图表的配置项和数据
    var option = {
        color: ['#3398DB'],
        title: {
            text: optionObj.text
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            data: optionObj.xData
        },
        yAxis: {
            data: optionObj.yData
        },
        series: [{
            name: optionObj.name,
            type: 'bar',
            data: optionObj.data
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    echart.setOption(option);
}

function optionPieConfig(optionObj){
    // 基于准备好的dom，初始化echarts实例
    var echart = echarts.init(document.getElementById(optionObj.id));
    // 指定图表的配置项和数据
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: optionObj.name,
                type: 'pie',
                data:optionObj.data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    if(optionObj.type == 'cake'){//饼状图
        option.series[0].radius = '55%';
        option.series[0].center = ['50%', '60%'];
    }else if(optionObj.type == 'ring'){//环状图
        option.series[0].radius = ['50%', '70%'];
    }

    // 使用刚指定的配置项和数据显示图表。
    echart.setOption(option);
}

function optionLineConfig(optionObj){
    // 基于准备好的dom，初始化echarts实例
    var echart = echarts.init(document.getElementById(optionObj.id));
    // 指定图表的配置项和数据
    var option = {
       /* title: {
            text: '折线图堆叠'
        },*/
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0.00时','1.00时','2.00时','3.00时','4.00时','5.00时','6.00时','7.00时','8.00时','9.00时','10.00时','11.00时','12.00时','13.00时','14.00时','15.00时','16.00时','17.00时','18.00时','19.00时','20.00时','21.00时','22.00时','23.00时']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                type:'line',
                stack: '人数(人)',
                data:[1, 20, 1, 4, 10, 13, 13,1, 20, 1, 4, 10, 13, 13,1, 20, 1, 4, 10, 13, 13,10,13,10]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    echart.setOption(option);
}

//大数量面积图
function optionAreaConfig(optionObj){
     // 基于准备好的dom，初始化echarts实例
        var echart = echarts.init(document.getElementById(optionObj.id));
        // 指定图表的配置项和数据
        var option = {
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: optionObj.xData
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [
                {
                    name:optionObj.name,
                    type:'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: 'rgb(255, 70, 131)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(255, 158, 68)'
                            }, {
                                offset: 1,
                                color: 'rgb(255, 70, 131)'
                            }])
                        }
                    },
                    data: optionObj.data
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        echart.setOption(option);
}
