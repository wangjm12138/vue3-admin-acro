import { baseURL } from './axios.config';
import { post, Response } from '@/api/http';
export const baseAddress = baseURL;

export const test = '/test'
/**
 *  
 * @returns
 */
export function login2(data: any) {
  debugger;
  return post({
    url: '/login',
    data
  });
}
export const login = '/login'

export const updateUserInfo = '/updateUser'

export const addUserInfo = '/addUser'

export const getMenuListByRoleId = '/getMenusByRoleId'

export const getAllMenuByRoleId = '/getAllMenuByRoleId'

export const deleteUserById = '/deleteUserById'

export const getDepartmentList = '/getDepartmentList'

export const addDepartment = '/addDepartment'

export const getRoleList = '/getRoleList'

export const getMenuList = '/getMenuList'

export const getParentMenuList = '/getParentMenuList'

export const getTableList = '/getTableList'

export const getCardList = '/getCardList'

export const getCommentList = '/getCommentList'
