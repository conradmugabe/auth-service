export abstract class Hash {
  abstract compare(plainText: string, hashed: string): Promise<boolean>;
  abstract hash(plainText: string): Promise<string>;
}
