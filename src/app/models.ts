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

