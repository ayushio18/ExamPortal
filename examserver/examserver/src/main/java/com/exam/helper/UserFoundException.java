package com.exam.helper;

public class UserFoundException extends Exception{

    public UserFoundException(){
        super("User with this database is already there. Try with another one");
    }

    public UserFoundException(String msg){
        super(msg);
    }
}
