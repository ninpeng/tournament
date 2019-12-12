import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { useChangeHover } from './MatchProvider';

const matchPadding = 20;
const nameWidth = 200;
const lineWidth = 20;
const entryHeight = 40 + 3; // height: 40, padding 2 + 1
const borderColor = '#3A58B7';
const borderColorVictory = '#FF7F00';
const scoreColorLose = '#393C43';

const useStyles = createUseStyles({
  matchBox: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    padding: props => `${props.padding}px 0px`,
    position: 'relative',
    '&:nth-child(odd) $matchTailV': {
      bottom: 0
    },
    '&:nth-child(even) $matchTailV': {
      top: 0
    },
  },
  matchHead: {
    width: lineWidth,
    border: `1px solid ${borderColor}`,
  },
  matchTailH: {
    width: lineWidth,
    border: `1px solid ${borderColor}`,
  },
  matchTailV: {
    position: 'absolute',
    right : 0,
    height: props => props.padding + entryHeight,
    border: `1px solid ${borderColor}`,
    boxSizing: 'border-box',
  },
  matchNumber: {
    width: 20,
    textAlign: 'center',
    color: '#696C73',
  },
  firstEntry: {
    display: 'flex',
    border: `2px solid ${borderColor}`,
    borderBottom: `1px solid ${borderColor}`,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  secondEntry: {
    display: 'flex',
    border: `2px solid ${borderColor}`,
    borderTop: `1px solid ${borderColor}`,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  victoryBorder: {
    borderColor: borderColorVictory,
  },
  entryNameBox: {
    display: 'flex',
    width: nameWidth,
    height: 40,
    padding: 5,
    boxSizing: 'border-box',
    background: '#29292C',
  },
  entryNameBoxVictory: {
    borderRightColor: borderColor,
    background: borderColor,
    cursor: 'pointer',
  },
  entrySeed: {
    lineHeight: '30px',
    width: 20,
    marginRight: 5,
    textAlign: 'center',
    color: '#1A3897',
  },
  entryName: {
    lineHeight: '30px',
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  entryScore: {
    width: 30,
    height: 40,
    padding: 5,
    lineHeight: '30px',
    boxSizing: 'border-box',
    textAlign: 'center',
    borderLeft: `2px solid ${borderColor}`,
  },
  entryScoreVictory: {
    borderColor: props => props.finalRound && borderColorVictory,
    background: props => props.finalRound ? borderColorVictory : borderColor,
  },
  entryScoreLose: {
    background: scoreColorLose,
  }
});

// 대진표에서 각각의 대진을 그려주는 컴포넌트
const MatchItem = ({ data, winnerSeed, firstRound, finalRound }) => {
  // 현재 라운드
  const { r } = data.id;
  // 대진의 위, 아래 균일한 간격을 주기 위한 패딩 값
  const padding = Math.pow(2, r - 1) * (entryHeight + matchPadding) - entryHeight;

  const classes = useStyles({ padding, finalRound });

  // 마우스 오버 이벤트 관리
  const [isHover, setHover] = useChangeHover();

  // 매치 승자 찾기
  const victoryIndex = data.score[0] > data.score[1] ? 0 : 1;

  const isHoverVictoryFirst = isHover && data.seed[0] === winnerSeed;
  const isHoverVictorySecond = isHover && data.seed[1] === winnerSeed;
  const isFinalWinnerFirst = finalRound && victoryIndex === 0
  const isFinalWinnerSecond = finalRound && victoryIndex === 1;

  // 우승자 mouse enter 이벤트 핸들러
  const handleMouseEnter = (e) => {
    if (Number(e.target.id) === winnerSeed) {
      setHover(true);
    }
  }

  // 우승자 mouse leave 이벤트 핸들러
  const handleMouseLeave = (e) => {
    if (Number(e.target.id) === winnerSeed) {
      setHover(false);
    }
  }

  return (
    <div className={classes.matchBox}>
      {/* 이전 라운드와 연결해주는 헤드 라인 */}
      { !firstRound && <div className={classes.matchHead} /> }
      {/* 매치 번호 */}
      <div className={classes.matchNumber}>{data.number}</div>
      {/* 엔트리 박스 */}
      <div>
        {/* 첫 번째 선수 엔트리 */}
        <div className={classNames(classes.firstEntry, isFinalWinnerFirst && classes.victoryBorder)}>
          {/* 이름과 시드가 들어가는 박스 */}
          <div id={data.seed[0]} className={classNames(classes.entryNameBox, isHoverVictoryFirst && classes.entryNameBoxVictory)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* 참가자 시드 */}
            <span className={classes.entrySeed}>{data.seed[0]}</span>
            {/* 참가자 이름 */}
            <span className={classes.entryName}>{data.participant[0].name}</span>
          </div>
          {/* 스코어 */}
          <div className={classNames(classes.entryScore, victoryIndex === 0 ? classes.entryScoreVictory : classes.entryScoreLose)}>{data.score[0]}</div>
        </div>
        {/* 두 번째 선수 엔트리 */}
        <div className={classNames(classes.secondEntry, isFinalWinnerSecond && classes.victoryBorder)}>
          <div id={data.seed[1]} className={classNames(classes.entryNameBox, isHoverVictorySecond && classes.entryNameBoxVictory)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className={classes.entrySeed}>{data.seed[1]}</span>
            <span className={classes.entryName}>{data.participant[1].name}</span>
          </div>
          <div className={classNames(classes.entryScore, victoryIndex === 1 ? classes.entryScoreVictory : classes.entryScoreLose)}>{data.score[1]}</div>
        </div>
      </div>
      {/* 다음 라운드와 연결해주는 꼬리 라인 */}
      { !finalRound &&
        <>
          <div className={classes.matchTailH} />
          <div className={classes.matchTailV} />
        </>
      }
    </div>
  );
}

export default MatchItem;
