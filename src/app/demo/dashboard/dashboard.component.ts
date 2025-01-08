// angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

declare const AmCharts;

import '../../../assets/charts/amchart/amcharts.js';
import '../../../assets/charts/amchart/gauge.js';
import '../../../assets/charts/amchart/serial.js';
import '../../../assets/charts/amchart/light.js';
import '../../../assets/charts/amchart/pie.min.js';
import '../../../assets/charts/amchart/ammap.min.js';
import '../../../assets/charts/amchart/usaLow.js';
import '../../../assets/charts/amchart/radar.js';
import '../../../assets/charts/amchart/worldLow.js';

import dataJson from 'src/fake-data/map_data';
import mapColor from 'src/fake-data/map-color-data.json';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // life cycle event
  ngOnInit() {
    setTimeout(() => {
      const latlong = dataJson;

      const mapData = mapColor;

      const minBulletSize = 3;
      const maxBulletSize = 70;
      let min = Infinity;
      let max = -Infinity;
      let i;
      let value;
      for (i = 0; i < mapData.length; i++) {
        value = mapData[i].value;
        if (value < min) {
          min = value;
        }
        if (value > max) {
          max = value;
        }
      }

      const maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
      const minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

      const images = [];
      for (i = 0; i < mapData.length; i++) {
        const dataItem = mapData[i];
        value = dataItem.value;

        let square = ((value - min) / (max - min)) * (maxSquare - minSquare) + minSquare;
        if (square < minSquare) {
          square = minSquare;
        }
        const size = Math.sqrt(square / (Math.PI * 8));
        const id = dataItem.code;

        images.push({
          type: 'circle',
          theme: 'light',
          width: size,
          height: size,
          color: dataItem.color,
          longitude: latlong[id].longitude,
          latitude: latlong[id].latitude,
          title: dataItem.name + '</br> [ ' + value + ' ]',
          value: value
        });
      }

      // world-low chart
      AmCharts.makeChart('world-low', {
        type: 'map',
        projection: 'eckert6',

        dataProvider: {
          map: 'worldLow',
          images: images
        },
        export: {
          enabled: true
        }
      });

      const chartDatac = [
        {
          day: 'Mon',
          value: 60
        },
        {
          day: 'Tue',
          value: 45
        },
        {
          day: 'Wed',
          value: 70
        },
        {
          day: 'Thu',
          value: 55
        },
        {
          day: 'Fri',
          value: 70
        },
        {
          day: 'Sat',
          value: 55
        },
        {
          day: 'Sun',
          value: 70
        }
      ];

      // widget-line-chart
      AmCharts.makeChart('widget-line-chart', {
        type: 'serial',
        addClassNames: true,
        defs: {
          filter: [
            {
              x: '-50%',
              y: '-50%',
              width: '200%',
              height: '200%',
              id: 'blur',
              feGaussianBlur: {
                in: 'SourceGraphic',
                stdDeviation: '30'
              }
            },
            {
              id: 'shadow',
              x: '-10%',
              y: '-10%',
              width: '120%',
              height: '120%',
              feOffset: {
                result: 'offOut',
                in: 'SourceAlpha',
                dx: '0',
                dy: '20'
              },
              feGaussianBlur: {
                result: 'blurOut',
                in: 'offOut',
                stdDeviation: '10'
              },
              feColorMatrix: {
                result: 'blurOut',
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0'
              },
              feBlend: {
                in: 'SourceGraphic',
                in2: 'blurOut',
                mode: 'normal'
              }
            }
          ]
        },
        fontSize: 15,
        dataProvider: chartDatac,
        autoMarginOffset: 0,
        marginRight: 0,
        categoryField: 'day',
        categoryAxis: {
          color: '#fff',
          gridAlpha: 0,
          axisAlpha: 0,
          lineAlpha: 0,
          offset: -20,
          inside: true
        },
        valueAxes: [
          {
            fontSize: 0,
            inside: true,
            gridAlpha: 0,
            axisAlpha: 0,
            lineAlpha: 0,
            minimum: 0,
            maximum: 100
          }
        ],
        chartCursor: {
          valueLineEnabled: false,
          valueLineBalloonEnabled: false,
          cursorAlpha: 0,
          zoomable: false,
          valueZoomable: false,
          cursorColor: '#fff',
          categoryBalloonColor: '#51b4e6',
          valueLineAlpha: 0
        },
        graphs: [
          {
            id: 'g1',
            type: 'line',
            valueField: 'value',
            lineColor: '#ffffff',
            lineAlpha: 1,
            lineThickness: 3,
            fillAlphas: 0,
            showBalloon: true,
            balloon: {
              drop: true,
              adjustBorderColor: false,
              color: '#222',
              fillAlphas: 0.2,
              bullet: 'round',
              bulletBorderAlpha: 1,
              bulletSize: 5,
              hideBulletsCount: 50,
              lineThickness: 2,
              useLineColorForBulletBorder: true,
              valueField: 'value',
              balloonText: '<span style="font-size:18px;">[[value]]</span>'
            }
          }
        ]
      });
    }, 500);
  }

  // public method
  sales = [
    {
      title: 'Daily Sales',
      icon: 'icon-arrow-up text-c-green',
      amount: '$249.95',
      percentage: '67%',
      progress: 50,
      design: 'col-md-6',
      progress_bg: 'progress-c-theme'
    },
    {
      title: 'Monthly Sales',
      icon: 'icon-arrow-down text-c-red',
      amount: '$2,942.32',
      percentage: '36%',
      progress: 35,
      design: 'col-md-6',
      progress_bg: 'progress-c-theme2'
    },
    {
      title: 'Yearly Sales',
      icon: 'icon-arrow-up text-c-green',
      amount: '$8,638.32',
      percentage: '80%',
      progress: 70,
      design: 'col-md-12',
      progress_bg: 'progress-c-theme'
    }
  ];

  card = [
    {
      design: 'border-bottom',
      number: '235',
      text: 'TOTAL IDEAS',
      icon: 'icon-zap text-c-green'
    },
    {
      number: '26',
      text: 'TOTAL LOCATIONS',
      icon: 'icon-map-pin text-c-blue'
    }
  ];

  social_card = [
    {
      design: 'col-md-12',
      icon: 'fab fa-facebook-f text-primary',
      amount: '12,281',
      percentage: '+7.2%',
      color: 'text-c-green',
      target: '35,098',
      progress: 60,
      duration: '3,539',
      progress2: 45,
      progress_bg: 'progress-c-theme',
      progress_bg_2: 'progress-c-theme2'
    },
    {
      design: 'col-md-6',
      icon: 'fab fa-twitter text-c-blue',
      amount: '11,200',
      percentage: '+6.2%',
      color: 'text-c-purple',
      target: '34,185',
      progress: 40,
      duration: '4,567',
      progress2: 70,
      progress_bg: 'progress-c-theme',
      progress_bg_2: 'progress-c-theme2'
    },
    {
      design: 'col-md-6',
      icon: 'fab fa-google-plus-g text-c-red',
      amount: '10,500',
      percentage: '+5.9%',
      color: 'text-c-blue',
      target: '25,998',
      progress: 80,
      duration: '7,753',
      progress2: 50,
      progress_bg: 'progress-c-theme',
      progress_bg_2: 'progress-c-theme2'
    }
  ];

  progressing = [
    {
      number: '5',
      amount: '384',
      progress: 70,
      progress_bg: 'progress-c-theme'
    },
    {
      number: '4',
      amount: '145',
      progress: 35,
      progress_bg: 'progress-c-theme'
    },
    {
      number: '3',
      amount: '24',
      progress: 25,
      progress_bg: 'progress-c-theme'
    },
    {
      number: '2',
      amount: '1',
      progress: 10,
      progress_bg: 'progress-c-theme'
    },
    {
      number: '1',
      amount: '0',
      progress: 0,
      progress_bg: 'progress-c-theme'
    }
  ];

  tables = [
    {
      src: 'assets/images/user/avatar-1.jpg',
      title: 'Isabella Christensen',
      text: 'Requested account activation',
      time: '11 MAY 12:56',
      color: 'text-c-green'
    },
    {
      src: 'assets/images/user/avatar-2.jpg',
      title: 'Ida Jorgensen',
      text: 'Pending document verification',
      time: '11 MAY 10:35',
      color: 'text-c-red'
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      title: 'Mathilda Andersen',
      text: 'Completed profile setup',
      time: '9 MAY 17:38',
      color: 'text-c-green'
    },
    {
      src: 'assets/images/user/avatar-1.jpg',
      title: 'Karla Soreness',
      text: 'Requires additional information',
      time: '19 MAY 12:56',
      color: 'text-c-red'
    },
    {
      src: 'assets/images/user/avatar-2.jpg',
      title: 'Albert Andersen',
      text: 'Approved and verified account',
      time: '21 July 12:56',
      color: 'text-c-green'
    }
  ];
}
