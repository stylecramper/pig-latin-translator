import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pig-latin-translator',
  templateUrl: './pig-latin-translator.component.html',
  styleUrls: ['./pig-latin-translator.component.css']
})
export class PigLatinTranslatorComponent implements OnInit {
  pigLatinForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.pigLatinForm = this.fb.group({
      piglatin: ['']
    });
  }

}
