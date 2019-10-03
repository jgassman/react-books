import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  authorBox: {
    backgroundColor: "#f6f6f6",
    width: "100%",
    height: "100%",
    paddingLeft: "10px",
    color: "#000000",
  },
}));

const AuthorDetail = props => {
  
  const classes = useStyles();
  const author = props.author;

  return (
    <Grid item xs={4}>
      <a href={"/#/authors/" + author.id} style={{textDecoration: "none"}}>
        <Card className={classes.authorBox}>
          <h3>{author.name}</h3>
          <p>({author.bookCount} book{author.bookCount > 1 && 's'})</p>
          <p>({author.genreCount} genre{author.genreCount > 1 && 's'})</p>
        </Card>
      </a>
    </Grid>
  )
};

const Authors = () => {

  const [authors, setAuthors] = React.useState([
    {id: 1, name: "J.R.R. Tolkien", bookCount: 5, genreCount: 2},
    {id: 2, name: "Maggie Stiefvater", bookCount: 3, genreCount: 1},
    {id: 3, name: "Rin Chupeco", bookCount: 1, genreCount: 1},
    {id: 4, name: "Lacey Sturm", bookCount: 3, genreCount: 2},
    {id: 5, name: "Marissa Meyer", bookCount: 5, genreCount: 3},
    {id: 6, name: "C.S. Lewis", bookCount: 10, genreCount: 4},
  ]);
  const [filteredAuthors, setFilteredAuthors] = React.useState(authors);

  const search = e => {
    if (e.target.value) {
      setFilteredAuthors(authors.filter(author => author.name.toLowerCase().includes(e.target.value.toLowerCase())));
    } else {
      setFilteredAuthors(authors);
    }
  };

  return (
    <Grid container spacing={3} style={{margin: 0, width: '100%'}}>
      <Grid item xs={12}>
        <TextField
          label="Search"
          onChange={search}
          margin="normal"
          variant="outlined"
          style={{width: "50%"}}
        />
      </Grid>
      {filteredAuthors.map(author => <AuthorDetail author={author} />)}
    </Grid>
  );
};

export default Authors;
