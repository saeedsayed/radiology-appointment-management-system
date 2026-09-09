import STATUS from "../constants/http-status.constant.js";

class appError extends Error {
  [x: string]: any;
  code: number | undefined;
  status!: STATUS;
  data!: unknown;
  constructor() {
    super();
  }
  create(message: string, code: number, status: STATUS) {
    this.message = message;
    this.code = code;
    this.status = status;
    this.data;
    return this;
  }
}

export default new appError();
