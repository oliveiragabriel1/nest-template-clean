abstract class AbstractController<I, O> {
  public abstract run(input: I, ...args: unknown[]): Promise<O>;
}

export { AbstractController };
