package com.cheng.controller.system;

import com.cheng.constant.PageCodeEnum;
import com.cheng.dto.PageCodeDto;
import com.cheng.dto.UserDto;
import com.cheng.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Level;

/**
 * 用户相关
 * Created by cheng on 2017/7/22.
 */
@RequestMapping("/users")
@RestController
public class UsersController {

    @Autowired
    private UserServiceImpl userService;

    /**
     * 获取用户列表
     */
    @RequestMapping(method = RequestMethod.GET)
    public List<UserDto> getList() {
        return userService.getList();
    }

    /**
     * 新增用户
     */
    @RequestMapping(method = RequestMethod.POST)
    public PageCodeDto add(UserDto userDto) {
        PageCodeDto result;
        if (userService.add(userDto)) {
            result = new PageCodeDto(PageCodeEnum.ADD_SUCCESS);
        } else {
            result = new PageCodeDto(PageCodeEnum.USERNAME_EXISTS);
        }
        return result;
    }

    /**
     * 根据主键获取用户dto
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public UserDto getByI(@PathVariable("id") Long id) {
        return userService.getById(id);
    }

    /**
     * 修改用户
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public PageCodeDto modify(UserDto userDto) {
        PageCodeDto result;
        if (userService.modify(userDto)) {
            result = new PageCodeDto(PageCodeEnum.MODIFY_SUCCESS);
        } else {
            result = new PageCodeDto(PageCodeEnum.USERNAME_EXISTS);
        }
        return result;
    }

    /**
     * 删除用户
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public PageCodeDto remove(@PathVariable("id") Long id) {
        PageCodeDto result;
        if (userService.remove(id)) {
            result = new PageCodeDto(PageCodeEnum.REMOVE_SUCCESS);
        } else {
            result = new PageCodeDto(PageCodeEnum.REMOVE_FAIL);
        }
        return result;
    }
}
