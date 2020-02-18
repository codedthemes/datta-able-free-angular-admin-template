export class SeoChart1 {
  public static seoChartData = {
    chart: {
      type: 'area',
      height: 40,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680ff'],
    fill: {
      type: 'solid',
      opacity: 0.3,
    },
    markers: {
      size: 2,
      opacity: 0.9,
      colors: '#4680ff',
      strokeColor: '#4680ff',
      strokeWidth: 2,
      hover: {
        size: 4,
      }
    },
    stroke: {
      curve: 'straight',
      width: 3,
    },
    series: [{
      name: 'series1',
      data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
    }],
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => 'Visits :'
        }
      },
      marker: {
        show: false
      }
    }
  };
}
