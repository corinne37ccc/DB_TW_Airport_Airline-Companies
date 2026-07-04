// 資料來源設定 — 更新資料來源時只需改這個檔案，不需要動 HTML/JS 邏輯
const SHEETS = {
  annual: '1Q6ZHvICrsjJwSn9RV5QRO8rSRoBppzAlOJJhllpRqJQ', // 表40 航空公司國際航線班機載客率（年度×航空公司×機場彙總）
  route:  '14PufeB_U3-SgyzLAg2dey627gWNwD00vb0jV_8kVw8M', // 表43 航空公司國際航線各航點班機載客率（年度×航空公司×機場×航點）
  info:   '1fhIqA8UkSDXxfM413iJ4CVm_3wNFr4lJ-Znhg9v_iFc', // 航空公司基本資訊（IATA、國家/地區、營運狀態）
  dest:   '1iU5Jrrh2dsHS047JKEyJJIE2SZnu5mkPzYY6dISBb_g', // 機場代碼對照表（航點 IATA、國家/地區）
};

const CONFIG = {
  LATEST_YEAR: 2025,
  BASE_YEAR: 2015,
};
