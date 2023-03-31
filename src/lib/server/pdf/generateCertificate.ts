import PdfPrinter from "pdfmake";
import type { TFontDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import blobStream, { type IBlobStream } from "blob-stream";
import myneLogo from "$lib/images/blue_myne_logo.png";
import { promises as fs } from "fs";
import fetch from "node-fetch";
import { selectedCard } from "$lib/store";
async function loadFont(url: string): Promise<Buffer> {
  const response = await fetch(import.meta.env.VITE_PUBLIC_URL + url);
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}
async function blobToBase64(blob: Blob) {
  const buffer = Buffer.from(await blob.arrayBuffer());
  return `data:${blob.type};base64,${buffer.toString("base64")}`;
}
async function loadImageToBase64(path: string): Promise<string> {
  const response = await fetch(import.meta.env.VITE_PUBLIC_URL + path);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

const fonts: TFontDictionary = {
  NotoSans: {
    normal: await loadFont("/fonts/NotoSans-Medium.ttf"),
    bold: await loadFont("/fonts/NotoSans-Bold.ttf"),
  },
};
const printer = new PdfPrinter(fonts);

async function generateCertificate(cardId: string): Promise<Blob> {
  const logo = await loadImageToBase64(myneLogo);
  const dd: TDocumentDefinitions = {
    content: [
      {
        columns: [
          {
            image: logo,
            width: 200,
            allignment: "left",
          },
          {
            text: "Item History and Detail Report",
            style: "h1",
            alignment: "left",
          },
        ],
        // Optional space between columns
        columnGap: 10,
        verticalAllignment: "center",
      },
      {
        canvas: [
          {
            type: "line",
            x1: 0,
            y1: 5,
            x2: 515, // Adjust the length of the line as needed
            y2: 5,
            lineWidth: 1,
            stroke: "#002d72",
          },
        ],
      },
      {
        text: "Item Details",
        style: "sectionHeader",
        alignment: "left",
      },
      {
        table: {
          widths: ["33%", "33%", "34%"],
          body: [
            ["Header 1", "Header 2", "Header 3"],
            ["", "", ""],
            ["", "", ""],
          ],
        },
      },
      {
        text: "Photos",
        style: "sectionHeader",
        alignment: "left",
      },
      {
        table: {
          widths: ["*"],
          heights: ["*", "auto"],
          body: [["No photos"]],
        },
        layout: "noBorders",
      },
      {
        text: "Owners",
        style: "sectionHeader",
        alignment: "left",
      },
      {
        table: {
          widths: ["33%", "33%", "34%"],
          body: [
            ["Owner 1", "Owner 2", "Owner 3"],
            ["", "", ""],
            ["", "", ""],
          ],
        },
      },
      {
        text: "Repair History",
        style: "sectionHeader",
        alignment: "left",
      },
      {
        table: {
          widths: ["*", "*", "*"],
          body: [
            ["Repair 1", "Repair 2", "Repair 3"],
            ["", "", ""],
            ["", "", ""],
          ],
        },
      },
      {
        text: "Documents",
        style: "sectionHeader",
        alignment: "left",
      },
      {
        text: "Status",
        style: "sectionHeader",
        alignment: "left",
      },
    ],
    styles: {
      h1: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 16],
        color: "#002d72",
      },
      sectionHeader: {
        fontSize: 18,
        bold: true,
        margin: [0, 20, 0, 16],
        color: "#002d72",
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
