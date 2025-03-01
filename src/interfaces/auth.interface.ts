export interface registerUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export interface loginUseCaseRequest {
  email: string;
  password: string;
}
