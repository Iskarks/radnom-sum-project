import { Book } from './types/book';
import { LibraryBook } from './types/library';

const book1: Book = {
    title: 'Маленький принц',
    author: 'Антуан де Сент-Экзюпери',
    year: 1943
};

const book2: Book = {
    title: '1984',
    author: 'Джордж Оруэлл',
    year: 1949
};

const bookOne = new LibraryBook(book1);
const bookTwo = new LibraryBook(book2);

bookOne.borrow('Дмитрий');
bookTwo.borrow('Анна');
