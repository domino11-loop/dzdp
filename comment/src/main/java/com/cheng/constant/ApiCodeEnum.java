package com.cheng.constant;

/**
 * Api会员验证相关常量定义
 * Created by cheng on 2017/7/22.
 */
public enum ApiCodeEnum {
    SUCCESS(0, "ok"),
    USER_NOT_EXISTS(1, "会员不存在!进行注册"),
    REPEAT_REQUEST(2, "验证码有效时间内不需重复请求!"),
    SEND_FAIL(3, "发送验证码失败!请稍后重试!"),
    CODE_INVALID(4, "验证码已失效!请重新请求验证码!"),
    CODE_ERROR(5, "验证码不正确!"),
    BUY_FAIL(6, "购买失败!"),
    NOT_LOGGED(7, "没有登录!"),
    NO_AUTH(8, "没有权限!"),
    USER_EXIST(9, "会员已存在");

    private Integer errno;
    private String msg;

    ApiCodeEnum(Integer errno, String msg) {
        this.errno = errno;
        this.msg = msg;
    }

    public Integer getErrno() {
        return errno;
    }

    public String getMsg() {
        return msg;
    }
}
