import { Component } from "@angular/core";
import { CompetenciesService } from "./competencies.service";
import { CitiesService } from "./cities.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  providers: [CitiesService, CompetenciesService]
})
export class AppComponent {
  cities = [];
  competencies = [];
  constructor(
    private citiesService: CitiesService,
    private competenciesService: CompetenciesService
  ) {}

  ngOnInit() {
    this.citiesService.getCities().subscribe(cities => {
      this.cities = cities;
    });

    this.competenciesService.getСompetencies().subscribe(competencies => {
      this.competencies = competencies;
    });
  }
}
