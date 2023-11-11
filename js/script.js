const searchParams = new URLSearchParams(window.location.search);
const name = searchParams.get('n');

document.getElementById('name').innerHTML = name;