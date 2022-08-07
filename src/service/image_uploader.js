
class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', "iwh8slft");
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/wwwkimminja/upload',
      {
        method: 'post',
        body: data,
      }
    );
    return await result.json();

  }
}

export default ImageUploader;