const advice_id = document.getElementById('advice_id'),
    advice_detail = document.getElementById('advice_detail'),
    device_button = document.getElementById('device_button');

const fetchingData = (url) => {
    fetch(url, { cache: "no-store" })
        .then(response => response.json())
        .then(data => { deviceData(data); console.log(data); })
        .catch(error => console.log(error));
}

const deviceData = (data) => {
    const id = data.slip.id;
    const device = data.slip.advice

    advice_id.innerHTML = id
    advice_detail.innerHTML = device
}

const url = "https://api.adviceslip.com/advice"

fetchingData(url)

device_button.addEventListener('click', () => fetchingData(url))