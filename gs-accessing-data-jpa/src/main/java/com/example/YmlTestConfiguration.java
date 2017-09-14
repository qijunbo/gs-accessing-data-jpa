package com.example;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix="docker")
public class YmlTestConfiguration {

    private String create;

    private String getport;

    public void setCreate(String create) {
        this.create = create;
    }

    public void setGetport(String getport) {
        this.getport = getport;
    }
    
    
    

}
