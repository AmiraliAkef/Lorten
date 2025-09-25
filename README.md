# Lorten (Java + Spring Boot)

A simple URL shortener built with **Java** and **Spring Boot** with a modern web frontend.  
This project demonstrates how to build a REST API with backend logic to shorten long URLs into short, shareable codes, complete with a beautiful responsive website.

---

## 🚀 Features
- **Modern Web Interface**: Beautiful, responsive website with gradient design
- **URL Shortening**: Convert any long URL into a short, shareable code
- **One-Click Copy**: Easy copying of shortened URLs to clipboard
- **Real-time Validation**: Client-side URL format validation
- **Mobile-Friendly**: Fully responsive design for all devices
- **REST API**: JSON-based API endpoints for programmatic access
- **In-memory Storage**: HashMap-based storage (easily extendable to database)

---

## 📂 Project Structure
```
Lorten/
├── src/
│ ├── main/
│ │ ├── java/com/example/Lorten/
│ │ │ ├── LortenApplication.java
│ │ │ ├── controller/
│ │ │ │ └── UrlController.java
│ │ │ ├── service/
│ │ │ │ └── UrlService.java
│ │ │ └── config/
│ │ │ └── CorsConfig.java
│ │ └── resources/
│ │ ├── application.properties
│ │ └── static/
│ │ ├── index.html
│ │ ├── style.css
│ │ └── script.js
│ └── test/java/com/example/Lorten/
│ └── LortenApplicationTests.java
```

---

## ⚙️ Requirements
- [Java 17+](https://adoptium.net/)
- [Maven](https://maven.apache.org/)
- Git

---

## 🛠️ Installation & Setup

1. **Clone the repository**
```bash
git clone git@github.com:AmiraliAkef/Lorten.git
cd Lorten
```

2. **Build and run the project**
```bash
mvn spring-boot:run
```

3. **Access the app**
- **Website**: `http://localhost:8081` (beautiful web interface)
- **API**: `http://localhost:8081/api/url` (REST endpoints)

---

## 🌐 Web Interface

Visit `http://localhost:8081` to access the beautiful web interface where you can:
- Enter any long URL in the input field
- Click "Shorten URL" to generate a short code
- Copy the shortened URL with one click
- See real-time validation and error messages
- Enjoy a fully responsive design on any device

---

## 📌 API Endpoints

### 1. Shorten a URL
**POST** `/api/url/shorten`  
Request body:
```json
"https://www.google.com"
```
Response:
```json
{
  "code": "a1b2c3d4",
  "shortUrl": "http://localhost:8081/api/url/a1b2c3d4",
  "originalUrl": "https://www.google.com"
}
```

---

### 2. Redirect to Original URL
**GET** `/api/url/{shortCode}`  
Example:
```
http://localhost:8081/api/url/a1b2c3d4
```
→ redirects to `https://www.google.com`

---

## 🧩 Tech Stack

### Backend
- **Java 17**
- **Spring Boot** (Web + JSON handling with Jackson)
- **Maven** for build management
- **H2 Database** (in-memory for development)

### Frontend
- **HTML5** with semantic markup
- **CSS3** with modern features (gradients, animations, flexbox)
- **Vanilla JavaScript** (ES6+ features)
- **Responsive Design** (mobile-first approach)

---

## 📌 Future Improvements
- Use a database (MySQL/Postgres/MongoDB) instead of HashMap
- Add custom short codes
- Add user authentication and user-specific URLs
- Add URL analytics and click tracking
- Implement URL expiration dates
- Add bulk URL shortening
- Create admin dashboard

---

## 🤝 Contributing
1. Fork the repo
2. Create a new branch (`feature/my-feature`)
3. Commit changes
4. Push to your fork and open a Pull Request

---

## 📜 License
This project is licensed under the MIT License.  
