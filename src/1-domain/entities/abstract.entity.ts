abstract class AbstractEntity<I> {
  private props: I;

  /**
   * Constructor for AbstractEntity
   * @param props
   */
  constructor(props: I) {
    this.props = props;
  }

  /**
   * This method is used to return the values added in the class
   * @returns {props}
   */
  public exportValues(): I {
    return { ...this.props };
  }
}

export { AbstractEntity };
