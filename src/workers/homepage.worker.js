import MainWorker from "./main.worker.js";

class HomePageWorker extends MainWorker {
  async getHomePageData() {
    const homeRes = await this.http(this.baseCalls.getLaunchData, true);
    delete homeRes.history;

    return homeRes;
  }
}

export default HomePageWorker;
