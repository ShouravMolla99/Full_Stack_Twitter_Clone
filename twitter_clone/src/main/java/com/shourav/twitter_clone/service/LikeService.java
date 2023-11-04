package com.shourav.twitter_clone.service;

import com.shourav.twitter_clone.exception.TwitException;
import com.shourav.twitter_clone.exception.UserException;
import com.shourav.twitter_clone.model.Like;
import com.shourav.twitter_clone.model.User;

import java.util.List;

public interface LikeService {

    public Like likeTwit(Long twitId, User user)throws UserException, TwitException;

    public List<Like> getAllLikes(Long twitId)throws TwitException;
}
