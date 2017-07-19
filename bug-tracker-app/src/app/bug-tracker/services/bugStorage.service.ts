import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugStorageService{
	storage : Storage = window.localStorage;
	currentBugId : number = 0;

	constructor(private bugOperations : BugOperationsService){

	}
	getAll() : IBug[]{
		let result : IBug[] = [];
		for(let index = 0; index < this.storage.length; index++){
			let key = this.storage.key(index);
			let rawData = this.storage.getItem(key);
			let bug = JSON.parse(rawData);
			this.currentBugId = this.currentBugId < bug.id ? bug.id : this.currentBugId;
			result.push(bug);
		}
		return result;
	}
	private save(bug : IBug) : void{
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}

	addNew(bugName : string) : IBug {
		let newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}
	toggle(bug : IBug) : IBug {
		let toggledBug = this.bugOperations.toggle(bug);
		this.save(toggledBug);
		return toggledBug;
	}
	remove(bug : IBug) : void{
		this.storage.removeItem(bug.id.toString());
	}
}