package com.rakutech.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/user")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {

    private final UserService userService;



    @Autowired
    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
    }


    @GetMapping("/")
    public User hello(){
        return new User(
                "Victor Chiong",
                "victor",
                "12345678",
                "cjvicro@gmail.com"
        );
    }

    @GetMapping("/users")
    public List<User> users(){
        return userService.userList();
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User user){
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public Optional<User> loginUser(@RequestBody User user){
        return userService.loginUser(user);
    }
}
