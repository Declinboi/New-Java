function scan() {
    const url = document.getElementById('url').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!url) {
        resultsDiv.innerHTML = '<p>Please enter a URL.</p>';
        return;
    }

    // Simulate scanning process
    setTimeout(() => {
        const results = [
            { issue: 'Missing Security Headers', severity: 'High' },
            { issue: 'Outdated jQuery Library', severity: 'Medium' },
            { issue: 'Insecure Cookies', severity: 'Low' }
        ];

        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<strong>${result.issue}</strong> - Severity: ${result.severity}`;
            resultsDiv.appendChild(resultItem);
        });
    }, 1000);
}
