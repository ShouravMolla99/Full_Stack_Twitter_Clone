package com.shourav.twitter_clone.service;

import com.shourav.twitter_clone.exception.TwitException;
import com.shourav.twitter_clone.exception.UserException;
import com.shourav.twitter_clone.model.Like;
import com.shourav.twitter_clone.model.Twit;
import com.shourav.twitter_clone.model.User;
import com.shourav.twitter_clone.repository.LikeRepository;
import com.shourav.twitter_clone.repository.TwitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class LikeServiceImplementation implements LikeService {

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private TwitService twitService;

    @Autowired
    private TwitRepository twitRepository;

    @Override
    public Like likeTwit(Long twitId, User user) throws UserException, TwitException {
        Like isLikeExist=likeRepository.isLikeExist(user.getId(),twitId);

        if (isLikeExist!=null){
            likeRepository.deleteById(isLikeExist.getId());
            return isLikeExist;
        }

        Twit twit=twitService.findById(twitId);

        Like like=new Like();
        like.setTwit(twit);
        like.setUser(user);

        Like savedLike=likeRepository.save(like);

        twit.getLikes().add(savedLike);
        twitRepository.save(twit);

        return savedLike;
    }

    @Override
    public List<Like> getAllLikes(Long twitId) throws TwitException {

        Twit twit=twitService.findById(twitId);

        List<Like> likes = likeRepository.findAllByTwitId(twitId);
        return likes;
    }
}
