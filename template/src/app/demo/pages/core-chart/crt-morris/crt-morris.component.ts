import { Component, OnInit } from '@angular/core';
import '../../../../../../node_modules/morris.js/morris.js';

@Component({
  selector: 'app-crt-morris',
  templateUrl: './crt-morris.component.html',
  styleUrls: ['./crt-morris.component.scss']
})
export class CrtMorrisComponent implements OnInit {
  public barBasicMorrisData: any;
  public barBasicMorrisOption: any;

  public barStackedOption: any;

  public areaAngleMorrisData: any;
  public areaAngleMorrisOption: any;

  public areaSmoothMorrisData: any;
  public areaSmoothMorrisOption: any;

  public lineAngleMorrisData: any;
  public lineAngleMorrisOption: any;

  public lineSmoothMorrisData: any;
  public lineSmoothMorrisOption: any;

  public donutMorrisData: any;
  public donutMorrisOption: any;

  constructor() { }

  ngOnInit() {
    this.barBasicMorrisData = [
      { y: '2008', a: 50, b: 40, c: 35 },
      { y: '2009', a: 75, b: 65, c: 60 },
      { y: '2010', a: 50, b: 40, c: 55 },
      { y: '2011', a: 75, b: 65, c: 85 },
      { y: '2012', a: 100, b: 90, c: 40 }
    ];
    this.barBasicMorrisOption = {
      xkey: 'y',
      barSizeRatio: 0.70,
      barGap: 3,
      resize: true,
      responsive: true,
      ykeys: ['a', 'b', 'c'],
      labels: ['Bar 1', 'Bar 2', 'Bar 3'],
      barColors: ['0-#1de9b6-#1dc4e9', '0-#899FD4-#A389D4', '#04a9f5']
    };

    this.barStackedOption = {
      xkey: 'y',
      stacked: true,
      barSizeRatio: 0.50,
      barGap: 3,
      resize: true,
      responsive: true,
      ykeys: ['a', 'b', 'c'],
      labels: ['Bar 1', 'Bar 2', 'Bar 3'],
      barColors: ['0-#1de9b6-#1dc4e9', '0-#899FD4-#A389D4', '#04a9f5']
    };

    this.areaAngleMorrisData = [
      { y: '2006', a: 0, b: 0 },
      { y: '2007', a: 130, b: 100 },
      { y: '2008', a: 80, b: 60 },
      { y: '2009', a: 70, b: 200 },
      { y: '2010', a: 220, b: 150 },
      { y: '2011', a: 105, b: 90 },
      { y: '2012', a: 250, b: 150 }
    ];
    this.areaAngleMorrisOption = {
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
      pointSize: 0,
      fillOpacity: 0.8,
      pointStrokeColors: ['#b4becb', '#A389D4'],
      behaveLikeLine: true,
      gridLineColor: '#e0e0e0',
      lineWidth: 0,
      smooth: false,
      hideHover: 'auto',
      responsive: true,
      lineColors: ['#b4becb', '#A389D4'],
      resize: true
    };

    this.areaSmoothMorrisData = [
      { period: '2010', iphone: 0, ipad: 0, itouch: 0 },
      { period: '2011', iphone: 50, ipad: 15, itouch: 5 },
      { period: '2012', iphone: 20, ipad: 50, itouch: 65 },
      { period: '2013', iphone: 60, ipad: 12, itouch: 7 },
      { period: '2014', iphone: 30, ipad: 20, itouch: 120 },
      { period: '2015', iphone: 25, ipad: 80, itouch: 40 },
      { period: '2016', iphone: 10, ipad: 10, itouch: 10 }
    ];
    this.areaSmoothMorrisOption = {
      lineColors: ['#A389D4', '#1de9b6', '#04a9f5'],
      xkey: 'period',
      ykeys: ['iphone', 'ipad', 'itouch'],
      labels: ['Site A', 'Site B', 'Site C'],
      pointSize: 0,
      lineWidth: 0,
      resize: true,
      fillOpacity: 0.9,
      responsive: true,
      behaveLikeLine: true,
      gridLineColor: '#d2d2d2',
      hideHover: 'auto'
    };

    this.lineAngleMorrisData = [
      { y: '2006', a: 20, b: 10 },
      { y: '2007', a: 55, b: 45 },
      { y: '2008', a: 45, b: 35 },
      { y: '2009', a: 75, b: 65 },
      { y: '2010', a: 50, b: 40 },
      { y: '2011', a: 75, b: 65 },
      { y: '2012', a: 100, b: 90 }
    ];
    this.lineAngleMorrisOption = {
      xkey: 'y',
      redraw: true,
      resize: true,
      smooth: false,
      ykeys: ['a', 'b'],
      hideHover: 'auto',
      responsive: true,
      labels: ['Series A', 'Series B'],
      lineColors: ['#1de9b6', '#04a9f5']
    };

    this.lineSmoothMorrisData = [
      { y: '2006', a: 100, b: 90 },
      { y: '2007', a: 75, b: 65 },
      { y: '2008', a: 50, b: 40 },
      { y: '2009', a: 75, b: 65 },
      { y: '2010', a: 50, b: 40 },
      { y: '2011', a: 75, b: 65 },
      { y: '2012', a: 100, b: 90 }
    ];

    this.lineSmoothMorrisOption = {
      xkey: 'y',
      redraw: true,
      resize: true,
      ykeys: ['a', 'b'],
      hideHover: 'auto',
      responsive: true,
      labels: ['Series A', 'Series B'],
      lineColors: ['#1de9b6', '#A389D4']
    };

    this.donutMorrisData = [
      { value: 60, label: 'Data 1' },
      { value: 20, label: 'Data 1' },
      { value: 10, label: 'Data 1' },
      { value: 5, label: 'Data 1' }
    ];

    this.donutMorrisOption = {
      colors: [
        '#1de9b6',
        '#A389D4',
        '#04a9f5',
        '#1dc4e9',
      ],
      resize: true,
      formatter: function(x) {
        return 'val : ' + x;
      }
    };
  }

}
