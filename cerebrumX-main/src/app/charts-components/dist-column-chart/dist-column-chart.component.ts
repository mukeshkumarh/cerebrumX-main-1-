import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexLegend,
  ChartComponent,
  ApexPlotOptions,
  ApexGrid,
  ApexYAxis,
} from 'ng-apexcharts';

type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-dist-column-chart',
  templateUrl: './dist-column-chart.component.html',
  styleUrls: ['./dist-column-chart.component.css'],
})
export class DistColumnChartComponent {
  @Input() chartData: any;
  @ViewChild('chart') chart!: ChartComponent;
  public ChartOptions!: Partial<ChartOptions> | any;
  constructor() {}
  ngOnInit(): void {
    console.log('this.chartData', this.chartData);

    this.ChartOptions = {
      series: [
        {
          name: 'fuel',
          data: this.chartData?.data || [],
        },
        // {
        //   name: '',
        //   data: [12, 270, 10, 22],
        // },
      ],

      chart: {
        toolbar:false,
        height: this.chartData?.height || 400,
        type: 'bar',
        stacked: true,
        events: {
          click: function (chart: any, w: any, e: any) {
            // console.log(chart, w, e)// console.log(
          },
        },
      },
      colors: this.chartData.colors,
      plotOptions: {
        bar: {
          // barHeight: '70%',
          borderRadius: 30,

          borderRadiusApplication: 'around',
          columnWidth: '30%',
          distributed: true,
          startingShape: 'rounded',
          endingShape: 'rounded',
          dataLabels: {
            position: 'top',
          },

          colors: {
            backgroundBarRadius: 9,

            backgroundBarColors: ['#eee'],
            backgroundBarOpacity: 0,
            
          },
        },
      },
      dataLabels: {
        enabled: this.chartData.axisLabel,
        style: {
          colors: ['#6C757E'],
          fontSize: '14',
          fontWeight: '100',
        },
        offsetY: -30,
        formatter: function (val: any, opt: any) {
          return val;
        },
      },
      labels: [
        'Stellantis',
        'Ford',
        'Toyota',
        'FordPro',
        'FordPro',
        'FordPro',
        'FordPro',
      ],
      legend: {
        show:this.chartData.legend.show,
        position: 'bottom',
        horizontalAlign: 'left',
        fontSize: '14',
        markers: {
          radius: 12,
          width: 8,
          height: 8,
          offsetY: 100,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 13,
        },
        formatter: function (val: any, opt: any) {
          console.log("dist chart",val,opt)
          return val + '</br>' + '<b style="font-size:20px; margin-left:15px">'+ opt.w.config.series[0]["data"][opt.seriesIndex] + '%' +'</b>';
        },
      },
      grid: {
        show: this.chartData?.grid || false, // you can either change hear to disable all grids
        borderColor:'#ebebeb',
        strokeDashArray:2, 
        xaxis: {
        
          lines: {
            show: false, //or just here to disable only x axis grids
          },
          // title:{
          //   text:"Months"
          // }
        },
        yaxis: {
          
          lines: {
            show: this.chartData?.grid || false, //or just here to disable only y axis
          },
        },
      },
      xaxis: {
        
        title: {
          text: this.chartData?.xaxisTitle || '',
        },
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: this.chartData.categories,
        labels: {
          show: this.chartData.axisLabel,
          style: {
            fontSize: '10px',
          },
        },
      },
      yaxis: {
        labels:{
          style:{
            fontSize:'10px',
            fontWeight:900
          }
        },
        title: {
          text: this.chartData?.yaxisTitle || '',
        },
        min: this.chartData.min,
        max: this.chartData.max,
        tickAmount: this.chartData.tickAmount,
      },
    };
 
 
 
    
    
   
    
 
  }

}
