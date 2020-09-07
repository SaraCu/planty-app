import { firestore } from "../../firebase/firebase.utils";

export const getCartItems = async (userId) => {
  const snapshot = await firestore
    .collection(`users/${userId}/cartItems`)
    .get();
  return snapshot.docs.map((doc) => {
    return { data: doc.data(), id: doc.id };
  });
};

export const addToCartAsync = async (userId, cartItem, cartItems) => {
  let item = cartItems.find((i) => i.id === cartItem.id);
  if (item) {
    await firestore
      .collection(`users/${userId}/cartItems/`)
      .doc(item.id)
      .set({
        id: item.id,
        name: item.name,
        quantity: item.quantity + 1,
        price: item.price,
        url: item.url,
      });
  } else {
    await firestore
      .collection(`users/${userId}/cartItems/`)
      .doc(cartItem.id)
      .set({
        id: cartItem.id,
        name: cartItem.name,
        quantity: 1,
        price: cartItem.price,
        url: cartItem.url,
      });
  }
};

export const removeFromCartAsync = async (userId, cartItem, cartItems) => {
  let item = cartItems.find((i) => i.id === cartItem.id);
  if (item) {
    if (item.quantity === 1) {
      await firestore
        .collection(`users/${userId}/cartItems`)
        .doc(cartItem.id)
        .delete();
    } else {
      await firestore
        .collection(`users/${userId}/cartItems/`)
        .doc(item.id)
        .set({
          id: item.id,
          name: item.name,
          quantity: item.quantity - 1,
          price: item.price,
          url: item.url,
        });
    }
  }
};

export const clearFromCartAsync = async (userId, cartItem) => {
  await firestore
    .collection(`users/${userId}/cartItems`)
    .doc(cartItem.id)
    .delete();
};
