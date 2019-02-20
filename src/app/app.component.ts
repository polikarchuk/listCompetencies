import { Component, ElementRef, ViewChild } from "@angular/core";
import { CompetenciesService } from "./competencies.service";
import { CitiesService } from "./cities.service";
import { UsersService } from "./users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  providers: [CitiesService, CompetenciesService, UsersService]
})
export class AppComponent {
  @ViewChild('cityInput') nameInputRef: ElementRef;
  @ViewChild('CompetenciesInput') amountInputRef: ElementRef;

  cities = [];
  competencies = [];
  constructor(
    private citiesService: CitiesService,
    private competenciesService: CompetenciesService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.citiesService.getCities().subscribe(cities => {
      this.cities = cities;
    });

    this.competenciesService.getСompetencies().subscribe(competencies => {
      this.competencies = competencies;
    });
  }

  onSelect() {
    const
      city = this.nameInputRef.nativeElement.value,
      competence = this.amountInputRef.nativeElement.value
    ;
    // this.usersService.getUsers(city, competence).subscribe(users => {
    //   this.users = users;
    // });
  }
}
