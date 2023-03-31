import PdfPrinter from "pdfmake";
import type { TFontDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import blobStream, { type IBlobStream } from "blob-stream";
import { selectedCard } from "../../../store";
const fonts: TFontDictionary = {
  NotoSans: {
    normal: "src/lib/server/pdf/fonts/NotoSans-Medium.ttf",
    bold: "src/lib/server/pdf/fonts/NotoSans-Bold.ttf",
  },
};
const printer = new PdfPrinter(fonts);
const cardID = $selectedCard.id;
console.log(cardId);
async function blobToBase64(blob: Blob) {
  const buffer = Buffer.from(await blob.arrayBuffer());
  return `data:${blob.type};base64,${buffer.toString("base64")}`;
}

async function generateCertificate(fonts, cardId: string): Promise<Blob> {
  const dd: TDocumentDefinitions = {
    content: [{ text: "Testing the PDFMake" }, { text: cardId }],
    defaultStyle: {
      font: "NotoSans",
    },
  };

  return new Promise((resolve, reject) => {
    const pdf = printer.createPdfKitDocument(dd);

    pdf
      .pipe(blobStream())
      .on("finish", function (this: IBlobStream) {
        console.log("Finished generating PDF");
        resolve(this.toBlob("application/pdf"));
      })
      .on("error", (err) => {
        console.error("err", err);
        reject(err);
      });

    pdf.end();
  });
}

export default generateCertificate;
