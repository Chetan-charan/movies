import { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Button from '@mui/material/Button';

export function Tictactoe() {
 
  const [boardVal, setBoardVal] = useState([null, null, null, null, null, null, null, null, null]);
  const [isXTurn, setIsXTurn] = useState(true);
  const { width, height } = useWindowSize();

  
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (var i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (board[a] === board[b] && board[b] === board[c] && board[a] !== null) {
        return board[a];
      }
    }
    return null;
  };
  
 const winner = decideWinner(boardVal);

  const handleClick = (ind) => {

    const boardcopy = [...boardVal];
    if (winner === null && boardcopy[ind] === null) {
      boardcopy[ind] = isXTurn ? 'X' : 'O';
      setIsXTurn(isXTurn ? false : true);
      setBoardVal(boardcopy);

    }

  };
  
  return <div className='game'>
    {winner ? <Confetti gravity={0.05}
      width={width}
      height={height} /> : ''}
    
    <div className='choice'>
      <h2>Choose your Letter ?</h2>
      <div onClick={() => {
        if (!(boardVal.includes('X') || boardVal.includes('O'))) {
          setIsXTurn(true);
        }
      }} className='game-box choice-box'>X</div>
      <div onClick={() => {

        if (!(boardVal.includes('X') || boardVal.includes('O'))) {
          setIsXTurn(false);
        }
      }} className='game-box choice-box'>O</div>
    </div>

    <div className='full-game'>
      <h5>{isXTurn ? 'X' : 'O'}'s Turn :</h5>
      <div className='board'>
        {boardVal.map((board, index) => <GameBox val={board} onPlayerClick={() => handleClick(index)} />)}
      </div>

      {winner ? <h3 style={{marginTop: '5px'}}>Winner is: {winner}</h3> : ''}
      
     {!(boardVal.includes(null))||(winner) ?  <Button style={{marginTop: '10px'}} variant="contained" onClick={() => {
        setBoardVal([null, null, null, null, null, null, null, null, null]);
      }}>Restart</Button> : ''}

    </div>
  </div>;

}
function GameBox({ onPlayerClick, val }) {
  // const [value,setVal] = useState(null);
  const styles = { color: 'green' };
  return <div onClick={onPlayerClick} style={styles} className='game-box'>{val}</div>;
}
