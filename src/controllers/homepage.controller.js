import HomePageWorker from "../workers/homepage.worker.js";

const homePageController = async (req, res) => {
  const homePageWorker = new HomePageWorker();
  return res.json(await homePageWorker.getHomePageData());
};

export default homePageController;
