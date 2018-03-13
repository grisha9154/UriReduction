import * as React from "react";
export function Cloudinary({ onCloudinarySubmit, onCloudinaryChange }) {
    let inputStyle = { display: "none" };
    return (React.createElement("div", null,
        React.createElement("input", { id: "fileElem", type: "file", style: inputStyle, onChange: onCloudinaryChange }),
        React.createElement("a", { href: "#", onClick: onCloudinarySubmit }, "Select Image")));
}
<<<<<<< HEAD
//# sourceMappingURL=cloudinary.js.map
=======
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
