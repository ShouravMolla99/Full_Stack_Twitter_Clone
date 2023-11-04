package com.shourav.twitter_clone.service;

import com.shourav.twitter_clone.exception.TwitException;
import com.shourav.twitter_clone.exception.UserException;
import com.shourav.twitter_clone.model.Twit;
import com.shourav.twitter_clone.model.User;
import com.shourav.twitter_clone.request.TwitReplyReques;

import java.util.List;

public interface TwitService {

    public Twit createTwit(Twit req, User user) throws UserException;
    public List<Twit> findAllTwit();
    public Twit retwit(Long twitId, User user)throws UserException, TwitException;
    public Twit findById(Long twitId)throws TwitException;

    public void deleteTwitById(Long twitId, Long userId)throws TwitException, UserException;
    public Twit removeFromRetwit(Long twitId, User user)throws TwitException,UserException;
    public Twit createdReply(TwitReplyReques req, User user)throws TwitException;


    public List<Twit> getUserTwit(User user);
    public List<Twit> findByLikesContainsUser(User user);

}
