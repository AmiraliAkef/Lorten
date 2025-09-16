package com.example.Lorten.service;

import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class UrlService {
    private Map<String, String> dataBase = new HashMap<>();

    public String encoder(String originalUrl){
        UUID uuid = UUID.randomUUID();
        String code = uuid.toString().substring(0, 8);
        dataBase.put(code, originalUrl);
        return code;
    }

    public String originalUrlGetter(String shortenCode){
        return dataBase.get(shortenCode);
    }


}
