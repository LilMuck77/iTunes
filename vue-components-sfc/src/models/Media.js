function Book(title, pages){
    this.title = title ?? '';
    this.pages = pages ?? 0;
}
Book.type = 'Book';

class Movie{
    static type = 'Movie';

    constructor(title, runtime) {
        // additional properties
        this.title = title ?? ''
        this.runtime = runtime ?? 0;
    }
}

export {Book, Movie};