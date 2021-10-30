import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  bookCover: {
    maxHeight: '150px',
    borderRadius: '5px',
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const AuthorDetail = () => {
  const classes = useStyles();

  const [author, setAuthor] = React.useState({ name: 'J.R.R. Tolkien' });
  const [books, setBooks] = React.useState([
    {
      id: 1,
      title: 'The Fellowship of the Ring',
      author: { id: 1, name: 'J.R.R. Tolkien' },
      genre: 'Fantasy',
      series: 'The Lord of the Rings',
      imgURL:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1176174220l/601134.jpg',
    },
    {
      id: 3,
      title: 'The Two Towers',
      author: { id: 1, name: 'J.R.R. Tolkien' },
      genre: 'Fantasy',
      series: 'The Lord of the Rings',
      imgURL:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1300597697l/601135.jpg',
    },
    {
      id: 4,
      title: 'The Fellowship of the Ring',
      author: { id: 1, name: 'J.R.R. Tolkien' },
      genre: 'Fantasy',
      series: 'The Lord of the Rings',
      imgURL:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1176174220l/601134.jpg',
    },
  ]);

  return (
    <Grid container spacing={3} style={{ padding: '10px' }}>
      <Grid item xs={12}>
        <h1>{author.name}</h1>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid key={book.id} item xs={1} className={classes.imgContainer}>
              <a href={'/#/books/' + book.id}>
                <img src={book.imgURL} className={classes.bookCover} alt="" />
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AuthorDetail;
