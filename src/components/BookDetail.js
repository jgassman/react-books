import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  bookCover: {
    maxHeight: '150px',
    borderRadius: '5px',
  },
  fab: {
    position: 'absolute',
    bottom: 60,
    right: 16,
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const BookDetail = (props) => {
  const classes = useStyles();

  const [book, setBook] = React.useState({});

  const fetchBook = async (book_id) => {
    let response = await fetch(`http://localhost:8000/api/books/${book_id}/`);
    let json = await response.json();
    return { success: true, data: json};
  }

  const markRead = async (book_id) => {
    let response = await fetch(`http://localhost:8000/api/books/${book_id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({'read': true})
    });
    if (response.ok) {
      let json = await response.json();
      setBook(json)
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  React.useEffect(() => {
    (async () => {
      let bookResponse = await fetchBook(props.match.params.book_id);
      if (bookResponse.success) {
        console.log(bookResponse.data);
        setBook(bookResponse.data);
      }
    })()
  }, [props]);

  return (
    <Grid container spacing={3} style={{ padding: '10px' }}>
      <Card className={classes.bookBox}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} className={classes.imgContainer}>
            <img src={book.cover_url} className={classes.bookCover} alt="" />
          </Grid>
          <Grid item container md={9}>
            <Grid item xs={12}>
              <h3>{book.title}</h3>
            </Grid>
            <Grid item xs={12}>
              {book.authors && (
                <p>
                  <strong>Author: </strong>
                  {book.authors.map(author => `${author.first_name}${author.first_name ? " " : ""}${author.last_name}`)}
                </p>
              )}
            </Grid>
            <Grid item xs={6}>
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
                  {book.series.name}
                </p>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Card>
      {book.read ||
        <Fab variant="extended" className={classes.fab} onClick={markRead}>
          <AddIcon /> Finished!
        </Fab>
      }
    </Grid>
  );
};

export default BookDetail;
