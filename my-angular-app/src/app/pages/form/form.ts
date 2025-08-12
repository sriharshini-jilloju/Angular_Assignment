import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FeedbackService } from '../../services/feedback.service'; // <-- Import

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class Form {
  feedbackForm: FormGroup;
  topics = ['Angular', 'Node.js', 'MongoDB', 'DevOps', 'AI'];

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [''],
      gender: ['', Validators.required],
      topics: this.fb.array([]),
      rating: ['', Validators.required],
      message: ['', Validators.required],
      consent: [false, Validators.requiredTrue]
    });
  }

  onCheckboxChange(event: any) {
    const topicsArray: FormArray = this.feedbackForm.get('topics') as FormArray;
    if (event.target.checked) {
      topicsArray.push(this.fb.control(event.target.value));
    } else {
      const index = topicsArray.controls.findIndex(x => x.value === event.target.value);
      topicsArray.removeAt(index);
    }
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log('Form submitted:', this.feedbackForm.value);
      this.feedbackService.addFeedback(this.feedbackForm.value); // Save to service
      alert('Thank you for your submission!');
      this.feedbackForm.reset();
    } else {
      alert('Please fill in all required fields correctly.');
      this.feedbackForm.markAllAsTouched();
    }
  }
}
