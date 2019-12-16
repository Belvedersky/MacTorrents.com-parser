exports.torrentmac = {
  url: 'https://www.torrentmac.net',
  divList: 'article.post',
  post: [
    {
      title: 'h2 a',
      link: 'h2 a@href',
      image: 'img@src',
      date: 'time',
      category: 'span',
      description: 'section.post_content',
    },
  ],
  divTorrent: '#main',
  torrent:
    {
      title: '.appdesc',
      time: 'time',
      category: 'span',
      size: 'table.torrentInfoTable',
      file: 'a.download-btn@href',
      description: 'section.post_content p',
    },
};