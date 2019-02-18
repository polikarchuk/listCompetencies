
import { HttpClient } from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {map} from "rxjs/internal/operators";



@Injectable()
export class CitiesService{
    constructor(@Inject(HttpClient) private http: HttpClient){}
    getCities(){
        return this.http.get("https://roundlaw.com/api/v1/places/cities").pipe(

            map(cities => {
                return cities.map(city=>{
                    return{
                        name:city.name,
                        country:city.country

                    }

                })

            })


        )
    }


}
