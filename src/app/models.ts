export class Book {
    title: String;
    subtitle: String;
    authors: String;
    pageCount: String;
    publishedDate: String;
    selfLink: String;

    // thumbnail

    constructor(title: String,
        subtitle: String,
        authors: String,
        pageCount: String,
        publishedDate: String,
        selfLink: String) {
        this.title = title;
        this.subtitle = subtitle;
        this.authors = authors;
        this.pageCount = pageCount;
        this.publishedDate = publishedDate;
        this.selfLink = selfLink;
    }
}

export class Position {
    page: number;
    constructor(page: number) {
        this.page = page;
    }
}
export class Segment {
    start: Date;
    end: Date;
    start_position: Position;
    end_position: Position;

    constructor(start: Date, start_position: Position) {
        this.start = start;
        this.start_position = start_position;
    }
}
export class Session {
    book: String;
    segments: Segment[] = [];

    constructor(book_id: String) {
        this.book = book_id; 
    }
}