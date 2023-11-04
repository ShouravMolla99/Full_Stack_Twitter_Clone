package com.shourav.twitter_clone.controller;


import com.shourav.twitter_clone.dto.TwitDto;
import com.shourav.twitter_clone.dto.mapper.TwitDtoMapper;
import com.shourav.twitter_clone.exception.TwitException;
import com.shourav.twitter_clone.exception.UserException;
import com.shourav.twitter_clone.model.Twit;
import com.shourav.twitter_clone.model.User;
import com.shourav.twitter_clone.request.TwitReplyReques;
import com.shourav.twitter_clone.response.ApiResponse;
import com.shourav.twitter_clone.service.TwitService;
import com.shourav.twitter_clone.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/twits")
public class TwitController {

    @Autowired
    private TwitService twitService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<TwitDto> createTwit(@RequestBody Twit req, @RequestHeader("Authorization") String jwt) throws UserException, TwitException{
        User user=userService.findUserProfileByJwt(jwt);

        Twit twit = twitService.createTwit(req,user);

        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit,user);
        return new ResponseEntity<>(twitDto, HttpStatus.CREATED);
    }
    @PostMapping("/reply")
    public ResponseEntity<TwitDto> replyTwit(@RequestBody TwitReplyReques req, @RequestHeader("Authorization") String jwt) throws UserException, TwitException{
        User user=userService.findUserProfileByJwt(jwt);

        Twit twit = twitService.createdReply(req,user);

        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit,user);
        return new ResponseEntity<>(twitDto, HttpStatus.CREATED);
    }

    @PutMapping("/{twitId}/retwit")
    public ResponseEntity<TwitDto> reTwit(@PathVariable Long twitId, @RequestHeader("Authorization") String jwt) throws UserException, TwitException{

        User user=userService.findUserProfileByJwt(jwt);

        Twit twit = twitService.retwit(twitId,user);

        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit,user);

        return new ResponseEntity<>(twitDto, HttpStatus.OK);
    }

    @DeleteMapping("/{twitId}")
    public ResponseEntity<ApiResponse> deleteTwit(@PathVariable Long twitId, @RequestHeader("Authorization") String jwt) throws UserException, TwitException{

        User user=userService.findUserProfileByJwt(jwt);

        twitService.deleteTwitById(twitId,user.getId());

        ApiResponse res = new ApiResponse();
//        res.setMessage("Twit deleted Successfully");
//        res.setStatus(true);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<TwitDto>> getAllTwits(@RequestHeader("Authorization") String jwt) throws UserException, TwitException{

        User user=userService.findUserProfileByJwt(jwt);

        List<Twit> twits= twitService.findAllTwit();

        List<TwitDto> twitDtos = TwitDtoMapper.toTwitDtos(twits,user);

        return new ResponseEntity<>(twitDtos, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<TwitDto>> getUsersAllTwits(@PathVariable Long userId, @RequestHeader("Authorization") String jwt) throws UserException, TwitException{

        User user=userService.findUserProfileByJwt(jwt);

        List<Twit> twits= twitService.getUserTwit(user);

        List<TwitDto> twitDtos = TwitDtoMapper.toTwitDtos(twits,user);

        return new ResponseEntity<>(twitDtos, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}/likes")
    public ResponseEntity<List<TwitDto>> findTwitByLikesContainesUser(@PathVariable Long userId, @RequestHeader("Authorization") String jwt) throws UserException, TwitException{

        User user=userService.findUserProfileByJwt(jwt);

        List<Twit> twits= twitService.findByLikesContainsUser(user);

        List<TwitDto> twitDtos = TwitDtoMapper.toTwitDtos(twits,user);

        return new ResponseEntity<>(twitDtos, HttpStatus.OK);
    }
}
