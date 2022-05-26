import { useState } from "react";
import { CompactPicker } from "react-color";

export function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");
    return (
        <div className="App">
            <CompactPicker
                color={color}
                onChangeComplete={(color) => {
                    setColor(color.hex);
                }}
            />
        </div>
    );
}
