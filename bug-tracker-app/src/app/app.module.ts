import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Components
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';

//Services
import { BugOperationsService } from './bug-tracker/services/bugOperations.service';

//Pipes
import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';
import { SortPipe } from './bug-tracker/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  	BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
