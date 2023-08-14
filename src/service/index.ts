import axios from 'axios';

interface SubmitUserParams { user: string }
interface SubmitUserResponse { isAdmin: boolean }

const url = 'https://fuzzy-computing-machine-vp9q57vvqgj26q4j-6060.app.github.dev'

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