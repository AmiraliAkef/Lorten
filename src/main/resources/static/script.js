document.addEventListener('DOMContentLoaded', function() {
    const urlForm = document.getElementById('urlForm');
    const longUrlInput = document.getElementById('longUrl');
    const shortenBtn = document.getElementById('shortenBtn');
    const btnText = document.querySelector('.btn-text');
    const btnLoading = document.querySelector('.btn-loading');
    const resultContainer = document.getElementById('resultContainer');
    const shortUrlInput = document.getElementById('shortUrl');
    const originalUrlSpan = document.getElementById('originalUrl');
    const copyBtn = document.getElementById('copyBtn');
    const errorContainer = document.getElementById('errorContainer');
    const errorText = document.getElementById('errorText');

    // API base URL - adjust if your backend runs on a different port
    const API_BASE_URL = 'http://localhost:8080/api/url';

    // Handle form submission
    urlForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const longUrl = longUrlInput.value.trim();
        
        if (!longUrl) {
            showError('Please enter a URL');
            return;
        }

        // Validate URL format
        if (!isValidUrl(longUrl)) {
            showError('Please enter a valid URL (e.g., https://example.com)');
            return;
        }

        await shortenUrl(longUrl);
    });

    // Copy button functionality
    copyBtn.addEventListener('click', function() {
        shortUrlInput.select();
        shortUrlInput.setSelectionRange(0, 99999); // For mobile devices
        
        try {
            document.execCommand('copy');
            copyBtn.textContent = 'Copied!';
            copyBtn.style.background = '#28a745';
            
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
                copyBtn.style.background = '#28a745';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
            // Fallback for modern browsers
            navigator.clipboard.writeText(shortUrlInput.value).then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            });
        }
    });

    // Function to shorten URL
    async function shortenUrl(longUrl) {
        setLoading(true);
        hideError();
        hideResult();

        try {
            const response = await fetch(`${API_BASE_URL}/shorten`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(longUrl)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.error);
            }
            
            displayResult(data.shortUrl, data.originalUrl);
            
        } catch (error) {
            console.error('Error shortening URL:', error);
            showError('Failed to shorten URL. Please check if the backend server is running.');
        } finally {
            setLoading(false);
        }
    }

    // Function to display the result
    function displayResult(shortUrl, originalUrl) {
        shortUrlInput.value = shortUrl;
        originalUrlSpan.textContent = originalUrl;
        resultContainer.style.display = 'block';
        resultContainer.classList.add('show');
        
        // Scroll to result
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Function to show error message
    function showError(message) {
        errorText.textContent = message;
        errorContainer.style.display = 'block';
        hideResult();
    }

    // Function to hide error message
    function hideError() {
        errorContainer.style.display = 'none';
    }

    // Function to hide result
    function hideResult() {
        resultContainer.style.display = 'none';
        resultContainer.classList.remove('show');
    }

    // Function to set loading state
    function setLoading(loading) {
        shortenBtn.disabled = loading;
        if (loading) {
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
        } else {
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
    }

    // Function to validate URL
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    // Auto-focus on URL input
    longUrlInput.focus();

    // Clear error when user starts typing
    longUrlInput.addEventListener('input', function() {
        if (errorContainer.style.display === 'block') {
            hideError();
        }
    });
});
