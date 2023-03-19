const XLSX = require('xlsx');
// const path = require('path');

// 엑셀 파일에서 특정 컬럼 데이터로만 이루어진 배열을 반환하는 함수입니다.
export default function getWords() {
  const filepath = '/Users/pjh/Desktop/meta-recongnition-test/src/assets/korean_list.xls';

  const sheetname = 'sheet';
  const column = 'B';
  // // 엑셀 파일을 읽어옵니다.
  const workbook = XLSX.readFile(filepath);
  console.log(1, workbook);
  // // 원하는 시트를 선택합니다.
  // const worksheet = workbook.Sheets[sheetname];
  // // 선택한 시트에서 컬럼 데이터만 추출합니다.
  // const columnData = XLSX.utils
  //   .sheet_to_json(worksheet, { header: 1 })
  //   .map((row: any) => row[column])
  //   .filter((data: any) => data !== undefined);
  // return columnData;
}
