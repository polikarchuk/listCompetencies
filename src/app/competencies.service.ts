import { HttpClient } from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {map} from 'rxjs/internal/operators';




@Injectable()
export class CompetenciesService{
    constructor(@Inject(HttpClient) private http: HttpClient){}
    getСompetencies(){
        return this.http.get("https://roundlaw.com/api/v1/competencies").pipe(

            map((competencies:any[]) => {
                return competencies.map(competence=>{
                    return{
                        name: competence.name,
                    };

                });

            })




        );
    }


}
