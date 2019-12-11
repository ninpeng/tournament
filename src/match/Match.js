import React from 'react';
import { createUseStyles } from 'react-jss';
import Round from './Round';
import { MatchProvider } from './MatchProvider';
import { match } from './InterviewData.json';

const useStyles = createUseStyles({
  match: {
    display: 'flex',
  }
});

function Match() {
  const classes = useStyles();
  const roundCount = Math.max.apply(null, match.map(item => item.id.r));

  const roundList = [];
  for (let currentRound=1; currentRound<=roundCount; currentRound++) {
    roundList.push(match.filter(item => item.id.r === currentRound));
  }

  const lastMatch = match[match.length-1];
  const victoryIdx = lastMatch.score[0] > lastMatch.score[1] ? 0 : 1;
  const victorySeed = lastMatch.seed[victoryIdx];

  return (
    <MatchProvider >
      <div className={classes.match}>
        {roundList.map((round, idx) => <Round key={idx} matchList={round} victorySeed={victorySeed} firstRound={idx===0} finalRound={idx === roundCount-1} />)}
      </div>
    </MatchProvider>
  );
}

export default Match;
