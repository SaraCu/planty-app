import { storage, firestore } from "../../firebase/firebase.utils";

export const getItems = async () => {
  const snapshot = await firestore.collection("items").get();
  return snapshot.docs.map((doc) => {
    return { data: doc.data(), id: doc.id };
  });
};

export const getImages = async () => {
  const images = await storage.ref("images").listAll();
  return images.items.map(async (i) => {
    return { path: i.location.path, url: await i.getDownloadURL() };
  });
};

export const getData = async () => {
  const imagesPromises = await getImages();
  let images = [];
  await Promise.all(imagesPromises).then((values) => (images = values));
  const items = await getItems();

  let result = [];
  items.forEach((item) => {
    const img = images.find((image) => image.path === item.data.fileName);
    result.push({ id: item.id, ...img, ...item.data });
  });
  return result;
};
