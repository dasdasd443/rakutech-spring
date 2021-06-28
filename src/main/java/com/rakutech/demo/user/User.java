package com.rakutech.demo.user;




import javax.persistence.*;

@Entity
@Table(name="user")
public class User {
    private @Id
    @GeneratedValue @Column(name="id") long id;
    private @Column(name="name", length=50) String name;
    private @Column(name="username", length=50) String username;
    private @Column(name="password", length=50) String password;
    private @Column(name="email",unique = true, length=50) String email;

    public User() {
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

    public User(long id, String name, String username, String password, String email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public User(String name, String username, String password, String email) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }
}
