import * as $ from "jquery";
export function sendToServer(longUri, onSubmit) {
    let data = JSON.stringify({ "Id": 0, "LongUri": longUri, "ShortUri": "" });
    $.ajax({
        url: "/SUGC",
        data: data,
        method: "POST",
        contentType: "application/json",
        success: (result) => {
            console.log("ajax result", result);
            onSubmit(result);
        }
    });
}
<<<<<<< HEAD
//# sourceMappingURL=sendToServer.js.map
=======
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
