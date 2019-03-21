
export class Item {
    title: String;
    type: String;
    constructor(title: String, type: String) {
        this.title = title;
        this.type = type;
    }
}

export class Book extends Item {
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
        super(title, 'book');
        this.subtitle = subtitle;
        this.authors = authors;
        this.pageCount = pageCount;
        this.publishedDate = publishedDate;
        this.selfLink = selfLink;
    }
}

export class Position {
    type: string;
    index: number;
    constructor(index: number) {
        this.index = index;
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
        this.end_position = start_position;
    }
}
export class Session {
    book: String;
    segments: Segment[];

    constructor(book_id: String) {
        this.book = book_id; 
        this.segments = [];
    }
}

export class Resource {
    item: Item;
    sessions: Session[];
    
    constructor(item: Item) {
        this.sessions = [];
    }
}

export class User {
    name: string;
}

export class Library {
    resources: Resource[];
}