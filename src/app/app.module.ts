import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        TasksComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        TasksComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
