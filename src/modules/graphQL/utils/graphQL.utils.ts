import { GraphQLQueryParams } from '../types/graphQL.types';

export class GraphQLUtils {
  /**
   * Parses query params object to a proper string format, which can be injected inside GraphQL query and has the next
   * structure: "key1: value1, key2: value2 ... keyN: valueN".
   * Param object keys are used as a names for GraphQL params, keys with falsy values are filtered out.
   */
  static parseQueryParams(params: GraphQLQueryParams): string {
    const str = Object.entries(params)
      .filter((entry) => !!entry[1])
      .map(([key, value]) => this.parseQueryParamKeyValue(key, value))
      .join(', ');

    return str ? '(' + str + ')' : '';
  }

  static parseQueryParamKeyValue(key: string, value: any) {
    return key + ': ' + value;
  }
}
