import * as React from "react";
export function ShortUriForm({ shortUri }) {
    return React.createElement("div", null,
        React.createElement("input", { id: "post-shortlink", defaultValue: shortUri }),
        React.createElement("button", { id: "copy-button", "data-clipboard-target": "#post-shortlink" }, "Copy"));
}
//# sourceMappingURL=shortUriForm.js.map