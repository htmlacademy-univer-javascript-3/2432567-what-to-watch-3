type DataAuthorization = {
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
}
type User = DataAuthorization

type DataUnauthorization = {
  errorType: string;
  message: string;
}

type ResultAuthorization = DataAuthorization | DataUnauthorization

export type { DataAuthorization, User, DataUnauthorization, ResultAuthorization };
