const makeImages = (imageUrl) => {
   if (!imageUrl) return false;
   if (
      imageUrl.includes("50x50") ||
      imageUrl.includes("150x150") ||
      imageUrl.includes("500x500")
   ) {
      let baseImageUrl = imageUrl.split("-");
      baseImageUrl.pop();
      baseImageUrl = baseImageUrl.join("-");

      return {
         "50x50": `${baseImageUrl}-50x50.jpg`,
         "150x150": `${baseImageUrl}-150x150.jpg`,
         "500x500": `${baseImageUrl}-500x500.jpg`,
      };
   }
   return imageUrl;
};

export default makeImages;
