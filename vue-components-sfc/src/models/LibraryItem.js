function LibraryItem(media) {
    // add library functionality to the book/movie
    // by "decorating" it using a factory

    // set the default status
    media.status = 'in';

    // methods
    media.checkIn = function () {
        this.status = 'in';
    }

    media.checkOut = function () {
        this.status = 'out';
    }

    media.isAvailable = function () {
        return this.status === 'in';
    }

    // return the decorated object
    return media;
}

export default LibraryItem;