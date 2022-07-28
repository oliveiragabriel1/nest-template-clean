import { IHasherService } from '@/2-business/services';
import bcrypt, { genSalt } from 'bcrypt';

class HasherService implements IHasherService {
  /**
   * This method creates a new salt and uses it to hash a given string value.
   * A salt is a random string that is used to hash a string value,
   * the more rounds the more secure the hash is, but also uses more
   * time (processment) to generate the hash.
   * @param {string} s - string to be hashed by bcrypt
   * @returns {Promise<string>}
   */
  public async create(s: string): Promise<string> {
    const salt = await genSalt(12);
    return bcrypt.hash(s, salt);
  }

  /**
   * This method compares a given string value with a hashed string value
   * and returns a boolean indicating if the values match.
   * @param value - string to be compared to a hashed value
   * @param hashed - hashed value to be compared to
   * @returns {Promise<boolean>}
   */
  public async compare(value: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(value, hashed);
  }
}

export { HasherService };
