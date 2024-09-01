import axios from 'axios';

const API_URL = 'http://localhost:8081/report'; // http://localhost:8081/report/get?userId=2&reportId=2

export const getReport = (userId, reportId) => {
  return axios.get(`${API_URL}/get?userId=${userId}&reportId=${reportId}`);
}

export const generateReport = (userId, reportName, requirementsFile, resumesZipFile) => {
  const formData = new FormData();

  formData.append('requirements', requirementsFile);
  formData.append('resumesZip', resumesZipFile);

  return axios.post(`${API_URL}/generate`, formData, {
    params: {
      userId: userId,
      reportName: reportName
    },
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}