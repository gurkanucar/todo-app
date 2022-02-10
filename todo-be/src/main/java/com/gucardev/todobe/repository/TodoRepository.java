package com.gucardev.todobe.repository;

import com.gucardev.todobe.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo,Long> {

    List<Todo> findAllByUserId(Long userID);

    List<Todo> findAllByUserIdAndCompleted(Long userID, Boolean completed);

}
