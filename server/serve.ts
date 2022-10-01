import { createReadStream } from "fs";
import { ServerResponse } from "http";
import mime from "mime";
import { join } from "path";

const publicF = join(__dirname, "../docs");

export default (url: string, res: ServerResponse) => {
  const type = mime.getType(url) || "text/plain";

  console.log(url, type);
  const stream = createReadStream(publicF + url);

  stream.on("error", () => {
    res.statusCode = 404;
    res.end();
  });

  stream.on("open", () => {
    res.writeHead(200, { "Content-Type": type });
    stream.pipe(res);
  });
};
