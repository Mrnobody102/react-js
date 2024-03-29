import axios from "axios";
import { NUM_RECORDS_PER_REQUEST } from "../../const/paging";

const baseUrl = "http://localhost:8080/setting";

export const getProcessHistory = async (pageIndex, pageSize) => {
  try {
    const response = await axios.get(baseUrl + "/process_history_list", {
      params: {
        page: pageIndex,
        size: pageSize,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    throw e; // Rethrow the error to handle it in the component
  }
};
export const getFilteredProcessHistory = async (
  startDate,
  endDate,
  handle,
  accessIp,
  processType,
  pageIndex,
  pageSize,
  numRecordsPerRequest = NUM_RECORDS_PER_REQUEST
) => {
  try {
    // Calculate the actual pageIndex based on the NUM_RECORDS_PER_REQUEST
    const actualPageIndex = Math.floor(pageIndex / (numRecordsPerRequest / pageSize));
    const response = await axios.get(baseUrl + "/process_history/filter", {
      params: {
        startDate,
        endDate,
        handle,
        accessIp,
        processType,
        // page: pageIndex,
        // size: pageSize,
        page: actualPageIndex,
        size: numRecordsPerRequest
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    throw e; // Rethrow the error to handle it in the component
  }
};