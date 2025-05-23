function handlePanicKey(event) {
    const panicKey = localStorage.getItem('panicKey') || '`';
    const panicURL = localStorage.getItem('panicURL') || 'https://www.ixl.com';

    if (event.key === panicKey) {
        window.location.href = panicURL;
    }
}

function displayCurrentPanicKey() {
    const panicKey = localStorage.getItem('panicKey') || '`';
    document.getElementById('currentPanicKey').textContent = `Current Panic Key: '${panicKey}'`;
}

function displayCurrentPanicURL() {
    const panicURL = localStorage.getItem('panicURL') || 'https://www.ixl.com';
    document.getElementById('currentPanicURL').textContent = `Current Panic URL: ${panicURL}`;
}

function changePanicKey() {
    const instruction = document.getElementById('instruction');
    instruction.textContent = 'Press the key you want to set as your panic key:';

    function captureKeyPress(event) {
        const newPanicKey = event.key;
        localStorage.setItem('panicKey', newPanicKey); 
        alert(`Panic key set to: '${newPanicKey}'`);

        window.removeEventListener('keydown', captureKeyPress);
        instruction.textContent = `(it'll say ~ but it's your key)`;
        displayCurrentPanicKey();
    }

    window.addEventListener('keydown', captureKeyPress);
}

function savePanicURL() {
    const url = document.getElementById('panicURL').value.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        alert('Please enter a valid URL starting with http:// or https://');
        return;
    }
    localStorage.setItem('panicURL', url);
    alert(`Panic URL set to: ${url}`);
    displayCurrentPanicURL();
}

window.addEventListener('keydown', handlePanicKey);
window.onload = function () {
    displayCurrentPanicKey();
    displayCurrentPanicURL();
};
