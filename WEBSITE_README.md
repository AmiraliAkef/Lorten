# Lorten URL Shortener - Web Application

A modern, responsive web application for shortening URLs with a Spring Boot backend.

## Features

- ✨ Modern, responsive design
- 🔗 URL shortening functionality
- 📱 Mobile-friendly interface
- 📋 One-click copy to clipboard
- ⚡ Real-time validation
- 🎨 Beautiful gradient design

## How to Run

### 1. Start the Spring Boot Backend

```bash
# Navigate to your project directory
cd C:\Users\Amirali\iCloudDrive\Lorten_Cursor\Lorten

# Run the Spring Boot application
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### 2. Access the Website

Once the backend is running, open your web browser and go to:

```
http://localhost:8080
```

The website will automatically load and you can start shortening URLs!

## How to Use

1. **Enter a URL**: Type or paste any long URL in the input field
2. **Click Shorten**: Press the "Shorten URL" button
3. **Copy Result**: Click the "Copy" button to copy the shortened URL to your clipboard
4. **Use the Short URL**: The shortened URL will redirect to your original URL when accessed

## Technical Details

### Backend (Spring Boot)
- **Port**: 8080
- **API Endpoints**:
  - `POST /api/url/shorten` - Shorten a URL
  - `GET /api/url/{code}` - Redirect to original URL
- **CORS**: Configured to allow frontend access

### Frontend
- **Static Files**: Served from `src/main/resources/static/`
- **Files**:
  - `index.html` - Main webpage
  - `style.css` - Styling and responsive design
  - `script.js` - JavaScript for API communication

### Data Storage
- Currently uses in-memory HashMap (data will be lost when server restarts)
- Each URL gets a unique 8-character code

## File Structure

```
src/main/resources/static/
├── index.html          # Main webpage
├── style.css           # Styling
└── script.js           # Frontend JavaScript

src/main/java/com/example/Lorten/
├── controller/
│   └── UrlController.java    # REST API endpoints
├── service/
│   └── UrlService.java       # URL shortening logic
├── config/
│   └── CorsConfig.java       # CORS configuration
└── LortenApplication.java    # Spring Boot main class
```

## Troubleshooting

### Backend won't start
- Make sure port 8080 is not in use
- Check if Java and Maven are properly installed
- Run `mvn clean install` to rebuild the project

### Frontend not loading
- Ensure the backend is running on port 8080
- Check browser console for any JavaScript errors
- Verify static files are in the correct directory

### CORS errors
- The application includes CORS configuration
- If you still get CORS errors, check the browser's developer console

## Next Steps

To make this production-ready, consider:
- Adding a database for persistent storage
- Implementing user authentication
- Adding analytics for shortened URLs
- Creating a custom domain for shortened URLs
- Adding rate limiting and security features
