import { UploadFileReq, UploadFileResp } from './dto';
import { axiosApp } from 'utils/axios';
import { ResponseData } from 'module/common/type';

export const uploadFile = async (
  data: UploadFileReq
): Promise<ResponseData<UploadFileResp>> => {
  const formData = new FormData();
  formData.append('file', data.file);
  const result = await axiosApp.post(`/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result.data;
};
