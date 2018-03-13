import * as React from "react";
export function LongUriForm({ onLongUriSubmit, longUri, onLongUriChange }) {
    return React.createElement("form", { onSubmit: onLongUriSubmit },
        React.createElement("input", { type: "text", placeholder: "Long Uri", value: longUri, onChange: onLongUriChange }),
        React.createElement("input", { type: "submit", value: "Short Uri" }));
}
<<<<<<< HEAD
//# sourceMappingURL=longUriForm.js.map
=======
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
