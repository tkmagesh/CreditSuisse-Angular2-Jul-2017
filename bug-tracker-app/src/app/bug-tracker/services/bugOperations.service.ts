import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew (id : number, newBugName : string) : IBug {
		let newBug : IBug = {
			id : id,
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		return newBug;
	}
	toggle(bug : IBug) : IBug {
		return {...bug, isClosed : !bug.isClosed};
	}
}