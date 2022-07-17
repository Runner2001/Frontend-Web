const url = "https://api.thaistock2d.com/live";

const dataFatch = () => {
    fetch(url, { cache: "no-store" })
        .then(response => response.json())
        .then(data => { livedata(data); })
        .catch(error => console.log(error));
}

const livedata = data => {
    const setHtml = document.getElementById('set'),
        twodHtml = document.getElementById('twod'),
        valueHtml = document.getElementById('value'),
        dateHtml = document.getElementById('time');
    console.log(data);

    setHtml.innerHTML = `Set: ${data.live.set}`;
    valueHtml.innerHTML = `Value: ${data.live.value}`;
    twodHtml.innerHTML = `Today Number is ${data.live.twod}`;
    dateHtml.innerHTML = data.live.time;
}

setInterval(() => {
    dataFatch();
}, 1000);
