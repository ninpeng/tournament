import React from 'react';
import { createUseStyles } from 'react-jss';
import Match from './Match';

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    height: '100vh',
    background: '#161718',
    padding: 50,
  },
  header: {
    color: '#2D3C71',
  },
  title: {
    background: '#393C43',
    borderRadius: 6,
    width: 1200,
    display: 'flex',
    justifyContent: 'center',
  },
  titleSpan: {
    width: 350,
    fontSize: '24px',
    textAlign: 'center',
    padding: '10px 0px',
  },
  main: {
    position: 'relative',
    top: '50px',
  }
});

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>
        <article>
          <div className={classes.root}>
            <h1 className={classes.header}>Stage 1 - Pool 1</h1>
            <div className={classes.title}>
              <span className={classes.titleSpan}>Round1</span>
              <span className={classes.titleSpan}>Semifinals</span>
              <span className={classes.titleSpan}>Finals</span>
            </div>

            <main className={classes.main}>
              <Match />
            </main>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
