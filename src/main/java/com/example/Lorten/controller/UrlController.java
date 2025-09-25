package com.example.Lorten.controller;

import com.example.Lorten.service.UrlService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api/url")
@CrossOrigin(origins = "*")
public class UrlController {

    @Autowired
    private UrlService urlService;

    @PostMapping("/shorten")
    public String shortenUrl(@RequestBody String longUrl){
        return urlService.encoder(longUrl);
    }

    @GetMapping("/{code}")
    public String expandUrl(@PathVariable String code){
        String original = urlService.originalUrlGetter(code);
        if (original == null){
            throw new IllegalArgumentException("Invalid short code");
        }
        return original;
    }

}
