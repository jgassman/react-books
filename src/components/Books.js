import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, FormControlLabel, Grid, Hidden, Switch, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    bookBox: {
        backgroundColor: '#f6f6f6',
        width: '100%',
        height: '100%',
        color: '#000000',
    },
    bookCover: {
        maxHeight: '150px',
    },
    imgContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const sortBooks = (bookList) => {
    return bookList.sort((bookA, bookB) => {
        return bookA.title.toLowerCase() > bookB.title.toLowerCase() ? 1 : -1;
    });
};

const BookCover = ({ book }) => {
    const classes = useStyles();

    return (
        <Grid container item xs={4} sm={2} md={1}>
            <a href={'/#/books/' + book.id} style={{ textDecoration: 'none' }}>
                <Grid item xs={12} className={classes.imgContainer}>
                    <img src={book.imgURL} className={classes.bookCover} alt="" />
                </Grid>
            </a>
        </Grid>
    );
};

const BookDetail = ({ book }) => {
    const classes = useStyles();

    return (
        <Grid item xs={4} sm={2} md={6}>
            <a href={'/#/books/' + book.id} style={{ textDecoration: 'none' }}>
                <Card className={classes.bookBox}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3} className={classes.imgContainer}>
                            <img src={book.imgURL} className={classes.bookCover} alt="" />
                        </Grid>
                        <Hidden only={['xs', 'sm']}>
                            <Grid item container md={9}>
                                <Grid item xs={12}>
                                    <h3>{book.title}</h3>
                                </Grid>
                                <Grid item xs={6}>
                                    <p>
                                        <strong>Author: </strong>
                                        {book.author.name}
                                    </p>
                                    <p>
                                        <strong>Genre: </strong>
                                        {book.genre}
                                    </p>
                                    {book.read || <p>[Unread]</p>}
                                </Grid>
                                <Grid item xs={6}>
                                    {book.series && (
                                        <p>
                                            <strong>Series: </strong>
                                            {book.series}
                                        </p>
                                    )}
                                </Grid>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Card>
            </a>
        </Grid>
    );
};

const Books = () => {
    const [books, setBooks] = React.useState([
        {
            id: 1,
            title: 'The Fellowship of the Ring',
            author: { id: 1, name: 'J.R.R. Tolkien' },
            genre: 'Fantasy',
            series: 'The Lord of the Rings',
            imgURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1176174220l/601134.jpg',
        },
        {
            id: 2,
            title: 'Wuthering Heights',
            author: { id: 2, name: 'Emily Brontë' },
            genre: 'Classic',
            imgURL:
                'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1479652582l/432394._SY475_.jpg',
        },
        {
            id: 3,
            title: 'The Two Towers',
            author: { id: 1, name: 'J.R.R. Tolkien' },
            genre: 'Fantasy',
            series: 'The Lord of the Rings',
            imgURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1300597697l/601135.jpg',
        },
        {
            id: 4,
            title: 'The Giver',
            author: { id: 2, name: 'Lois Lowry' },
            genre: 'Science Fiction',
            imgURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342493368l/3636.jpg',
        },
        {
            id: 5,
            title: 'Hush, Hush',
            author: { id: 4, name: 'Becca Fitzpatrick' },
            genre: 'Fantasy',
            series: 'Hush, Hush',
            imgURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327882723l/7136307.jpg',
        },
        {
            id: 6,
            title: 'Dracula',
            author: { id: 5, name: 'Bram Stoker' },
            genre: 'Horror',
            imgURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1314899782l/72485.jpg',
        },
    ]);
    const [filteredBooks, setFilteredBooks] = React.useState(sortBooks(books));
    const [onlyCovers, setOnlyCovers] = React.useState(true);

    const handleCoverChange = (e) => {
        setOnlyCovers(e.target.checked);
    };

    const search = (e) => {
        if (e.target.value) {
            setFilteredBooks(
                sortBooks(books.filter((book) => book.title.toLowerCase().includes(e.target.value.toLowerCase())))
            );
        } else {
            setFilteredBooks(sortBooks(books));
        }
    };

    return (
        <Grid container spacing={3} style={{ margin: 0, width: '100%' }}>
            <Grid container item xs={12}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Search"
                        onChange={search}
                        margin="normal"
                        variant="outlined"
                        style={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={onlyCovers}
                                onChange={handleCoverChange}
                                color="primary"
                                name="onlyCovers"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        }
                        label="Show Covers Only"
                    />
                </Grid>
            </Grid>
            {filteredBooks.map((book) => (onlyCovers ? <BookCover book={book} /> : <BookDetail book={book} />))}
        </Grid>
    );
};

export default Books;
