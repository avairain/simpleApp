import axios from 'axios';

interface SubmitUserParams { user: string }
interface SubmitUserResponse { isAdmin: boolean }

const url = 'http://127.0.0.1:6060'

export const submitUser = (params: SubmitUserParams) =>
  axios.post<SubmitUserResponse>(`${url}/simple/login`, params);

interface GetListParams { }
interface GetListResponse {
  list: {
    id: string;
    info: string;
  }[]
}
export const getList = (params: GetListParams = {}) => axios.post<GetListResponse>(`${url}/simple/list`, params);

interface DelParams {
  id: string
}
export const delList = (params: DelParams) => axios.delete(`${url}/simple/del`, { data: params });

interface updateParams {
  id: string;
  info: string;
}
export const update = (params: updateParams) => axios.post(`${url}/simple/update`, params);