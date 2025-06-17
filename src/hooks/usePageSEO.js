// src/hooks/usePageSEO.js
import { useLocation } from 'react-router-dom';
import seoConfig from '../config/seoConfig';

export const usePageSEO = () => {
  const { pathname } = useLocation();
  return seoConfig[pathname] || seoConfig["/"]; // fallback to home
};