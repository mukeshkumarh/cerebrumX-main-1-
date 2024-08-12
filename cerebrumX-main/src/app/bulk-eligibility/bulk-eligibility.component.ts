import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  AnnotationStyle,
  ApexYAxis,
  ApexGrid,
} from 'ng-apexcharts';

export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  colors: String[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  style: AnnotationStyle;
  responsive: ApexResponsive[];
  labels: any;
};

export type StackedChartOptions = {
  series: ApexAxisChartSeries;
  colors: String[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  style: AnnotationStyle;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
  grid:ApexGrid;
};

@Component({
  selector: 'app-bulk-eligibility',
  templateUrl: './bulk-eligibility.component.html',
  styleUrls: ['./bulk-eligibility.component.css'],
})
export class BulkEligibilityComponent extends Component {
  @ViewChild('pieChart', { static: false }) pieChart!: ChartComponent;
  @ViewChild('stackedChart', { static: false }) stackedChart!: ChartComponent;
  public pieChartOptions!: Partial<PieChartOptions> | any;
  public stackedChartOptions!: Partial<StackedChartOptions> | any;
  modalRef!: BsModalRef;
  config: any = {
    backdrop: 'static',
    keyboard: false,
    class: 'modal-xl',
  };

  constructor(private modalService: BsModalService) {
    super({});
    this.pieChartOptions = {
      series: [15, 10, 50, 15, 10],
      chart: {
        width: 450,
        type: 'pie',
        offsetX:-40,
        offsetY:25
      },
      labels: ['Ford', 'Toyota', 'GM', 'Stellantis', 'Invalid VINs'],
      colors: ['#133a7c', '#eb0a1e', '#86c1e2', '#282b34', '#ee8f31'],
      fill: {
        opacity: 1,
        type: 'solid',
      },
      plotOptions : {
        pie: {
          startAngle : 200
        }
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '16',
        markers: {
          offsetY: 100,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 30,
        },
        formatter: function (val: any, opt: any) {
          return val;
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 150,
            },
            legend: {
              position: 'left',
              centerAlign: true,
            },
          },
        },
      ],
    };
    this.stackedChartOptions = {
      series: [
        {
          name: 'Eligible VINs',
          data: [10000, 2000, 20000, 20000],
        },
        {
          name: 'Ineligible Calf',
          data: [45000, 6000, 130000, 25000],
        },
        {
          name: 'In-progree VINs',
          data: [23000, 3000, 10000, 15000],
        },
      ],
      colors: ['#21bc4d', '#e80053', '#fff5cc'],
      dataLabels: {
        enabled: true,
        distributed: true,
        // offsetX: ,
        offsetY: 15,
        // formatter: function (val: any, opts: any) {
        //   return val;
        // },
        style: {
          fontSize: '12px',
          colors: ['#21bc4d', '#e80053', '#ffcd00'],
        },
        formatter: function (val: any, opts: any) {
          return opts.w.config.series[opts.seriesIndex].data[
            opts.dataPointIndex
          ];
        },
      },
      grid: {
        show: false
      },
      chart: {
        type: 'bar',
        height: 400,
        stacked: true,
        stackType: '100%',
        offsetX: -50, 
      },
      plotOptions: {
        bar: {
          horizontal: true,
          startingShape: 'flat',
          endingShape: 'flat',
          // columnWidth: '5px',
          barHeight: '20px',
        },
      },
      stroke: {
        width: 3,
        colors: ['#fff'],
        curve: 'smooth',
      },
      xaxis: {
        categories: ['Toyota', 'GM', 'Ford', 'Stellantis'],
        enabled: true,
        labels: {
          show: false,
          align: 'center',
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        formatter: function (val: any) {
          return val;
        },
      },
      yaxis: {
        show: true,
        showAlways: false,

        // offsetX: 30,
        // offsetY: 30,
        labels: {
          show: true,

          align: 'left',
          offsetX: 72,
          offsetY: -20,
          style : {
            fontSize : '14px'
          },
          formatter: function (val: any) {
            return val;
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        borderRadius: 15,
        fontSize: 14,
        offsetX:35, 
        offsetY: 10, 
        textAnchor: 'start',
        markers: {
          radius: 15,
        },
        itemMargin: {
          // horizontal: 10,
          vertical: 18,
        },
      },
    };
  }

  openModalRef(bulk_template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(bulk_template, this.config);
  }
}
