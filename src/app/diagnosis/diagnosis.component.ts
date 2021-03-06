import { Component, OnInit, ViewChild } from '@angular/core';
import {sys_dia} from '../../assets/json/sys_dia';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import { Location } from '@angular/common';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
// export class DiagnosisComponent implements OnInit {

//   bpjson = sys_dia;

//   constructor() { }

//   public barChartOptions = {
//     scaleShowVerticalLines: false,
//     responsive: true
//   };

//   public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
//   public barChartType = 'bar';
//   public barChartLegend = true;
//   public barChartData = [
//     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
//     {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
//     {data: this.bpjson.map(a => a.year), label: 'Series C'}
//   ];
  
//   ngOnInit() {
//   }
// }

export class DiagnosisComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: sys_dia.map(a => a.systolic), label: 'Sys' },
    { data: sys_dia.map(a => a.diastolic), label: 'Dia' },
    // { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  ];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  public lineChartLabels: Label[] = sys_dia.map((a, idx) => { return this.weekDays[idx%7]; } ).slice(0, 50);

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        },
        // {
        //   id: 'y-axis-1',
        //   position: 'right',
        //   gridLines: {
        //     color: 'rgba(255,0,0,0.3)',
        //   },
        //   ticks: {
        //     fontColor: 'red',
        //   }
        // }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: '1981',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor:      'rgba(0,0,255,0.2)',
      borderColor:          'rgba(0,0,255,1)',
      pointBackgroundColor: 'rgba(0,0,255,1)',
      pointBorderColor:     '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor:'rgba(255,0,0,0.8)'
    },
    { // dark grey
      backgroundColor:      'rgba(0,0,140,0.2)',
      borderColor:          'rgba(0,0,140,1)',
      pointBackgroundColor: 'rgba(0,0,140,1)',
      pointBorderColor:     '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor:'rgba(255,0,0,1)'
    },
    // { // red
    //   backgroundColor: 'rgba(255,0,0,0.3)',
    //   borderColor: 'red',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(public location: Location ) { 
    document.title= "Diagnosis";
  }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}