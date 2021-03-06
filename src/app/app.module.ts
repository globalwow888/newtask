import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { ProjectModule } from "./project/project.module";
import { TaskModule } from "./task/task.module";
import { LoginModule } from "./login/login.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    LoginModule,
    ProjectModule,
    CoreModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
