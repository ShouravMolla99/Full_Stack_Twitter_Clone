package com.shourav.twitter_clone.repository;

import com.shourav.twitter_clone.model.Twit;
import com.shourav.twitter_clone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TwitRepository extends JpaRepository<Twit, Long> {

    List<Twit> findAllByIsTwitTrueOrderByCreatedAtDesc();

    List<Twit> findByRetwitUserContainsOrUser_IdAndIsTwitTrueOrderByCreatedAtDesc(User user, Long userId);

    List<Twit> findByLikesContainingOrderByCreatedAtDesc(User user);

    @Query("select t from Twit t JOIN t.likes I where I.user.id=:userId")
    List<Twit> findByLikesUser_id(Long userId);
}
