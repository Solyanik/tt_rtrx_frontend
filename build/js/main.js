window.onload = function () {

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li @click="setItem()">{{ todo.text }}</li>',
    methods: {
      setItem: function () {
        if(this.$root.$data.selectedChart[this.todo.id] == null) {
          this.$root.$data.selectedChart[this.todo.id] = this.todo.text;
        } else {
          delete(this.$root.$data.selectedChart[this.todo.id]);
        }
        if(Object.values(this.$root.$data.selectedChart).join('') == "") {
          this.$root.$data.chartTypeName = "Diagramm Typ";
        } else {
          this.$root.$data.chartTypeName = "Typ (" + Object.values(this.$root.$data.selectedChart).join(', ') + ")";
        }
        this.$root.$data.isChartTypeSelectTrue = false;
      },
      isActive: function () {
        return this.$root.$data.selectedChart[this.todo.id] == true;
      }
    }
  })

  Vue.component('chart-item', {
    name: "chart-item",
    props: ['todo'],
    template: '<div class="panel-info-w50"></div>'
  })

  var app = new Vue({
    el:'#app',
    data: {
      isMenuMobileTrue: false,
      isChartTypeSelectTrue: false,
      chartTypeName: "Diagramm Typ",
      isChartTrue: {},
      isChartTrueDefault: {
        pie: false,
        bar: false,
        line: false
      },
      selectedChart: {},
      chartTypeList: [
        { id: 0, name: 'pie', text: 'Kuchen' },
        { id: 1, name: 'bar', text: 'Bar' },
        { id: 2, name: 'line', text: 'Linie' }
      ],
      dataHighcharts: {
        line: {
          title: {
              text: 'Solar Employment Growth by Sector, 2010-2016'
          },

          subtitle: {
              text: 'Source: thesolarfoundation.com'
          },

          yAxis: {
              title: {
                  text: 'Number of Employees'
              }
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },

          plotOptions: {
              series: {
                  label: {
                      connectorAllowed: false
                  },
                  pointStart: 2010
              }
          },

          series: [{
              name: 'Installation',
              data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          }, {
              name: 'Manufacturing',
              data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          }, {
              name: 'Sales & Distribution',
              data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
          }, {
              name: 'Project Development',
              data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
          }, {
              name: 'Other',
              data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
          }],

          responsive: {
              rules: [{
                  condition: {
                      maxWidth: 500
                  },
                  chartOptions: {
                      legend: {
                          layout: 'horizontal',
                          align: 'center',
                          verticalAlign: 'bottom'
                      }
                  }
              }]
          }
        },
        bar: {
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Stacked bar chart'
          },
          xAxis: {
              categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Total fruit consumption'
              }
          },
          legend: {
              reversed: true
          },
          plotOptions: {
              series: {
                  stacking: 'normal'
              }
          },
          series: [{
              name: 'John',
              data: [5, 3, 4, 7, 2]
          }, {
              name: 'Jane',
              data: [2, 2, 3, 2, 1]
          }, {
              name: 'Joe',
              data: [3, 4, 4, 2, 5]
          }]
        },
        pie: {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'Browser market shares in January, 2018'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: false
                  },
                  showInLegend: true
              }
          },
          series: [{
              name: 'Brands',
              colorByPoint: true,
              data: [{
                  name: 'Chrome',
                  y: 61.41,
                  sliced: true,
                  selected: true
              }, {
                  name: 'Internet Explorer',
                  y: 11.84
              }, {
                  name: 'Firefox',
                  y: 10.85
              }, {
                  name: 'Edge',
                  y: 4.67
              }, {
                  name: 'Safari',
                  y: 4.18
              }, {
                  name: 'Other',
                  y: 7.05
              }]
          }]
        }
      }
    },
    methods: {
      menuMobile: function () {
        this.isMenuMobileTrue = (this.isMenuMobileTrue ? false : true);
      },
      ChartTypeSelect: function () {
        this.isChartTypeSelectTrue = (this.isChartTypeSelectTrue ? false : true);
      },
      InsertChart: function () {

        this.isChartTrue = Object.assign({}, this.isChartTrueDefault);

        for(key in this.selectedChart) {
            Highcharts.chart('chart-' + this.chartTypeList[key].name, this.dataHighcharts[this.chartTypeList[key].name]);
            this.isChartTrue[this.chartTypeList[key].name] = true;
        }

        setTimeout("window.scrollTo(0, document.body.scrollHeight)", 500);

      }
    }
  })

}