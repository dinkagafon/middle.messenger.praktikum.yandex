abstract class BaseAPI {
  abstract create?(param: any): Promise<any>;

  abstract request?(param: any): Promise<any>;

  abstract update?(param: any): Promise<any>;

  abstract delete?(param: any): Promise<any>;
}

export default BaseAPI;
