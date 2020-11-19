import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  // selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  _filterBy: string = '';

  filteredCourse: Course[] = [];

  _courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourse = this._courses;
  }

  set filter(value:string){
    this._filterBy = value;
    this.filteredCourse = this._courses.filter((course :Course) => course.name.toLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }
  
}
