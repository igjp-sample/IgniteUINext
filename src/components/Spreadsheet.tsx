import {
  IgrExcelModule,
  Workbook,
  WorkbookLoadOptions,
} from "igniteui-react-excel";
import {
  IgrSpreadsheet,
  IgrSpreadsheetModule,
} from "igniteui-react-spreadsheet";
import { useEffect, useRef } from "react";

IgrExcelModule.register();
IgrSpreadsheetModule.register();

const loadFromUrl = (url: string): Promise<Workbook> => {
  return new Promise<Workbook>((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.onload = (): void => {
      const data = new Uint8Array(req.response);
      Workbook.load(
        data,
        new WorkbookLoadOptions(),
        (w) => {
          resolve(w);
        },
        (e) => {
          reject(e);
        }
      );
    };
    req.send();
  });
};

const Spreadsheet = () => {
  const spreadsheetRef = useRef<IgrSpreadsheet>(null);
  const url = "/sample.xlsx";

  useEffect(() => {
    if (spreadsheetRef && spreadsheetRef.current) {
      loadFromUrl(url).then((w) => {
        spreadsheetRef.current!.workbook = w;
      });
    }
  }, [spreadsheetRef]);

  return (
    <div style={{ height: "700px" }}>
      <IgrSpreadsheet ref={spreadsheetRef} height="100%" isFormulaBarVisible />
    </div>
  );
};

export default Spreadsheet;
