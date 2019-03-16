import { Component, OnInit } from '@angular/core';
import { Session, Position, Segment, Book } from '../models';

@Component({
  selector: 'app-study-session',
  templateUrl: './study-session.component.html',
  styleUrls: ['./study-session.component.css']
})
export class StudySessionComponent implements OnInit {

  constructor() { }

  book: Book;
  session: Session;
  duration: Date;

  ngOnInit() {
  }

  start_session(page: number) {
    this.session = new Session('somebook');
    this.create_segment(new Position(page));
    this.duration = new Date(0);
  }

  pause_session() {
    this.session.segments[0].end = new Date()
  }

  resume_session() {
    this.create_segment(this.session.segments[0].end_position)
  }

  create_segment(pos: Position) {
    this.session.segments.unshift(new Segment(new Date(), pos));
  }

  calculate_duration() {
    const difference = this.session.segments.map(seg => {
      return (seg.end || new Date()).getTime() - seg.start.getTime()
    }).reduce((a,b) => a+b)
    this.duration = new Date(difference)
  }
}
