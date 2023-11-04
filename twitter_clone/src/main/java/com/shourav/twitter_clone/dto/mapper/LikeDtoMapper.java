package com.shourav.twitter_clone.dto.mapper;

import com.shourav.twitter_clone.dto.LikeDto;
import com.shourav.twitter_clone.dto.TwitDto;
import com.shourav.twitter_clone.dto.UserDto;
import com.shourav.twitter_clone.model.Like;
import com.shourav.twitter_clone.model.User;

import java.util.ArrayList;
import java.util.List;

public class LikeDtoMapper {

    public static LikeDto toLikeDto(Like like, User reqUser){
        UserDto user = UserDtoMapper.toUserDto(like.getUser());
        UserDto reqUserDto=UserDtoMapper.toUserDto(reqUser);
        TwitDto twit=TwitDtoMapper.toTwitDto(like.getTwit(),reqUser);

        LikeDto likeDto = new LikeDto();
        likeDto.setId(like.getId());
        likeDto.setTwit(twit);
        likeDto.setUser(user);

        return likeDto;
    }

    public static List<LikeDto> toLikeDtos(List<Like>likes, User reqUser){
        List<LikeDto> likeDtos = new ArrayList<>();

        for (Like like:likes){
            UserDto user = UserDtoMapper.toUserDto(like.getUser());
            TwitDto twit = TwitDtoMapper.toTwitDto(like.getTwit(),reqUser);

            LikeDto likeDto = new LikeDto();
            likeDto.setId(like.getId());
            likeDto.setTwit(twit);
            likeDto.setUser(user);
            likeDtos.add(likeDto);

        }
        return likeDtos;

    }
}
