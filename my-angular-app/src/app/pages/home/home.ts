import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  feedbackList: any[] = [];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.feedbackList = this.feedbackService.getFeedback();
  }
}
