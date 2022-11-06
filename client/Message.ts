import socket from './socket';

export default class Message {
  constructor(public text = '', public file?: File) {}

  processFile() {
    if (!this.file) return;

    const body = new FormData();
    body.append('upload', this.file);

    return fetch('http://localhost:9876/upload', {
      method: 'POST',
      body,
    })
      .then(
        async (r) => (await r.json()) as Record<string, string>,
      )
      .then((r) => {
        this.text += `\n http://localhost:9876/${
          r['path'] ?? ''
        }`;
      })
      .catch(console.warn);
  }

  async send() {
    await this.processFile();
    if (!this.text) return;

    socket.send(this.text.trim());
  }
}
