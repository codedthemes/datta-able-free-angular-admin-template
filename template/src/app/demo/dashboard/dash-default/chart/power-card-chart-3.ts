export class PowerCardChart3 {
  public static powerCardChartData = {
    chart: {
      type: 'line',
      height: 75,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680ff'],
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    series: [{
      name: 'series1',
      data: [55, 35, 75, 50, 90, 50]
    }],
    yaxis: {
      min: 10,
      max: 100,
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (seriesName) => 'Water'
        }
      },
      marker: {
        show: false
      }
    }
  };
}
