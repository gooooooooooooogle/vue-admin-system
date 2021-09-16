import axios from "axios";

export function getUserByName (userName) {
  const url = 'http://192.168.2.123:3003/person/' + userName;
  return axios.get(url);
}

export function getUserByNameAndPwd (userName, pwd) {
  const url = 'http://192.168.2.123:3003/person/' + userName + '/' + pwd;
  return axios.get(url);
}

export function createUser (user) {
  const url = 'http://192.168.2.123:3003/person/';
  return axios.post(url, user);
}

