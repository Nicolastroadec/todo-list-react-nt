interface squareProps {
    id: string;
    value: number;
    onSquareClick: () => void;
}

export default function Square({ id, value, onSquareClick }: squareProps) {
    return (
        <>
            <button onClick={onSquareClick} id={id} className="w-16 h-16 hover:bg-blue-300 bg-blue-500 text-white flex items-center justify-center rounded">
                {value ?? ''}
            </button>
        </>
    );
}
