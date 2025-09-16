# URL Shortener (Java + Spring Boot)

A simple URL shortener built with **Java** and **Spring Boot**.  
This project demonstrates how to build a REST API with backend logic to shorten long URLs into short, shareable codes.

---

## 🚀 Features
- Shorten any long URL into a short code
- Retrieve the original URL using the short code
- In-memory storage (HashMap) for simplicity
- JSON-based API endpoints
- Easily extendable to use a database later

---

## 📂 Project Structure
```
url-shortener-java/
│
├── pom.xml                       # Maven build file
└── src/
    ├── main/
    │   ├── java/com/example/urlshortener/
    │   │   ├── UrlShortenerApplication.java  # Main entry point
    │   │   ├── UrlController.java            # Handles HTTP requests
    │   │   └── UrlService.java               # Business logic (shortening)
    │   └── resources/
    │       ├── application.properties        # App config
    │       └── static/                       # Frontend files (later)
    └── test/java/                            # Unit tests (optional)
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
git clone git@github.com:your-username/url-shortener-java.git
cd url-shortener-java
```

2. **Build and run the project**
```bash
mvn spring-boot:run
```

3. **Access the app**
- API runs on: `http://localhost:8080`

---

## 📌 API Endpoints

### 1. Shorten a URL
**POST** `/shorten`  
Request body:
```json
{
  "longUrl": "https://www.google.com"
}
```
Response:
```json
{
  "shortUrl": "http://localhost:8080/a1b2c3"
}
```

---

### 2. Redirect to Original URL
**GET** `/{shortCode}`  
Example:
```
http://localhost:8080/a1b2c3
```
→ redirects to `https://www.google.com`

---

## 🧩 Tech Stack
- **Java 17**
- **Spring Boot** (Web + JSON handling with Jackson)
- **Maven** for build management

---

## 📌 Future Improvements
- Use a database (MySQL/Postgres/MongoDB) instead of HashMap
- Add custom short codes
- Add user authentication
- Create a frontend UI

---

## 🤝 Contributing
1. Fork the repo
2. Create a new branch (`feature/my-feature`)
3. Commit changes
4. Push to your fork and open a Pull Request

---

## 📜 License
This project is licensed under the MIT License.  
