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
//# sourceMappingURL=sendToServer.js.map