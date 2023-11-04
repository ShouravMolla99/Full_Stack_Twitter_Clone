package com.shourav.twitter_clone.controller;


import com.shourav.twitter_clone.config.JwtProvider;
import com.shourav.twitter_clone.exception.UserException;
import com.shourav.twitter_clone.model.User;
import com.shourav.twitter_clone.model.Verification;
import com.shourav.twitter_clone.repository.UserRepository;
import com.shourav.twitter_clone.response.AuthResponse;
import com.shourav.twitter_clone.service.CustomUserDetailsServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private CustomUserDetailsServiceImplementation customUserDetails;


    @PostMapping("/signup")
    public ResponseEntity<AuthResponse>createUserHandler(@RequestBody User user) throws UserException {

        System.out.println("user"+user);

        String email=user.getEmail();
        String password=user.getPassword();
        String fullName=user.getFullName();
        String birthDate=user.getBirthDate();

        User isEmailExist=userRepository.findByEmail(email);

        if (isEmailExist!=null){
            throw new UserException("This Email is already used with another account");
        }

        User createdUser=new User();
        createdUser.setEmail(email);
        createdUser.setFullName(fullName);
        createdUser.setPassword(passwordEncoder.encode(password));
        createdUser.setBirthDate(birthDate);
        createdUser.setVerification(new Verification());

        User savedUser=userRepository.save(createdUser);

        Authentication authentication=new UsernamePasswordAuthenticationToken(email,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.generateToken(authentication);

        AuthResponse res=new AuthResponse(token,true);

        return new ResponseEntity<AuthResponse>(res, HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody User user){
        String username=user.getEmail();
        String password=user.getPassword();

        Authentication authentication=authenticate(username,password);

        String token = jwtProvider.generateToken(authentication);

        AuthResponse res=new AuthResponse(token,true);

        return new ResponseEntity<AuthResponse>(res, HttpStatus.ACCEPTED);
    }

    private Authentication authenticate(String username, String password) {

        UserDetails userDetails=customUserDetails.loadUserByUsername(username);

        if (userDetails==null){
            throw new BadCredentialsException("invalid username...");

        }
        if (!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new BadCredentialsException("invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
    }
}
