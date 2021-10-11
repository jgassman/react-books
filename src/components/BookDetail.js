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

const BookDetail = () => {
  const classes = useStyles();

  const [book, setBook] = React.useState({
    id: 1,
    title: 'The Fellowship of the Ring',
    author: { id: 1, name: 'J.R.R. Tolkien' },
    genre: 'Fantasy',
    series: 'The Lord of the Rings',
    imgURL:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1176174220l/601134.jpg',
  });

  return (
    <Grid container spacing={3} style={{ padding: '10px' }}>
      <Grid item xs={12}>
        <h1>{book.title}</h1>
      </Grid>
    </Grid>
  );
};

export default BookDetail;
