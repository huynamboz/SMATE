import { $http } from "@/http/ofetch";

export const loginApi = async (data: any) => {
  return $http('/auth/login', {
    method: 'POST',
    body: data,
  });
}