// angular import
import { Component, viewChild } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { ApexOptions, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-apex-chart',
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss']
})
export class ApexChartComponent {
  chart = viewChild<ChartComponent>('chart');
  barSimpleChart: Partial<ApexOptions>;
  barStackedChart: Partial<ApexOptions>;
  areaAngleChart: Partial<ApexOptions>;
  areaSmoothChart: Partial<ApexOptions>;
  lineAreaChart: Partial<ApexOptions>;
  donutChart: Partial<ApexOptions>;

  constructor() {
    this.barSimpleChart = {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          }
        }
      }
    };
    this.barStackedChart = {
      series: [
        {
          name: 'PRODUCT A',
          data: [44, 55, 41, 67, 22, 43, 21, 49]
        },
        {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27, 33, 12]
        },
        {
          name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14, 15, 13]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%'
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      xaxis: {
        categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4']
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50
      }
    };
    this.areaAngleChart = {
      chart: {
        height: 380,
        type: 'area',
        stacked: false
      },
      stroke: {
        curve: 'straight'
      },
      series: [
        {
          name: 'Music',
          data: [11, 15, 26, 20, 33, 27]
        },
        {
          name: 'Photos',
          data: [32, 33, 21, 42, 19, 32]
        }
      ],
      xaxis: {
        categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2']
      },
      tooltip: {
        followCursor: true
      },
      fill: {
        opacity: 1
      }
    };
    this.areaSmoothChart = {
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z'
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    };
    this.lineAreaChart = {
      series: [
        {
          name: 'Desktops',
          data: [20, 55, 45, 75, 50, 75, 100]
        },
        {
          name: 'Desktops',
          data: [10, 45, 35, 65, 40, 65, 90]
        }
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: ['2006', '2007', '2008', '2009', '2010', '2011', '2012']
      }
    };
    this.donutChart = {
      chart: {
        type: 'donut',
        width: '100%',
        height: 350
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
          donut: {
            size: '75%'
          },
          offsetY: 20
        }
      },
      colors: ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'],
      series: [21, 23, 19, 14, 6],
      labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
      legend: {
        position: 'left',
        offsetY: 80
      }
    };
  }
}
