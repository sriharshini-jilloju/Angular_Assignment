import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private submittedData: any[] = [];

  addFeedback(data: any) {
    this.submittedData.push(data);
  }

  getFeedback() {
    return this.submittedData;
  }
}
