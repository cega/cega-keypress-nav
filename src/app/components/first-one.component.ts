import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-first-one",
  templateUrl: "./first-one.component.html",
  styleUrls: ["./first-one.component.css"]
})
export class FirstOneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public keyPressed($event) {
    console.log($event);
  }
}
