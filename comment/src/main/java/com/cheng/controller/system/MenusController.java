package com.cheng.controller.system;

import com.cheng.constant.PageCodeEnum;
import com.cheng.dto.MenuDto;
import com.cheng.dto.MenuForMoveDto;
import com.cheng.dto.MenuForZtreeDto;
import com.cheng.dto.PageCodeDto;
import com.cheng.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 菜单相关控制层
 * Created by cheng on 2017/7/22.
 */

@RequestMapping("/menus")
@RestController
public class MenusController {

    @Autowired
    private MenuService menuService;

    /**
     * 获取菜单列表
     */
    @RequestMapping(method = RequestMethod.GET)
    public List<MenuForZtreeDto> getList() {
        return menuService.getZtreeList();
    }

    /**
     * 新增菜单
     */
    @RequestMapping(method = RequestMethod.POST)
    public PageCodeDto add(MenuDto menuDto) {
        PageCodeDto result;
        if(menuService.add(menuDto)) {
            result = new PageCodeDto(PageCodeEnum.ADD_SUCCESS);
        } else {
            result = new PageCodeDto(PageCodeEnum.ADD_FAIL);
        }
        return result;
    }

    /**
     * 菜单排序
     */
    @RequestMapping(value="/{dropNodeId}/{targetNodeId}/{moveType}",method = RequestMethod.PUT)
    public PageCodeDto order(MenuForMoveDto menuForMoveDto) {
        PageCodeDto result;
        if(menuService.order(menuForMoveDto)) {
            result = new PageCodeDto(PageCodeEnum.ORDER_SUCCESS);
        } else {
            result = new PageCodeDto(PageCodeEnum.ORDER_FAIL);
        }
        return result;
    }

    /**
     * 根据主键获取菜单dto
     */
    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public MenuDto getById(@PathVariable("id") Long id) {
        return menuService.getById(id);
    }

    /**
     * 修改菜单
     */
    @RequestMapping(value="/{id}",method = RequestMethod.PUT)
    public PageCodeDto modify(MenuDto menuDto) {
        PageCodeDto result;
        if(menuService.modify(menuDto)) {
            result = new PageCodeDto(PageCodeEnum.MODIFY_SUCCESS);
        } else {
            result = new PageCodeDto(PageCodeEnum.MODIFY_FAIL);
        }
        return result;
    }

    /**
     * 删除菜单
     */
    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    public PageCodeDto remove(@PathVariable("id")Long id) {
        PageCodeDto result;
        MenuDto menuDto = new MenuDto();
        menuDto.setParentId(id);
        List<MenuDto> list = menuService.getList(menuDto);
        if(list.size() > 0) {
            result = new PageCodeDto(PageCodeEnum.SUB_MENU_EXISTS);
        } else {
            if(menuService.remove(id)) {
                result = new PageCodeDto(PageCodeEnum.REMOVE_SUCCESS);
            } else {
                result = new PageCodeDto(PageCodeEnum.REMOVE_FAIL);
            }
        }
        return result;
    }
}