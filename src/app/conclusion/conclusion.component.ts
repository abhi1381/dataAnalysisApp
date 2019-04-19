import { Component, OnInit } from "@angular/core";
import { ChartService } from "../chart.service";

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Color} from 'ng2-charts';




@Component({
  selector: "app-conclusion",
  templateUrl: "./conclusion.component.html",
  styleUrls: ["./conclusion.component.scss"]
})


export class ConclusionComponent implements OnInit {
  // Bar Chart
  title:string = "Bar Chart";
  stats;
  LabelChart: Label[] = [];
  LabelData: ChartDataSets[] = [{data:[],label: 'Batting_Score'},{data:[],label:'Result_margin'}]; 

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = this.LabelChart;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = this.LabelData;
 
  // Line Chart
  lineLabel:Label[] = [];
  lineData: ChartDataSets[] = [{data: [],label: 'match_result'}];

  public lineChartData: ChartDataSets[] = this.lineData;
  public lineChartLabels: Label[] = this.lineLabel;
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#0066ff',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private chart: ChartService) {}

  ngOnInit() {
    this.chart.getData().subscribe(data => {
      this.stats = data;
      this.stats.forEach(match => {
        // Bar Chart
        this.LabelChart.push(match.date);
        this.LabelData[0].data.push(match.batting_score);
        let newMatch = match.result_margin.replace(/ runs/g,''); 
        this.LabelData[1].data.push(newMatch);
        // Line Chart
        this.lineLabel.push(match.opposition);
        if(match.match_result == 'won') {
          let newResultWon = match.match_result.replace('won',1);
          console.log(newResultWon);
          this.lineData[0].data.push(newResultWon);
        } else if(match.match_result == 'lost'){
          let newResultLost = match.match_result.replace('lost',0);
          console.log(newResultLost);
          this.lineData[0].data.push(newResultLost);
        } else if(match.match_result == 'tied') {
          let newResultTied = match.match_result.replace('tied',2);
          console.log(newResultTied);
          this.lineData[0].data.push(newResultTied);
        } else {
          let newResultNr = match.match_result.replace('n/r',3);
          console.log(newResultNr);
          this.lineData[0].data.push(newResultNr);
        }    
      });
    });
  }

}
