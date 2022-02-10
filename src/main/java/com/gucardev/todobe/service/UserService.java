package com.gucardev.todobe.service;

import com.gucardev.todobe.exception.UserNotFoundException;
import com.gucardev.todobe.model.User;
import com.gucardev.todobe.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getUserByID(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("user not found!"));
    }

    public User getUserByUsername(String username) {
        return userRepository.findUserByUsername(username)
                .orElseThrow(() -> new UserNotFoundException("user not found!"));
    }

    void checkUser(Long id) {
        getUserByID(id);
    }

}
