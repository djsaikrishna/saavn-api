const makeAudio = (audioUrl) => {
   if (!audioUrl.includes("preview.saavncdn.com")) {
      return false;
   }
   let returnObj = {};
   let quality = [12, 48, 96, 160, 320];

   let baseDomainReplacedUrl = audioUrl.replace(
      "preview.saavncdn.com",
      "aac.saavncdn.com"
   );

   baseDomainReplacedUrl = baseDomainReplacedUrl.split("_");
   baseDomainReplacedUrl.splice(-2);
   baseDomainReplacedUrl = baseDomainReplacedUrl.toString();

   quality.forEach((item) => {
      returnObj[`${item}kbps`] = `${baseDomainReplacedUrl}_${item}.mp4`;
   });
   return returnObj;
};

export default makeAudio;
