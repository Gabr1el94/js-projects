import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {

    this.courses = [
          {
            id:1,
            name:"Angular Forma",
            imgURL: "/assets/images/forms.png",
            price: 99.90,
            code:"XPS-87",
            duration: 120,
            rating: 5.4,
            releaseDate:'December, 2, 2019'
        },
        {
          id:2,
          name:"Angular HTTP",
          imgURL: "/assets/images/http.png",
          price: 45.99,
          code:"UKL-1094",
          duration: 80,
          rating: 4,
          releaseDate:'November, 4, 2019'
      }
    ]

  }
  
}
