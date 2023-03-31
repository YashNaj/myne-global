import PdfPrinter from "pdfmake";
import type { TFontDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import blobStream, { type IBlobStream } from "blob-stream";
import logo from "$lib/images/blue_myne_logo.png";
import { promises as fs } from "fs";
import fetch from "node-fetch";

async function loadFont(url: string): Promise<Buffer> {
    const response = await fetch(import.meta.env.VITE_PUBLIC_URL + url);
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }

async function blobToBase64(blob: Blob) {
  const buffer = Buffer.from(await blob.arrayBuffer());
  return `data:${blob.type};base64,${buffer.toString("base64")}`;
}
const fonts: TFontDictionary = {
  NotoSans: {
    normal: await loadFont("/fonts/NotoSans-Medium.ttf"),
    bold: await loadFont("/fonts/NotoSans-Bold.ttf"),
  },
};
const printer = new PdfPrinter(fonts);

async function generateCertificate(cardId: string): Promise<Blob> {
  const dd: TDocumentDefinitions = {
    content: [{ text: "Myne Item History and Details", style: "h1" }, { text: 'Card ID:' +  cardId }],
    styles: {
      h1: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 16],
      },
      h2: {
        fontSize: 16,
        margin: [0, 10, 0, 10],
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: "black",
        fillColor: "#e7e7e7",
        margin: [0, 2, 0, 2],
      },
      link: {
        decoration: "underline",
        color: "blue",
      },
    },
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
