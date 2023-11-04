package com.shourav.twitter_clone.util;

import com.shourav.twitter_clone.model.Like;
import com.shourav.twitter_clone.model.Twit;
import com.shourav.twitter_clone.model.User;

public class TwitUtil {

    public static boolean isLikedByReqUser(User reqUser, Twit twit){

        for (Like like:twit.getLikes()){
            if (like.getUser().getId().equals(reqUser.getId())){
                return true;
            }
        }
        return false;
    }

    public final static boolean isRetwitedByReqUser(User reqUser, Twit twit){
        for (User user:twit.getRetwitUser()){
            if (user.getId().equals(reqUser.getId())){
                return true;
            }
        }
        return false;
    }
}
