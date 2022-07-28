class Left<L, R> {
  public readonly value: L;

  /**
   * Constructor for Left<L, R>
   * @param value
   */
  constructor(value: L) {
    this.value = value;
  }

  /**
   * @returns {boolean} Boolean
   */
  public isLeft(): this is Left<L, R> {
    return true;
  }

  /**
   * @returns {boolean} Boolean
   */
  public isRight(): this is Right<L, R> {
    return false;
  }
}

class Right<L, R> {
  public readonly value: R;

  /**
   * Constructor for Right<L, R>
   * @param value
   */
  constructor(value: R) {
    this.value = value;
  }

  /**
   * @returns {boolean} Boolean
   */
  public isLeft(): this is Left<L, R> {
    return false;
  }

  /**
   * @returns {boolean} Boolean
   */
  public isRight(): this is Right<L, R> {
    return true;
  }
}

/**
 * @param value
 * @returns {Left<L, R>}
 */
const left = <L, R>(value: L): Left<L, R> => new Left<L, R>(value);

/**
 * @param value
 * @returns {Right<L, R>}
 */
const right = <L, R>(value: R): Right<L, R> => new Right<L, R>(value);
type Either<L, R> = Left<L, R> | Right<L, R>;

export { left, right, Either };
