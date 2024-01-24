import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Storage } from '../../Config/firebase-config';

const PhotoUpload = async (image) => {
  if (image) {
    const imageName = image.name;
    const random = new Date().getTime();
    const path = `images/${random}_${imageName}`;
    const imagesRef = ref(Storage, path);
    await uploadBytes(imagesRef, image);
    const url = await getDownloadURL(ref(Storage, path));

    return url;
  }
  return '';
};
export default PhotoUpload;
