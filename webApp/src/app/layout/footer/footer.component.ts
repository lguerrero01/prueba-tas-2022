import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  // ======================================
  //			Atributes
  // ======================================
  public year = new Date().getFullYear();
  // ======================================
  //			Constructor
  // ======================================
  constructor() {}

  ngOnInit(): void {}
}
