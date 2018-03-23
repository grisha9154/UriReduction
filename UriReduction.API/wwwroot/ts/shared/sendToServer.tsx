import * as $ from "jquery";
export function sendToServer (longUri: string, onSubmit: (data: string) => void): void {
    let data: string = JSON.stringify({"Id": 0, "LongUri": longUri, "ShortUri": ""});
    $.ajax({
        url: "/SUGC",
        data: data,
        method: "POST",
        contentType: "application/json",
        success: (result: string) => {
            onSubmit(result);
        }
    });
}