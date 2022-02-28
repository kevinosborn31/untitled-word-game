import {Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TimeSpan } from 'src/app/models/watch.interface';
import { BoardStateService } from 'src/app/services/board-state.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-failure-dialog',
  templateUrl: './failure-dialog.component.html',
  styleUrls: ['./failure-dialog.component.scss']
})

export class FailureDialogComponent implements OnInit {
  secretWord: string = "";
  timeSpent: string = "";
  previousGuesses: [];

  constructor(
    private timerService: TimerService,
    public dialogRef: MatDialogRef<FailureDialogComponent>,
    private boardStateService: BoardStateService
  ) {}

  ngOnInit(): void {
    this.boardStateService.boardState.subscribe(boardState => {
      if (!boardState) return;

      this.timeSpent = this.timerService.getClockTime();
      this.secretWord = boardState.secretWord;
    });
  }

  public resetBoard(): void {
    this.dialogRef.close(true);
  }

  public copyResults(): void {
    const copiedText = `My secret word was ${this.secretWord} My guesses were: ${this.previousGuesses}`;
    alert(`Copied text: ${copiedText}`)
    navigator.clipboard.writeText(copiedText);
  }

}
