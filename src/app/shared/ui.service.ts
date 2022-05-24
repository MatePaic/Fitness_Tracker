import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class UIService {

  constructor(private snackbar: MatSnackBar) { }

  showSnackBar(message: string, action: any, duration: number) {
    this.snackbar.open(message, action, {
      duration: duration
    });
  }
}
