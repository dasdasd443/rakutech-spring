package com.rakutech.demo.user;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/user")
@CrossOrigin
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
    public List<User> login(){
        return List.of(
                new User(
                        "Victor Chiong",
                        "victor",
                        "12345678",
                        "cjvicro@gmail.com"
                )
        );
    }
}
