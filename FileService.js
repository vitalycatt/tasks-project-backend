import * as uuid from "uuid";
import * as path from "path";

class FileService {
  saveFile(file) {
    try {
      // GENERATE IDENTICAL FILE NAME
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve("static", fileName);
      // MOVING FILE BY 'filePath' PATH
      file.mv(filePath);
      return fileName;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FileService();
