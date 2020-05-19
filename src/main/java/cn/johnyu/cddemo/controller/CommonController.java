package cn.johnyu.cddemo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommonController {
    @RequestMapping(value = "/books")
    public String findAllBooks(){
        return "all books";
    }
}
