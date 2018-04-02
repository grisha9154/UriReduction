export function sendToServer(longUri: string, onSubmit: (data: string) => void): void {
    let data: string = JSON.stringify({ "Id": 0, "LongUri": longUri, "ShortUri": "" });
    fetch("/SUGC", {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    }).then((res) => {
        res.json().then((value) => {
            onSubmit(value.longUri);
        });
    });
}