import * as React from "react";
export function ShortUriForm({ shortUri }) {
    return React.createElement("div", null,
        React.createElement("input", { id: "post-shortlink", defaultValue: shortUri }),
        React.createElement("button", { id: "copy-button", "data-clipboard-target": "#post-shortlink" }, "Copy"));
}
<<<<<<< HEAD
//# sourceMappingURL=shortUriForm.js.map
=======
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
