import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Components
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';

//Services
import { BugOperationsService } from './bug-tracker/services/bugOperations.service';
import { BugStorageService } from './bug-tracker/services/bugStorage.service';

//Pipes
import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';
import { SortPipe } from './bug-tracker/pipes/sort.pipe';
import { ElapsedPipe } from './bug-tracker/pipes/elapsed.pipe';
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    SortPipe,
    ElapsedPipe,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  	BugOperationsService,
    BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
