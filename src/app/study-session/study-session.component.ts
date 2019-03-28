import { Component, OnInit } from '@angular/core';
import { Session, Position, Segment, Book, Resource } from '../models';
import { book1 } from '../models.samples';

@Component({
  selector: 'app-study-session',
  templateUrl: './study-session.component.html',
  styleUrls: ['./study-session.component.css']
})
export class StudySessionComponent implements OnInit {

  constructor() { }

  session: Session;
  total_time: Date;
  duration: Date;
  breaks_count: number;
  breaks_duration: Date;
  resource: Resource;
  ngOnInit() {
  }

  start_session(page: number) {
    this.session = new Session('somebook');
    this.resource = new Resource(book1);
    this.create_segment(new Position(page));
    this.duration = new Date(0);
  }

  pause_session() {
    this.session.segments[0].end = new Date()
    // this.session.segments[0].end_position = 
  }

  resume_session() {
    this.calculate_breaks()
    this.create_segment(this.session.segments[0].end_position)
  }

  create_segment(pos: Position) {
    // using unshift so that the latest segment is the first one
    // and can easily be accessed with [0]
    this.session.segments.unshift(new Segment(new Date(), pos));
    // TODO have manualy way of adding sessions or segments
    // will select day for the session
    // for segments just write time, start page, end page
  }

  refresh() {
    if (this.isStudying()) {
      this.calculate_duration();
    } else {
      this.calculate_breaks();
    }

  }
  calculate_breaks() {
    this.breaks_count = this.session.segments.length;
    const diff = (this.session.segments[0].end || new Date()).getTime() - this.session.segments[this.session.segments.length - 1].start.getTime();
    this.total_time = new Date(diff)
    this.breaks_duration = new Date(this.total_time.getTime() - this.duration.getTime())
  }
  calculate_duration() {
    const difference = this.session.segments.map(seg => {
      return (seg.end || new Date()).getTime() - seg.start.getTime()
    }).reduce((a, b) => a + b) // because .sum is too much to ask from a language
    // TODO for some reason the initial difference is 1 hour
    this.duration = new Date(difference)
  }

  isStudying() {
    return this.session.segments[0].end == null;
  }

  finishSession() {
    if (this.isStudying()) {
      this.pause_session()
    }
    this.resource.sessions.push(this.session)
    this.session = null;
    console.log(this.resource.sessions)
  }

  increasePosition() {
    this.session.segments[0].end_position.index++;
  }
}
