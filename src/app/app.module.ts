import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { VictoryDialogComponent } from './components/victory-dialog/victory-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HttpClientModule } from "@angular/common/http";
import { FailureDialogComponent } from './components/failure-dialog/failure-dialog.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { OptionsComponent } from './components/options/options.component';
import { FaqComponent } from './components/faq/faq.component';
import { HistoryComponent } from './components/history/history.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    VictoryDialogComponent,
    FailureDialogComponent,
    KeyboardComponent,
    OptionsComponent,
    FaqComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSidenavModule,
    MatSnackBarModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
