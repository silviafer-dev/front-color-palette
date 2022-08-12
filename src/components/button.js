export function Button({ color, setColor }) {
    // const select = () => {
    //     setSelected(!select)
    // }

    return (
        <div>
            <div
                // className={className}
                style={{
                    backgroundColor: color,
                    height: 50,
                    width: 50,
                    borderRadius: 50,
                }}
            >
                +
            </div>
        </div>
    );
}
