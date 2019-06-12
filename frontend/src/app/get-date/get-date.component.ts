import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-date',
  templateUrl: './get-date.component.html',
  styleUrls: ['./get-date.component.css']
})
export class GetDateComponent implements OnInit {

  date: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    let parsedDate: string = this.date.replace(/\-/g, '');
    this.router.navigate([parsedDate], {relativeTo: this.route})
  }
}
