type Payload = {
  code?: number;
  data?: unknown;
  stack?: string;
};

export class ApiError extends Error {
  payload: Payload;
  constructor(message: string, payload: Payload = {}) {
    super(message);
    this.name = 'ApiError';
    this.message = message;
    this.payload = payload;
    if (payload.stack) {
      this.stack = payload.stack;
    }
  }
  toJSON(): object {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      payload: this.payload,
    };
  }
}

export class PermissionError extends Error {
  payload: Payload;
  constructor(message: string, payload: Payload = {}) {
    super(message);
    this.name = 'PermissionError';
    this.message = message;
    this.payload = payload;
    if (payload.stack) {
      this.stack = payload.stack;
    }
  }
  toJSON(): object {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      payload: this.payload,
    };
  }
}
