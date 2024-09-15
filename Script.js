document.getElementById('claimForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const walletAddress = document.getElementById('walletAddress').value;
    const messageDiv = document.getElementById('message');

    if (walletAddress) {
        messageDiv.innerText = `Claim request sent for wallet: ${walletAddress}`;
    } else {
        messageDiv.innerText = 'Please enter a valid wallet address.';
    }
});
