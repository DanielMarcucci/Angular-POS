import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {
  posForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.posForm = this.formBuilder.group({

    });
  }

  ngOnInit() {
    
  }

}
