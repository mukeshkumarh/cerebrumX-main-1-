import { Component, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexAnnotations,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
  stroke: ApexStroke;
  annotations: ApexAnnotations;
};
export interface chartValue {
  name: string;
  series: string[];
  colors: string[];
  nameColor: string;
  valueColor: string;
}
@Component({
  selector: 'app-vehicle-summary',
  templateUrl: './vehicle-summary.component.html',
  styleUrls: ['./vehicle-summary.component.css'],
})
export class VehicleSummaryComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public enrolledVehiclechartOptions!: Partial<ChartOptions> | any;
  public activatedVehiclechartOptions!: Partial<ChartOptions> | any;
  public deactivatedVehiclechartOptions!: Partial<ChartOptions> | any;
  public failedRequestschartOptions!: Partial<ChartOptions> | any;
  enrolledVehicle: chartValue = {
    name: 'enrolledVehicle',
    series: ['+10.21'],
    colors: ['#2CA87F'],
    nameColor: '#6C757E',
    valueColor: '#2CA87F',
  };
  activatedVehicle: chartValue = {
    name: 'activatedVehicle',
    series: ['+9.32'],
    colors: ['#FA751A'],
    nameColor: '#6C757E',
    valueColor: '#2CA87F',
  };
  deactivatedVehicle: chartValue = {
    name: 'deactivatedVehicle',
    series: ['+3.21'],
    colors: ['#FF0000'],
    nameColor: '#6C757E',
    valueColor: '#FF0000',
  };
  failedRequests: chartValue = {
    name: 'failedRequests',
    series: ['+4.73'],
    colors: ['#FF0000'],
    nameColor: '#6C757E',
    valueColor: '#FF0000',
  };
  charts = [
    [this.enrolledVehicle, this.enrolledVehiclechartOptions],
    [this.activatedVehicle, this.activatedVehiclechartOptions],
    [this.deactivatedVehicle, this.deactivatedVehiclechartOptions],
    [this.failedRequests, this.failedRequestschartOptions],
  ];

  constructor() {
    // this.charts.forEach(function(chart) {
    //   console.log(chart)
    //   chart[1]={
    //     series: chart[0].series,
    //     chart: {
    //       type: 'radialBar',
    //       offsetY: -25,
    //       height: 220, // Set the height of the chart
    //       width: 200,
    //     },
    //     colors: chart[0].colors,

    //     plotOptions: {
    //       radialBar: {
    //         hollow: {
    //           margin: 15,
    //           size: '75%',
    //         },

    //         startAngle: -90,
    //         endAngle: 90,
    //         track: {
    //           background: '#E7EAEE',

    //           // margin: 5, // margin is in pixels
    //           dropShadow: {
    //             enabled: true,
    //             top: 2,
    //             left: 0,
    //             opacity: 0.31,
    //             blur: 2,
    //           },
    //         },
    //         dataLabels: {
    //           name: {
    //             color: chart[0].nameColor,
    //             show: true,
    //             fontSize: '12px',
    //           },
    //           value: {
    //             color: chart[0].valueColor,
    //             offsetY: -38,
    //             fontSize: '18px',
    //           },
    //         },
    //       },
    //     },
    //     fill: {
    //       type: 'gradient',
    //       gradient: {
    //         shade: 'light',
    //         shadeIntensity: 0.4,
    //         inverseColors: false,
    //         opacityFrom: 1,
    //         opacityTo: 1,
    //         stops: [0, 50, 53, 91],
    //       },
    //     },
    //     stroke: {
    //       lineCap: 'round', // Ensure that lineCap is set to 'round' for smoother edges
    //     },
    //     labels: ['From Last Month'],
    //   };
    // });
    this.enrolledVehiclechartOptions = {
      id: 'chart1',
      series: this.enrolledVehicle.series,
      chart: {
        type: 'radialBar',
        offsetY: -25,
        height: 220, // Set the height of the chart
        width: 200,
      },
      colors: this.enrolledVehicle.colors,

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: '75%',
          },

          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#E7EAEE',

            // margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              color: this.enrolledVehicle.nameColor,
              show: true,
              fontSize: '12px',
            },
            value: {
              color: this.enrolledVehicle.valueColor,
              offsetY: -38,
              fontSize: '18px',
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      stroke: {
        lineCap: 'round', // Ensure that lineCap is set to 'round' for smoother edges
      },
      labels: ['From Last Month'],
    };
    this.activatedVehiclechartOptions = {
      series: this.activatedVehicle.series,
      chart: {
        type: 'radialBar',
        offsetY: -25,
        height: 220, // Set the height of the chart
        width: 200,
      },
      colors: this.activatedVehicle.colors,

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: '75%',
          },

          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#E7EAEE',

            // margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              color: this.activatedVehicle.nameColor,
              show: true,
              fontSize: '12px',
            },
            value: {
              color: this.activatedVehicle.valueColor,
              offsetY: -38,
              fontSize: '18px',
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      stroke: {
        lineCap: 'round', // Ensure that lineCap is set to 'round' for smoother edges
      },
      labels: ['From Last Month'],
    };
    this.deactivatedVehiclechartOptions = {
      series: this.deactivatedVehicle.series,
      chart: {
        type: 'radialBar',
        offsetY: -25,
        height: 220, // Set the height of the chart
        width: 200,
      },
      colors: this.activatedVehicle.colors,

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: '75%',
          },

          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#E7EAEE',

            // margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              color: this.deactivatedVehicle.nameColor,
              show: true,
              fontSize: '12px',
            },
            value: {
              color: this.deactivatedVehicle.valueColor,
              offsetY: -38,
              fontSize: '18px',
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      stroke: {
        lineCap: 'round', // Ensure that lineCap is set to 'round' for smoother edges
      },
      labels: ['From Last Month'],
    };
    this.failedRequestschartOptions = {
      series: this.failedRequests.series,
      chart: {
        type: 'radialBar',
        offsetY: -25,
        height: 220, // Set the height of the chart
        width: 200,
      },
      colors: this.failedRequests.colors,

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: '75%',
          },

          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#E7EAEE',

            // margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              color: this.failedRequests.nameColor,
              show: true,
              fontSize: '12px',
            },
            value: {
              color: this.failedRequests.valueColor,
              offsetY: -38,
              fontSize: '18px',
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      stroke: {
        lineCap: 'round', // Ensure that lineCap is set to 'round' for smoother edges
      },
      labels: ['From Last Month'],
    };
  }
  changeChartColor() {
    this.enrolledVehiclechartOptions.colors = ['#FF000'];
  }

  onChartMouseEnter(
    e: any,
    chart: any,
    chartInstance: any,
    chartId: any
  ): void {
    // console.log(
    //   chartInstance,
    //   chartId,
    //   chartInstance.colors,
    //   chartInstance.plotOptions.radialBar.dataLabels.name.color,
    //   chartInstance.plotOptions.radialBar.dataLabels.value.color
    // );
    chartInstance.colors = ['#FFFFFF'];
    // chartInstance.plotOptions.radialBar.dataLabels.name.color = '#FFFFFF';
    // chartInstance.plotOptions.radialBar.dataLabels.value.color = '#FFFFFF';
  }

  onChartMouseLeave(
    e: any,
    chart: any,
    chartInstance: any,
    chartId: any
  ): void {
    console.log(chartInstance, chartId,this.enrolledVehicle.colors);
    if (chartId == 'enrolledVehiclechartOptions') {
      chartInstance.colors = this.enrolledVehicle.colors;
      // chartInstance.plotOptions.radialBar.dataLabels.name.color =
      //   this.enrolledVehicle.nameColor;
      // chartInstance.plotOptions.radialBar.dataLabels.value.color =
      //   this.enrolledVehicle.valueColor;
      
    }
  }

  ngOnInit() {}
}
