import axios from 'axios';
import { LoginResponse } from '../types';

interface LoginDTO {
  email: string;
  password: string;
}

export const loginWithEmailAndPassword = async ({
  email,
  password,
}: LoginDTO) => {
  return await axios.post<LoginResponse>('http://localhost:8000/login', {
    email,
    password,
  });
};
