package com.example.Lorten.controller;

import com.example.Lorten.service.UrlService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/url")
@CrossOrigin(origins = "*")
public class UrlController {

    @Autowired
    private UrlService urlService;

    @PostMapping("/shorten")
    public ResponseEntity<Map<String, String>> shortenUrl(@RequestBody String longUrl){
        try {
            String code = urlService.encoder(longUrl);
            Map<String, String> response = new HashMap<>();
            response.put("code", code);
            response.put("shortUrl", "http://localhost:8081/api/url/" + code);
            response.put("originalUrl", longUrl);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Failed to shorten URL");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }

    @GetMapping("/{code}")
    public ResponseEntity<String> expandUrl(@PathVariable String code){
        String original = urlService.originalUrlGetter(code);
        if (original == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Invalid short code");
        }
        return ResponseEntity.ok(original);
    }

}
