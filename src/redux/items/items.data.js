import { storage, firestore } from "../../firebase/firebase.utils";

const getItems = async () => {
  const snapshot = await firestore.collection("items").get();
  return snapshot.docs.map((doc) => doc.data());
};

const getImages = async () => {
  const images = await storage.ref("images").listAll();
  return images.items.map((i) => {
    return { path: i.location.path, url: i.getDownloadURL() };
  });
};

export const getData = async () => {
  const images = await getImages();
  const items = await getItems();

  const result = [];
  items.forEach((item) => {
    const img = images.find((image) => image.path === item.fileName);
    result.push({ ...img, ...item });
  });
  return result;
};
