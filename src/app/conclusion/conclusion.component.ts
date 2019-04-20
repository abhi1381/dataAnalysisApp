import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { ChartService } from "../chart.service";

import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { Color } from "ng2-charts";
@Component({
  selector: "app-conclusion",
  templateUrl: "./conclusion.component.html",
  styleUrls: ["./conclusion.component.scss"]
})
export class ConclusionComponent implements OnInit {
  // Bar Chart
  title: string = "Bar Chart";
  stats;
  LabelChart: Label[] = [];
  LabelData: ChartDataSets[] = [
    { data: [], label: "Batting_Score" },
    { data: [], label: "Result_margin" }
  ];

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  public barChartLabels: Label[] = this.LabelChart;
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = this.LabelData;

  // Line Chart
  lineLabel: Label[] = [];
  lineData: ChartDataSets[] = [{ data: [], label: "match_result" }];

  public lineChartData: ChartDataSets[] = this.lineData;
  public lineChartLabels: Label[] = this.lineLabel;
  public lineChartOptions: ChartOptions = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: "black",
      backgroundColor: "yellow"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [];

  //Bar Chart 2
  barLabel1: Label[] = [];
  barData1: ChartDataSets[] = [
    { data: [], label: "Wickets" },
    { data: [], label: "runs_conceded" }
  ];

  public barChartOptions1: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] }
  };

  public barChartLabels1: Label[] = this.barLabel1;
  public barChartType1: ChartType = "bar";
  public barChartLegend1 = true;
  public barChartData1: ChartDataSets[] = this.barData1;

  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType1 = this.barChartType1 === "bar" ? "line" : "bar";
  }

  constructor(private chart: ChartService, private dialog: MatDialog) {}

  ngOnInit() {
    let plotrangeX: number, plotrangeY: number;
    setTimeout(() => {
      plotrangeX = Number(
        prompt("Enter the Sarting range of Plot(any Number from 0 to 463)")
      );
      plotrangeY = Number(
        prompt("Enter the Ending range of Plot(any number from 0 to 463)")
      );
      this.chart.getData().subscribe(data => {
        this.stats = data;
        this.stats = this.stats.slice(plotrangeX, plotrangeY);
        this.stats.forEach(match => {
          try {
            // Bar Chart
            this.LabelChart.push(match.date);
            let bs: any = this.LabelData[0].data;
            bs.push(match.batting_score);
            let newMatch = match.result_margin.replace(/ runs/g, "");
            let new1: any = this.LabelData[1].data;
            new1.push(newMatch);

            // Line Chart
            this.lineLabel.push(match.opposition);
            if (match.match_result == "won") {
              let newResultWon = match.match_result.replace("won", 1);
              // console.log(newResultWon);
              let newRes: any = this.lineData[0].data;
              newRes.push(newResultWon);
            } else if (match.match_result == "lost") {
              let newResultLost = match.match_result.replace("lost", 0);
              // console.log(newResultLost);
              let newLos: any = this.lineData[0].data;
              newLos.push(newResultLost);
            } else if (match.match_result == "tied") {
              let newResultTied = match.match_result.replace("tied", 2);
              // console.log(newResultTied);
              let newTie: any = this.lineData[0].data;
              newTie.push(newResultTied);
            } else {
              let newResultNr = match.match_result.replace("n/r", 3);
              // console.log(newResultNr);
              let newNr: any = this.lineData[0].data;
              newNr.push(newResultNr);
            }

            // Bar Chart 2

            this.barLabel1.push(match.ground);
            let wick: any = this.barData1[0].data;
            wick.push(match.wickets);
            let rc: any = this.barData1[1].data;
            rc.push(match.runs_conceded);
          } catch (e) {
            console.log(e);
          }

          // console.log(this.barData1,this.barLabel1);
        });
      });
    }, 3000);
  }
}
