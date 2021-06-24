package com.rakutech.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {


    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User userData() {
        return new User(
                "Victor Chiong",
                "victor",
                "12345678",
                "cjvicro@gmail.com"
        );
    }
    public List<User> userList(){
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
