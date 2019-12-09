import React from 'react';
import { createUseStyles } from 'react-jss';
import Round from './Round';
import { match } from './InterviewData.json';

// const nameWidth = 300;

const useStyles = createUseStyles({
  match: {
    display: 'flex',
  }
});

function Match() {
  const classes = useStyles();
  const roundCount = Math.max.apply(null, match.map(item => item.id.r));
  // console.log(match, roundCount);

  const roundList = [];
  for (let currentRound=1; currentRound<=roundCount; currentRound++) {
    roundList.push(match.filter(item => item.id.r === currentRound));
  }

  return (
    <div className={classes.match}>
      {roundList.map((round, idx) => <Round key={idx} matchList={round} index={idx} />)}
    </div>
  );
}

export default Match;
