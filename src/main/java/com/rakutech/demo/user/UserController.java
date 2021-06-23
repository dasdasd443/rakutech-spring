package com.rakutech.demo.user;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="api/user")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {

    @GetMapping("/")
    public User hello(){
        return new User(
                "Victor Chiong",
                "victor",
                "12345678",
                "cjvicro@gmail.com"
        );
    }

    @PostMapping("/login")
    public String login(){
        return "data received";
    }
}
