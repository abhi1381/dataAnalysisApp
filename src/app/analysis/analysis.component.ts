import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { DataService, CricketData } from "../data.service";
// import {ELEMENT_DATA} from '../data.service';



@Component({
  selector: "app-analysis",
  templateUrl: "./analysis.component.html",
  styleUrls: ["./analysis.component.scss"]
})
export class AnalysisComponent implements OnInit {
  LocalData;
  dataSource;
  filteredData: number[];
  displayedColumns: string[] = [
    "batting_score",
    "wickets",
    "runs_conceded",
    "catches",
    "stumps",
    "opposition",
    "ground",
    "date",
    "match_result",
    "result_margin",
    "toss",
    "batting_innings"
  ];

  


  
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getData().subscribe(data => {
      this.LocalData = data;
      this.dataSource = new MatTableDataSource(this.LocalData);
      this.filteredData = this.dataSource.filteredData.length;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

}
