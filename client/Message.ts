import socket from './socket';

export const handlerJSON = async <R = Record<string, string>>(
  r: Response,
): Promise<R> =>
  await r
    .clone()
    .json()
    .catch(async () => await r.text());

export default class Message {
  constructor(public text = '', public file?: File) {}

  processFile() {
    if (!this.file?.name) return;

    const body = new FormData();
    body.append('upload', this.file);

    return fetch('http://localhost:9876/upload', {
      method: 'POST',
      body,
    })
      .then(async (t) => await t.text())
      .then((r) => {
        this.text += `\n http://localhost:9876/uploads/${r}`;
      })
      .catch(console.warn);
  }

  async send() {
    await this.processFile();
    if (!this.text) return;

    socket.send(this.text.trim());
  }
}
