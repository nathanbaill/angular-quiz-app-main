import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private router: Router) {}

	get isAuthenticated(): boolean {
		return !!localStorage.getItem('token');
	}

    register(credentias: any) {
        this.http.post(environment.apiUrl+'/api/account', credentias, {responseType: 'text'}).subscribe(res => {
            this.authenticate(res);
        });
    }

    login(credentias: any) {
		this.http.post(environment.apiUrl+'/api/account/login', credentias, {responseType: 'text'}).subscribe(res => {
			this.authenticate(res);
		});
    }

	authenticate(token: string) {
		localStorage.setItem('token', token);
		this.router.navigate(['/']);
	}

	logout() {
		localStorage.removeItem('token');
		this.router.navigate(['/']);
	}
}
