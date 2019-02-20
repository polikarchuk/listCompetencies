import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map } from "rxjs/internal/operators";

@Injectable()
export class UsersService {
  constructor(@Inject(HttpClient) private http: HttpClient) {}
  getUsers(competency_id: any, city_id: any) {
    console.log(competency_id, city_id);
    return this.http.get("https://roundlaw.com/api/v1/users").pipe(
      map((users: any[]) => {
        return users.map(user => {
          return {
            ...user
          };
        });
      })
    );
  }
}