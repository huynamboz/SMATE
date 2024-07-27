import { $http } from "@/http/ofetch";

export const getAllTimelines = async () => {
  return $http('/timelines', {
    method: 'GET',
  });
}

export const getTimeLine = async (id: string) => {
  return $http(`/timelines/${id}`, {
    method: 'GET',
  });
}

export const createTimeline = async (data: any) => {
  return $http('/timelines', {
    method: 'POST',
    body: data,
  });
}