/* eslint-disable no-console */
import ora from 'ora';
import open from 'open';
import downloadsFolder from 'downloads-folder';
import downloadTorrent from './download';
import webTorrent from './webtorrent';

export default async (data) => {
  const spinner = ora('Save torrent file').start();

  const name = data.title
    .toLowerCase()
    .split(' ')
    .join('_');

  const openfile = async () => open(`${downloadsFolder()}/${name}.torrent`);
  downloadTorrent(data.file, name, async () => {
    spinner.stopAndPersist({
      symbol: '✨',
      text: `Open ${name}.torrent`,
    });
    // eslint-disable-next-line no-param-reassign
    data.downloadsFolder = downloadsFolder();
    try {
      await openfile().then((openState) => {
        openState.addListener('error', () => { webTorrent(data); });
      });
    } catch (error) {
      console.log(error);
    }
  });
};
