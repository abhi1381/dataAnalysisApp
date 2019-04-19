import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";
import { AnalysisComponent } from "./analysis/analysis.component";
import { ConclusionComponent } from "./conclusion/conclusion.component";

@NgModule({
  declarations: [AppComponent, AnalysisComponent, ConclusionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
