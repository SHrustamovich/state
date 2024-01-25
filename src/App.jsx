import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button
                style={{
                    padding: "8px 16px",
                    border: "none",
                    background: "green",

                    color: "#fff",
                    borderRadius: "8px",
                }}
                onClick={() => setCount(count + 1)}>
                + Qo'shish
            </button>
            <button
                style={{
                    padding: "8px 16px",
                    border: "none",
                    background: "green",
                    marginLeft: "12px",
                    color: "#fff",
                    borderRadius: "8px",
                }}
                onClick={() => setCount(count - 1)}>
                - Ayirish
            </button>

            <p style={{ fontSize: "34px", color: "red" }}>{count}</p>
        </>
    );
};

export default App;
