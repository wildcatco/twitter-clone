export interface User {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
    username: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
