const bannerModule = require('../../../model/banner/banner');

class BannerService {
	constructor() {
		this.instance = bannerModule;
	}
	async addBanner(data) {
		const { title, desc, imgUrl, is_top } = data;
		if (!title || !desc || !imgUrl) {
			return { code: 0, data: '缺少字段' };
		}
		try {
      bannerModule.create({ title: title, desc: desc, imgUrl: imgUrl, is_top: is_top });
      return { code: 1, data: '添加成功' }
		} catch (err) {
			return { code: 0, data: err };
		}
  }
  async getBanner(data) {
    let {key} = data

  }
}

module.exports = new BannerService();
