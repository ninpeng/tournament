import React from 'react';
import { createUseStyles } from 'react-jss';
import Round from './Round';
import { MatchProvider } from './MatchProvider';
import { match } from '../json/InterviewData.json';

const useStyles = createUseStyles({
  match: {
    display: 'flex',
  }
});

// 토너먼트 대진표 컴포넌트
const Match = () => {
  const classes = useStyles();
  // 라운드 갯수
  const roundCount = Math.max.apply(null, match.map(item => item.id.r));

  // 라운드 별로 리스트 만들기
  const roundList = [];
  for (let currentRound=1; currentRound<=roundCount; currentRound++) {
    roundList.push(match.filter(item => item.id.r === currentRound));
  }

  // 최종 우승자 시드 찾기
  const lastMatch = match[match.length-1];
  const victoryIdx = lastMatch.score[0] > lastMatch.score[1] ? 0 : 1;
  const winnerSeed = lastMatch.seed[victoryIdx];

  return (
    <MatchProvider>
      <div className={classes.match}>
        {roundList.map((round, idx) => <Round key={idx} matchList={round} winnerSeed={winnerSeed} firstRound={idx === 0} finalRound={idx === roundCount-1} />)}
      </div>
    </MatchProvider>
  );
}

export default Match;
