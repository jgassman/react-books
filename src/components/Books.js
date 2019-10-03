import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  bookBox: {
    backgroundColor: "#f6f6f6",
    width: "100%",
    height: "100%",
    color: "#000000",
  },
  bookCover: {
    maxHeight: "150px",
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const BookDetail = props => {
  
  const classes = useStyles();
  const book = props.book;

  return (
    <Grid item xs={6}>
      <a href={"/#/books/" + book.id} style={{textDecoration: "none"}}>
        <Card className={classes.bookBox}>
          <Grid container spacing={3}>
            <Grid item xs={3} className={classes.imgContainer}>
              <img src={book.imgURL} className={classes.bookCover} alt="" />
            </Grid>
            <Grid item container xs={9}>
              <Grid item xs={12}>
                <h3>{book.title}</h3>
              </Grid>
              <Grid item xs={6}>
                <p><strong>Author: </strong>{book.author.name}</p>
                <p><strong>Genre: </strong>{book.genre}</p>
                {book.read || <p>[Unread]</p>}
              </Grid>
              <Grid item xs={6}>
                {book.series && <p><strong>Series: </strong>{book.series}</p>}
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </a>
    </Grid>
  )
};

const Books = () => {

  const [books, setBooks] = React.useState([
    {id: 1, title: "The Fellowship of the Ring", author: {id: 1, name: "J.R.R. Tolkien"}, genre: "Fantasy", series: "The Lord of the Rings", imgURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1176174220l/601134.jpg"},
    {id: 2, title: "Wuthering Heights", author: {id: 2, name: "Emily Brontë"}, genre: "Classic", imgURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1479652582l/432394._SY475_.jpg"},
    {id: 3, title: "The Two Towers", author: {id: 1, name: "J.R.R. Tolkien"}, genre: "Fantasy", series: "The Lord of the Rings", imgURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1300597697l/601135.jpg"},
    {id: 4, title: "The Fellowship of the Ring", author: {id: 1, name: "J.R.R. Tolkien"}, genre: "Fantasy", series: "The Lord of the Rings", imgURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1176174220l/601134.jpg"},
  ]);

  return (
    <Grid container spacing={3} style={{margin: 0, width: '100%'}}>
      {books.map(book => <BookDetail book={book} />)}
    </Grid>
  );
};

export default Books;
