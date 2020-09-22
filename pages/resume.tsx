import { Avatar, Divider } from 'antd';

const data = {
  教育背景: [['2015.09 ~ 2019.07', '华南理工大学', '自动化专业']],
  实习经历: [
    ['2019.02 ~ 2019.04', '魔力信息科技', 'H5 前端开发实习生'],
    ['2018.10 ~ 2019.06', '广州戈子科技', 'Web 前端开发工程师'],
    ['2018.07 ~ 2018.09', '广州有信科技', '电商小程序运营实习生'],
  ],
  项目经历: [
    ['2019.02 ~ Now', '个人站点', 'https://decworld.me'],
    ['2016.10 ~ Now', '个人博客', 'https://www.ynewtime.com'],
  ],
  荣誉记录: [['2018.03 ~ 2018.05', '华为网络技术大赛', '粤港澳赛区 Top 12']],
  专业技能: [
    ['Web 前端技术', 'React 技术栈', '精通'],
    ['Web 前端技术', 'HTML5 / CSS', '精通'],
    ['Web 前端技术', '网页设计和排版', '熟悉'],
    ['Python 开发', 'Web 爬虫与自动化测试', '熟悉'],
  ],
};

// https://juejin.im/post/6844903846766968845
function isUrl(url: string) {
  return /^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+))(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(
    url,
  );
}

export default function ResumePage() {
  return (
    <div className="h-full flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl ">
        <div className="bg-white shadow-lg rounded-lg md:px-8 md:py-6 md:my-4">
          <main
            className="p-8 flex flex-col items-center justify-center"
            style={{ background: '#e8eff5 url(/noise.png)' }}
          >
            <Avatar shape="circle" size={64} src="/me.jpg" className="mb-4" />
            <h2>Stephen Tseng</h2>
            <div>Web 前端开发工程师 • 现居肯尼亚内罗毕</div>
            <Divider />

            {Object.keys(data).map((type) => (
              <div key={type} className="w-full">
                <header className="w-full p-2 text-left my-4 text-purple-600 font-bold border border-dashed border-purple-800">
                  {type}
                </header>
                {data[type].map((skill, index) => (
                  <div key={index} className="w-full flex justify-between">
                    <span className="text-gray-500 flex-1">{skill[0]}</span>
                    <span className="flex-1">{skill[1]}</span>
                    <span className="flex-1 text-right">
                      {isUrl(skill[2]) ? <a>{skill[2]}</a> : skill[2]}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </main>
        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Ynewtime. All rights reserved.
        </p>
      </div>
    </div>
  );
}
