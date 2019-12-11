import React from 'react';
import { createUseStyles } from 'react-jss';
import EntryItem from './EntryItem';

const useStyles = createUseStyles({
  round: {
    display: 'flex',
    flexDirection: 'column',
  }
});

const Round = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.round}>
      {props.matchList.map(matchData => <EntryItem key={matchData.number} data={matchData} {...props} />)}
    </div>
  )
}

export default Round;