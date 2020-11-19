import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  course!: Course;

  constructor(private route:  ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.course  = this.courseService.retrieveById(Number(this.route.snapshot.paramMap.get('id')));
    console.log(this.course);
  }

  save():void{
    this.courseService.save(this.course);
  }
}
