import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', // Es el nombre del componente para ser invocado en otras vistas.
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
