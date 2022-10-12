export abstract class Jwt {
  abstract verify(token: string): Promise<string | object>;
  abstract generate(payload: string | object): Promise<string>;
}
