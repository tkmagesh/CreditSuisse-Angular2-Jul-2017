
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugServerService{
	private baseUrl:string = `http://localhost:3000/bugs/`;

	constructor(private http : Http, private bugOperations : BugOperationsService){

	}
	getAll() : Observable<IBug[]>{
		return this.http
			.get(this.baseUrl)
			.map(response => response.json());
	}

	addNew(bugName : string) : Observable<IBug>{
		var newBugData = this.bugOperations.createNew(0, bugName);
		return this.http
			.post(this.baseUrl, newBugData)
			.map(response => response.json())

	}

	toggle(bug : IBug) : Observable<IBug>{
		let toggledBug = this.bugOperations.toggle(bug);
		return this.http
			.put(`${this.baseUrl}/${toggledBug.id}`, toggledBug)
			.map(response => response.json());
	}
}