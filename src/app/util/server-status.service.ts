import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerStatusService {

    constructor(private http: Http) { }

    public isServerUp(): boolean {
        // return true;
        let status: String = '';
        this.http.get('http://localhost:8080/health').subscribe(response => {
            status = response['status'].toString();
        });
        if (status === 'UP') {
            return true;
        }
        return false;
    }
}
