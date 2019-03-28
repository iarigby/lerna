import { Item, Book, Resource, Session, Library, Position } from "./models";

export const item = new Item("01", "someitem", "book")
export const book1 = new Book("02", "book1", "subtitle", "authors", "pageCount", "publishedDate", "selfLink")
export const book2 = new Book("03", "book2", "subtitle", "authors", "pageCount", "publishedDate", "selfLink")
export const book1session1 = new Session("book1")
export const book1resource: Resource = {
    item: book1,
    sessions: [{
        book: 'book1',
        segments: [{
            start: new Date(),
            end: new Date(),
            start_position: new Position(13),
            end_position: new Position(14)
        }]
    }]
}
export const book2resource: Resource = {
    item: book2,
    sessions: []
}
export const library: Library = {
    resources: [book1resource, book2resource]
}