import fs from "fs";
import fetch from "node-fetch";
import jsonData from "./../data/PeopleNode.json" with { type: "json" };

async function downloadImage(url, filename) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  }

  const buffer = await response.arrayBuffer();
  fs.writeFileSync(filename, Buffer.from(buffer));
  console.log(`Image saved as ${filename}`);
}

jsonData.forEach((data) => {
    const imageUrl = data.image;
    console.log(imageUrl);
    const filename = "./../data/image/" + data.file;
    console.log(filename);
    downloadImage(imageUrl, filename).catch(console.error);
});

