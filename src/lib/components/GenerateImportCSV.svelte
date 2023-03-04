<script lang="ts">
  import { firstCapital } from "$lib/caps";
  import { Download, Icon } from "svelte-hero-icons";
  export let tableProps: string[] = [];
  export let categoryKey: string;
  $: categoryKey = categoryKey;
  $: templateSlug = "template" + firstCapital(categoryKey) + ".csv";

  $: tableProps = tableProps;
  function generateCSVTemplate(fields) {
    const headerRow = ["Item", ...fields]; // Add "Item Name" as the first column
    const csvRows = [headerRow];

    // Create a string of commas for the blank "Item Name" column
    const blankColumn = Array(fields.length).fill("").join(",");

    // Create a row with the blank column and the field names
    const exampleRow = ["Example Item", ...fields.map((field) => ` ${field} `)];
    csvRows.push(exampleRow);
    // Convert each cell to a string and add formatting to remove whitespace
    const formattedRows = csvRows.map((row) =>
      row.map((cell) => `"${cell.toString().trim()}"`).join(",")
    );

    // Join all rows into a single string
    const csvString = formattedRows.join('\r\n');

    // Create a blob from the csv string
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });

    // Create a temporary URL to download the blob
    const url = URL.createObjectURL(blob);

    // Create a link element and click it to trigger the download
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", templateSlug);
  link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function handleClick() {
    const fields = tableProps; // Replace with your fields array
    generateCSVTemplate(fields);
  }
</script>

<div class="template-download-button mt-2 flex justify-center py-4">
  <button
    on:click={handleClick}
    class="btn btn-primary normal-case flex-nowrap "
  >
    <Icon src={Download} size="24px" />
    Download Template</button
  >
</div>
