package com.rakutech.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {


    @Autowired
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
        return userRepository.findusers();
    }

    public String registerUser(User user){
        User user1 = new User(
                user.getName(),
                user.getUsername(),
                user.getPassword(),
                user.getEmail()
        );

        userRepository.save(user1);

        return "Registered Successfully!";
    }


}
