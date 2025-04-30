declare module 'rspack-chain' {
  export default class Config {
    output: {
      publicPath(value: string): this;
      end(): this;
    };
    module: {
      rule(name: string): {
        batch(processor: (source: string) => string): this;
        end(): this;
      };
    };
    experiments: {
      rspackFuture: {
        bundlerInfo: {
          force(value: boolean): this;
        };
      };
    };
    end(): this;
  }
}
