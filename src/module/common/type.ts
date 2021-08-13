export interface PaginationResp<T> {
  data: T[];
  message: string;
  meta: {
    perPage: number;
    page: number;
    totalPage: number;
    total: number;
  };
}

export interface ResponseData<T> {
  data: T;
  message: string;
}

export interface ListItem<T> {
  label: string;
  value: T;
}

export interface ListRespParams {
  perPage?: number;
  page?: number;
}
