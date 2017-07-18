import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew (newBugName : string) : IBug {
		let newBug : IBug = {
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		return newBug;
	}
	toggle(bug : IBug) : void {
		bug.isClosed = !bug.isClosed;
	}
}