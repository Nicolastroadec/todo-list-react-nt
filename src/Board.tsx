import Square from "./Square";

export default function Board({ xIsNext, squaresArray, onPlay }) {

    // const [squaresArray, setSquare] = useState(Array(9).fill(''))
    // const [xIsNext, setXIsNext] = useState(true);
    // const [message, setMessage] = useState('');


    function handleClick(i: number) {
        if (squaresArray[i] || calculateWinner(squaresArray)) {
            return
        }

        const nextSquares = squaresArray.slice();


        nextSquares[i] = xIsNext ? 'X' : 'O';
        //setXIsNext(!xIsNext);
        // setSquare(nextSquares);

        onPlay(nextSquares);

    }

    const squares = [];
    for (let i: number = 0; i < 9; i++) {
        squares.push(<Square onSquareClick={() => { handleClick(i) }} value={squaresArray[i]} key={i} id={i.toString()} />);
    }

    const classNames = {
        boardrow: 'w-fit grid grid-cols-3 gap-1 place-items-center',
    }

    /**
     * Variante possible avec useEffect : 
     *     useEffect(() => {
     *      const winner = calculateWinner(squaresArray);
     *       if (winner) {
     *          setMessage(winner + ' a gagné');
     *       } else {
     *          setMessage('Prochain tour: ' + (xIsNext ? 'X' : 'O'));
     *       }
     *     }, [squaresArray, xIsNext]);
     */

    let message;

    const winner = calculateWinner(squaresArray);

    if (winner) {
        message = winner + ' a gagné';
    } else {
        message = 'Prochain tour : ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div>{message}</div>
            <div className={classNames.boardrow}>
                {squares}
            </div>
        </>
    )
}


function calculateWinner(squares: string[]) {
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

<style>

</style>