type User = {
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
}

type ErrorUser = {
  errorType: string;
  message: string;
}

type ResultAuthorization = User | ErrorUser

export type { User, ErrorUser, ResultAuthorization };
